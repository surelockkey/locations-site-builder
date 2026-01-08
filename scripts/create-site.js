#!/usr/bin/env node

/**
 * Site Generator Script
 *
 * Creates a new site configuration from template
 *
 * Usage:
 *   node scripts/create-site.js <site-id>
 *
 * Example:
 *   node scripts/create-site.js miami-locksmith
 *
 * Interactive mode (no arguments):
 *   node scripts/create-site.js
 */

import fs from "fs/promises"
import path from "path"
import { fileURLToPath } from "url"
import readline from "readline"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const rootDir = path.join(__dirname, "..")

// ANSI colors for terminal output
const colors = {
  reset: "\x1b[0m",
  bright: "\x1b[1m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  red: "\x1b[31m",
}

function log(message, color = "reset") {
  console.log(`${colors[color]}${message}${colors.reset}`)
}

function question(rl, prompt) {
  return new Promise((resolve) => {
    rl.question(`${colors.blue}${prompt}${colors.reset} `, resolve)
  })
}

async function copyDirectory(src, dest, replacements) {
  await fs.mkdir(dest, { recursive: true })

  const entries = await fs.readdir(src, { withFileTypes: true })

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name)
    const destPath = path.join(dest, entry.name)

    if (entry.isDirectory()) {
      await copyDirectory(srcPath, destPath, replacements)
    } else {
      let content = await fs.readFile(srcPath, "utf-8")

      // Replace template variables
      for (const [key, value] of Object.entries(replacements)) {
        const regex = new RegExp(`{{${key}}}`, "g")
        content = content.replace(regex, value)
      }

      await fs.writeFile(destPath, content, "utf-8")
    }
  }
}

async function createSite(siteId, config) {
  const templateDir = path.join(rootDir, "config", "templates", "default")
  const siteDir = path.join(rootDir, "config", "sites", siteId)

  // Check if site already exists
  try {
    await fs.access(siteDir)
    log(`\n❌ Site "${siteId}" already exists!`, "red")
    return false
  } catch {
    // Site doesn't exist, continue
  }

  log(`\n📦 Creating new site: ${siteId}`, "bright")

  // Prepare replacements
  const replacements = {
    SITE_ID: siteId,
    DOMAIN: config.domain,
    COMPANY_NAME: config.companyName,
    SHORT_NAME: config.shortName || config.companyName,
    TAGLINE: config.tagline,
    PHONE: config.phone,
    PHONE_RAW: config.phone.replace(/\D/g, ""),
    EMAIL: config.email,
    ADDRESS: config.address,
  }

  // Copy template
  await copyDirectory(templateDir, siteDir, replacements)

  log(`\n✅ Site created successfully!`, "green")
  log(`\n📁 Location: config/sites/${siteId}`, "blue")
  log(`\n🚀 To use this site, set in your .env.local:`, "yellow")
  log(`   NEXT_PUBLIC_SITE_ID=${siteId}\n`, "bright")

  return true
}

async function interactiveMode() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  })

  log("\n🎨 Locksmith Site Generator\n", "bright")

  try {
    const siteId = await question(rl, "Site ID (e.g., miami-locksmith):")

    if (!siteId || !/^[a-z0-9-]+$/.test(siteId)) {
      log("\n❌ Invalid site ID. Use lowercase letters, numbers, and hyphens only.", "red")
      rl.close()
      return
    }

    log("\n📋 Enter site details:\n", "bright")

    const config = {
      domain: await question(rl, "Domain (e.g., miami.surelockkey.com):"),
      companyName: await question(rl, "Company Name (e.g., Sure Lock & Key Miami):"),
      shortName: await question(rl, "Short Name (e.g., SLK Miami):"),
      tagline: await question(rl, "Tagline (e.g., Trusted Locksmith Services):"),
      phone: await question(rl, "Phone (e.g., (305) 123-4567):"),
      email: await question(rl, "Email (e.g., info@miami.com):"),
      address: await question(rl, "Address (e.g., Miami, FL):"),
    }

    rl.close()

    await createSite(siteId, config)
  } catch (error) {
    log(`\n❌ Error: ${error.message}`, "red")
    rl.close()
  }
}

async function main() {
  const siteId = process.argv[2]

  if (!siteId) {
    await interactiveMode()
  } else {
    log("❌ Please use interactive mode by running: node scripts/create-site.js", "red")
    log("Or provide a full configuration object", "yellow")
  }
}

main().catch((error) => {
  log(`\n❌ Fatal error: ${error.message}`, "red")
  process.exit(1)
})
