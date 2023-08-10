const { createVanillaExtractPlugin } = require("@vanilla-extract/next-plugin");
const withVanillaExtract = createVanillaExtractPlugin();
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["ui", "styles"],
};

module.exports = withVanillaExtract(nextConfig);
