/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "via.placeholder.com", // Allow this hostname
        port: "", // Leave empty for default port
        pathname: "/**", // Allow all paths
      },
    ],
  },
};

export default nextConfig;
