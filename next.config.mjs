/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "learnyzen.com", port: "" },
    ],
  },
};

export default nextConfig;
