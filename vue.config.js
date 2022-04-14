const { defineConfig } = require('@vue/cli-service')
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')
const path = require('path')

module.exports = defineConfig({
  transpileDependencies: true,
  pages: {
    index: {
      entry: 'src/main.js',
      title: 'Pasar NFT'
    }
  },
  configureWebpack: {
    plugins: [
      new NodePolyfillPlugin()
    ]
  },
  devServer: {
    host: 'localhost'
  }
})
