import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react"
import { FaPinterest, FaTiktok, FaMedium, FaMapMarkedAlt } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"

interface SocialIconsProps {
  socialMedia: {
    instagram?: string
    pinterest?: string
    twitter?: string
    tiktok?: string
    medium?: string
    youtube?: string
    facebook?: string
    linkedin?: string
    map?: string
  }
  className?: string
  iconClassName?: string
  variant?: "default" | "rounded" | "squared"
}

export function SocialIcons({
  socialMedia,
  className = "flex gap-4",
  iconClassName = "h-5 w-5",
  variant = "default",
}: SocialIconsProps) {
  const getLinkClassName = () => {
    if (variant === "rounded") {
      return "p-3 rounded-xl hover:opacity-80 transition-all"
    }
    if (variant === "squared") {
      return "p-2 rounded hover:opacity-80 transition-all"
    }
    return "hover:opacity-70"
  }

  const linkClass = getLinkClassName()

  return (
    <div className={className}>
      {socialMedia.facebook && (
        <a href={socialMedia.facebook} target="_blank" rel="noopener noreferrer" className={linkClass}>
          <Facebook className={iconClassName} />
        </a>
      )}
      {socialMedia.instagram && (
        <a href={socialMedia.instagram} target="_blank" rel="noopener noreferrer" className={linkClass}>
          <Instagram className={iconClassName} />
        </a>
      )}
      {socialMedia.twitter && (
        <a href={socialMedia.twitter} target="_blank" rel="noopener noreferrer" className={linkClass}>
          <FaXTwitter className={iconClassName} />
        </a>
      )}
      {socialMedia.linkedin && (
        <a href={socialMedia.linkedin} target="_blank" rel="noopener noreferrer" className={linkClass}>
          <Linkedin className={iconClassName} />
        </a>
      )}
      {socialMedia.pinterest && (
        <a href={socialMedia.pinterest} target="_blank" rel="noopener noreferrer" className={linkClass}>
          <FaPinterest className={iconClassName} />
        </a>
      )}
      {socialMedia.tiktok && (
        <a href={socialMedia.tiktok} target="_blank" rel="noopener noreferrer" className={linkClass}>
          <FaTiktok className={iconClassName} />
        </a>
      )}
      {socialMedia.medium && (
        <a href={socialMedia.medium} target="_blank" rel="noopener noreferrer" className={linkClass}>
          <FaMedium className={iconClassName} />
        </a>
      )}
      {socialMedia.youtube && (
        <a href={socialMedia.youtube} target="_blank" rel="noopener noreferrer" className={linkClass}>
          <Youtube className={iconClassName} />
        </a>
      )}
      {socialMedia.map && (
        <a href={socialMedia.map} target="_blank" rel="noopener noreferrer" className={linkClass}>
          <FaMapMarkedAlt className={iconClassName} />
        </a>
      )}
    </div>
  )
}
