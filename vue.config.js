module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/worktime/'
    : '/',
  pwa: {
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
};
