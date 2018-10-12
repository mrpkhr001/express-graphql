const path = require('path');
const nodeExternals = require('webpack-node-externals');
const StartServerPlugin = require('start-server-webpack-plugin');
const webpack = require('webpack');

const BUILD_DIR = path.resolve(__dirname, 'build');

module.exports = {
    entry: ['webpack/hot/poll?1000', path.resolve(__dirname, 'src/index.js')],
    output: {
        path: BUILD_DIR,
        filename: 'backend.js'
    },
    devtool: 'sourcemap',
    target: 'node',
    node: {
        __filename: true,
        __dirname: true,
    },
    externals: [nodeExternals({whitelist: ['webpack/hot/poll?1000']})],
    module: {
        rules: [
            {
                test: /\.js?$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            babelrc: false,
                            presets: [['env', {modules: false}]],
                            plugins: ['transform-regenerator', 'transform-runtime']
                        }
                    }
                ],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new StartServerPlugin({name: 'backend.js'}),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env': {BUILD_TARGET: JSON.stringify('server')},
            'process.env.NODE_ENV': JSON.stringify('development'),
        }),
        new webpack.BannerPlugin({banner: 'require("source-map-support").install();', raw: true, entryOnly: false})
    ],
    mode: 'development',

}