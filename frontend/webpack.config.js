const webpack = require('webpack');
const Dotenv = require('dotenv-webpack')

module.exports = {
  entry: [
    './src/index.js',
    "webpack-dev-server/client?http:54.175.210.240:80",
    "webpack/hot/only-dev-server",
  ],
  node: {
    fs: 'empty'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
            // style-loader
            { loader: 'style-loader' },                    
            {
                loader: 'css-loader',
                options: {
                    modules: true
                }
            },
        ]
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new Dotenv({
      path: './.env', // Path to .env file (this is the default)
      safe: true // load .env.example (defaults to "false" which does not use dotenv-safe)
    })
  ],
  devServer: {
    contentBase: './dist',
    disableHostCheck: true,
    headers: {
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization",
      "Access-Control-Allow-Origin": "*"
    },
    proxy: {
      '/api/**': {
        target: 'http://0.0.0.0:8000',
        secure: false,
        pathRewrite: { '^/api': '' },
        changeOrigin: true
      },
    },
    hot: true,
    onListening: function(server) {
      const port = server.listeningApp.address().port;
      console.log('Listening on port:', port);
    }
  }
};
