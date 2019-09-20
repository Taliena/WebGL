const path = require('path');
const webpack = require('webpack');
const outDir = process.env.OUT_DIR ? path.resolve(process.env.OUT_DIR) : path.resolve(__dirname, "./bin/");

const plugins = [
    new webpack.NoEmitOnErrorsPlugin(),
    new WebpackOnBuildFinishPlugin(onFinish)
];


const entries = {};

entries['game'] = `${__dirname}/src/index.ts`;

module.exports = {
    entry: entries,
    output: {
        path: outDir,
        publicPath: "/",
        filename: `[name].js`
    },

    resolve: {
        extensions: ['.js', '.ts']
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.js$/,
                use: 'source-map-loader',
                exclude: /node_modules/

            },
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.html$/,
                use: "dot-loader"
            },
            {
                test: /.(png|jpg)$/,
                use: 'file-loader?name=img/[name].[ext]'
            }
        ]
    },
    devtool: 'source-map',
    plugins
};

function onFinish(stats) {
    const errors = stats.compilation.errors;

    this.callback && this.callback();
    if (errors && errors.length) {
        setTimeout(() => process.exit(1), 1000);
    }
}

function WebpackOnBuildFinishPlugin(callback) {
    this.callback = callback;
}

WebpackOnBuildFinishPlugin.prototype.apply = function (compiler) {
    compiler.plugin('done', this.callback);
};
