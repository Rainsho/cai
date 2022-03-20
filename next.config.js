const withImages = require('next-images');
const withTM = require('next-transpile-modules')(['antd-mobile']);

const nextConfig = withTM(
  withImages({
    reactStrictMode: true,
  })
);

module.exports = nextConfig;
