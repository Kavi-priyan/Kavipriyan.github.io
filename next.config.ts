/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig = {
  output: 'export',
  basePath: isGithubPages ? '/Kavipriyan.github.io' : '',
  assetPrefix: isGithubPages ? '/Kavipriyan.github.io/' : '',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
