/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: (() => {
    let compilerConfig = {
      // styledComponentsの有効化
      styledComponents: true,
    }
    if (process.env.NODE_ENV === 'production') {
      compilerConfig = {
        ...compilerConfig,
        reactRemoveProperties: { properties: ['^data-testid$']},
      }
    }
    return compilerConfig
  })(),
  // compiler: {
  //   // styledComponentsの有効化
  //   styledComponents: true,
  // },
}

module.exports = nextConfig
