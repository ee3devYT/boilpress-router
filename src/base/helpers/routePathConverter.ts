import path from 'path';

// Function to convert file paths to route paths | Idk how this works but it works
export const toRoutePath = (filePath: string, baseDir: string): string => {
  const relativePath = path.relative(baseDir, filePath).replace(/\\/g, '/'); // Handle Windows paths
  let routePath = relativePath.replace(/\.(ts|js|cjs|mjs)$/, ''); // Remove file extension

  if (!routePath.startsWith('/')) {
    routePath = '/' + routePath;
  }

  if (routePath.endsWith('/index')) {
    routePath = routePath.slice(0, -'/index'.length);
  }

  if (routePath === '') {
    routePath = '/';
  }

  // Convert dynamic route segments
  routePath = routePath.replace(/\[(.+?)\]/g, ':$1');

  return routePath;
};