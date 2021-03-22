const path = require('path');
module.exports = {
  css: {
    // Enable CSS source maps.
    sourceMap: true,
    loaderOptions: {
      sass: {
        sassOptions: {
          includePaths: [path.resolve(__dirname, "./node_modules"), path.resolve(__dirname, "./node_modules/@material/")],
        }
        //   importer:importerFCM
      },
    },
  },
  chainWebpack: config => {
    config.module
      .rule("scss")
      .oneOf("vue-modules")
      .use("sass-loader")
      .tap(args => {

        args.sassOptions = args.sassOptions || {};
        args.sassOptions.includePaths = ["./node_modules", "./node_modules/@material/"];

        //   args.includePaths = ["./node_modules", "./node_modules/@material/"]
        //   args.importer = importerFCM
        return args
      });
  }
}