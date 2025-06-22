/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 👈 tells Next.js to statically export
  // basePath: '/<repo-name>', 👈 optional if you're not deploying to a subfolder
};

module.exports = nextConfig;
