const webpack = require('webpack');
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HTMLInlineCSSWebpackPlugin = require("html-inline-css-webpack-plugin").default;
const webpackMajorVersion = require('webpack/package.json').version.split('.')[0];

module.exports = (env, arg) => {
  const config = {
    context: __dirname,
    entry: "./src/main.ts",
    output: {
      //path: path.join(process.cwd(), "dist/visiondream-webpack"),
      path: path.join(__dirname, 'dist/visiondream-webpack-' + webpackMajorVersion),
      publicPath: '',
      filename: "[name].[chunkhash].js",
      crossOriginLoading: false
    },
    resolve: {
      extensions: [".js", ".ts"],
      alias: {
        '@': path.resolve(__dirname, './src/app'),
      }
    },
    module: {
      rules: [
        {
          test: /\.(png|jpe?g)$/,
          loader: "file-loader"
        },
        {
          test: /\.ts$/,
          loader: "ts-loader",
          loader: "angular2-template-loader"
        },
        {
          test: /\.html$/,
          loader: "html-loader"
        },
        {
          test: /\.css$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                publicPath: './',
                hmr: process.env.NODE_ENV === 'development',
              },
            },
            'css-loader',
          ],
        },
        {
          test: /\.less$/,
          use: [
            MiniCssExtractPlugin.loader,
            "style-loader",
            "css-loader",
            {
              loader: "postcss-loader",
              options: {
                plugins: () => [
                  require("autoprefixer")({
                    grid: "autoplace"
                  }),
                  require("cssnano")()
                ]
              }
            },
            "less-loader"
          ]
        },
        // Workaround for warning: System.import() is deprecated and will be removed soon. Use import() instead.
        {
          test: /[\/\\]@angular[\/\\].+\.js$/,
          parser: { system: true }
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        templateParameters: {
          'VisionDream': 'Website'
        },
        //template: "visiondream-webpack-" + webpackMajorVersion + "/index.html",
        //favicon: "visiondream-webpack-" + webpackMajorVersion + "/favicon.ico",
        template: "index.html",
        favicon: "favicon.ico",
        minify: {
          collapseBooleanAttributes: true,
          collapseInlineTagWhitespace: true,
          collapseWhitespace: true,
          removeComments: true
        }
      }),
      new MiniCssExtractPlugin({
        filename: "[name].css",
        chunkFilename: "[id].css",
        ignoreOrder: false,
      }),
      new HTMLInlineCSSWebpackPlugin(),
      new webpack.DefinePlugin({
        // Global app configApp object
        configApp: JSON.stringify({
          apiUrlLc: 'http://localhost:44301',
          apiUrlEx: 'https://localhost:44331'
        })
      }),
      // Workaround for warning: Critical dependency: the request of a dependency is an expression
      new webpack.ContextReplacementPlugin(
        /\@angular(\\|\/)core(\\|\/)fesm5/,
        path.resolve(__dirname, 'src')
      )
    ],
    optimization: {
      splitChunks: {
        chunks: 'all',
      },
      runtimeChunk: true
    },
    devServer: {
      port: 44303,
      historyApiFallback: true
    },
  };

  if (arg.mode === "production") {
    config.plugins = config.plugins.concat([
      new CleanWebpackPlugin()
    ]);
  }

  return config;
};
