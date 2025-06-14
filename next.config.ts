import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["loremflickr.com", "picsum.photos", "placeimg.com", "images.unsplash.com", "res.cloudinary.com"],
  },
   eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
