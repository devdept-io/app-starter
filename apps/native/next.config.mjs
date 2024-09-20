// @ts-check

// Import necessary functions from NX using ES module syntax
import { composePlugins, withNx } from '@nx/next';

// Define whether the app is in production mode
const isProd = process.env.NODE_ENV === 'production';

// Define the internal host, use `localhost` if `TAURI_DEV_HOST` is not provided
const internalHost = process.env.TAURI_DEV_HOST || 'localhost';

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions & import('next').NextConfig}
 **/
const baseConfig = {
  // Ensure Next.js uses SSG instead of SSR
  output: 'export',

  // Note: This feature is required to use the Next.js Image component in SSG mode.
  images: {
    unoptimized: true,
  },

  // Specify the directory for Next.js output
  distDir: 'apps/native/.next',

  // Configure assetPrefix depending on the environment
  assetPrefix: isProd ? '' : `http://${internalHost}:3000`,

  // NX-specific configurations
  nx: {
    // Set this to true if you would like to use SVGR
    svgr: false,
  },
};

// List of plugins to apply (in this case, only withNx for now)
const plugins = [withNx];

// Export the configuration using ES module export syntax
export default composePlugins(...plugins)(baseConfig);
