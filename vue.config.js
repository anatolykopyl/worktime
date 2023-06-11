module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/worktime/'
    : '/',
  pwa: {
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black-transculent',
    themeColor: '#252525',
    workboxOptions: {
      skipWaiting: true,
      clientsClaim: true,
    },
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/scss/_variables.scss";
        `,
      },
    },
  },
  transpileDependencies: [
    'maska',
  ],
};
