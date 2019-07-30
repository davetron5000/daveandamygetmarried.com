const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = [
  new CopyWebpackPlugin(
    [
      { from: './site/images/**/*', to: './images', flatten: true, ignore: [ "PR-flag.png", "site.webmanifest", "browserconfig.xml"  ] },
      { from: './site/pdf/**/*', to: './pdf', flatten: true },
      { from: './site/fonts/**/*', to: './fonts', flatten: true },
      { from: './site/images/favicon.ico', to: '.', flatten: true },
      { from: './site/images/site.webmanifest', to: '.', flatten: true },
      { from: './site/images/browserconfig.xml', to: '.', flatten: true }
    ],
    {
      debug: true
    }
  )
];
