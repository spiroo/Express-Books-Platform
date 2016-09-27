var webpack = require('webpack');
var path = require('path');

var publicPath = 'http://localhost:3000/';
var hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true';

var devConfig = {
    //页面入口文件配置
    entry: {
        book: ['./public/js/book.js', hotMiddlewareScript],
        user: ['./public/js/user.js', hotMiddlewareScript]
    },
    //入口文件输出配置
    output: {
        filename: './public/js/[name].js',
        path: path.resolve(__dirname, './dist'),
        publicPath: publicPath
    },
    devtool: 'eval-source-map',
    module: {
      //加载器配置
        loaders: [{
            test: /\.(png|jpg)$/,
            loader: 'url?limit=8192&context=client&name=public/images/[name].[ext]'
        },
        //.scss 文件使用 style-loader、css-loader 和 sass-loader 来编译处理
        {
            test: /\.scss$/,
            loader: 'style!css?sourceMap!resolve-url!sass?sourceMap'
        }
      ]
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.CommonsChunkPlugin("common.js", ["book", "user"])
    ]
};

module.exports = devConfig;
