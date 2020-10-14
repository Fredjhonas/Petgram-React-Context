const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifestPlugin = require('webpack-pwa-manifest');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

const path = require('path');

module.exports = {
  output: {
    filename: 'app.bundle.js',
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new WebpackPwaManifestPlugin({
      name: 'Petgram - Your pet photo app',
      shortname: 'Petgram',
      description: 'With Petgram you can see beautiful pet photos',
      background_color: '#e6e6fa',
      theme_color: '#127B8B',
      icons: [
        {
          src: path.resolve('src/assets/icon.png'),
          sizes: [96, 128, 192, 256, 384, 512]
        }
      ]
    }),
    new WorkboxWebpackPlugin.GenerateSW({
      runtimeCaching: [{
        urlPattern: new RegExp('https://(res.cloudinary.com|images.unsplash.com)'),
        handler: 'CacheFirst',
        options: {
          cacheName: 'images'
        }
      },
      {
        urlPattern: new RegExp('https://petgram-fred.vercel.app'),
        handler: 'NetworkFirst',
        options: {
          cacheName: 'api'
        }
      }]
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.(png|gif|jpg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/[hash].[ext]'
            }
          }
        ]
      }
    ]
  }
};
