/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        bufferutil: false,
        'utf-8-validate': false,
      };
    }

    config.module.rules.push({
      test: /\.(js|mjs|jsx|ts|tsx)$/,
      include: [
        /\/node_modules\/bufferutil/,
        /\/node_modules\/utf-8-validate/,
      ],
    });
    return config;
  },
  images: {
    domains: ["kdgftaathmcwwwbflouf.supabase.co"],
  },
};

module.exports = nextConfig;
