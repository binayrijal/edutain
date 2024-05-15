const path = require('path');

module.exports = {
  chainWebpack: config => {
    // Add rule to handle PDF files
    config.module
      .rule('pdf')
      .test(/\.(pdf)$/)
      .use('file-loader')
      .loader('file-loader')
      .options({
        name: '[name].[ext]',
        outputPath: 'assets/pdf/', // Adjust the output path as needed
      });
  },
  transpileDependencies: true
};
