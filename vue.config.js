const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/vueJsCT/',

})
// const { defineConfig } = require('@vue/cli-service')
// const path = require('path');

// module.exports = defineConfig({
//   transpileDependencies: true,
//   devServer: {
//     https: {
//       key: path.resolve(__dirname, 'key.pem'),
//       cert: path.resolve(__dirname, 'cert.pem'),
//       passphrase: 'Deven@6805',

//     },
//   },
// })
