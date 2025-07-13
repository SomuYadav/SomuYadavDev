/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/somu-portfolio', // IMPORTANT: Change this to your GitHub repository name if different
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true, // Required for static export with Image component
  },
};

export default nextConfig;
