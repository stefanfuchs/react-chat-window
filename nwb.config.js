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
        demo: ["./demo/src/index.js"]
      }
      config.resolve.extensions = ['.ts', '.tsx', '.js', '.jsx']
      config.module.rules.push({
        "test": /\.tsx?$/,
        "loader": "ts-loader"
      });

      return config;
    }
  }
}
