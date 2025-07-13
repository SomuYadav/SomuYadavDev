/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enables static HTML export for GitHub Pages
  basePath: '/somu-portfolio', // Adjust this to your repository name if different
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        port: '',
        pathname: '**',
      },
    ],
    unoptimized: true, // Recommended for static export
  },
};

export default nextConfig;
