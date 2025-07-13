/** @type {import('next').NextConfig} */
const nextConfig = {
output: 'export', // Ensures a static HTML export for GitHub Pages
basePath: '/somu-portfolio', // IMPORTANT: Replace with your GitHub repository name if different
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
  unoptimized: true, // Recommended for static exports as Next.js image optimization requires a server
},
};

export default nextConfig;
