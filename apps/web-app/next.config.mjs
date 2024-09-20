// @ts-check

// Import necessary functions from NX using ES module syntax
import { composePlugins, withNx } from '@nx/next';

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
};

// List of plugins to apply (in this case, only withNx for now)
const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
];

// Export the configuration using ES module export syntax
export default composePlugins(...plugins)(nextConfig);
