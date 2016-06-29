module.exports = {
  module: {
    preLoaders: [
      // {
      //   test: /\.js$/,
      //   exclude: /node_modules/,
      //   loader: 'eslint'
      // }
    ],

    loaders: [
      {
        test: /.json$/,
        loaders: [
          'json'
        ]
      },
      {
        test: /\.(css|less)$/,
        loaders: [
          'style',
          'css',
          'less',
          'postcss'
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: [
          'ng-annotate'
        ]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|.*\.spec\.js)/,
        loader: 'isparta'
      },
      { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader' },
      { test: /\.html$/, loader: "html" },
      ,
    ]
  },
  plugins: [],
  debug: true,
  devtool: 'cheap-module-eval-source-map'
};
