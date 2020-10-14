module.exports = {
    devServer: {
      open: true,
      proxy: {
        '/api': {
          target: 'http://localhost:5009'
        }
      }
    }
  }