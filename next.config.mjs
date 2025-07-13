import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/somu-portfolio', // Adjust this to your GitHub Pages repository name
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true, // Required for static export with next/image
  },
  webpack: (config, { isServer }) => {
    // Add a rule to handle PDF files
    config.module.rules.push({
      test: /\.pdf$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: '/_next/static/files', // Path where PDFs will be served
            outputPath: `${isServer ? '../' : ''}static/files`, // Output directory for PDFs
            name: '[name].[ext]', // Keep original file name and extension
          },
        },
      ],
    });

    return config;
  },
};

export default nextConfig;
