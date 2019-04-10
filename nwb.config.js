module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'liveChat',
      externals: {
        react: 'React'
      }
    }
  },
  webpack: {
    config(config) {
      config.entry = {
        demo: ["./demo/src/index.tsx"]
      }
      //fix a issue with the 'fs' module not found error
      //https://github.com/webpack-contrib/css-loader/issues/447
      config.node = {
        fs: 'empty',
        readline: 'empty'
      }
      config.resolve.extensions = ['.ts', '.tsx', '.js', '.jsx']
      config.module.rules.push({
        "test": /\.tsx|.ts?$/,
        "loader": "ts-loader"
      });

      return config;
    }
  }
}
