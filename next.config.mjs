/** @type {import('next').NextConfig} */
const nextConfig = {
  // 👇 Додаємо цей рядок, щоб виправити помилку з імпортом TS файлів з node_modules
  transpilePackages: ["@tech-slk/landing-builder"],

  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
