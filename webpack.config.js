const nodeExternals = require('webpack-node-externals');
const path = require('path');
const loaders = [
    {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
            loader: 'babel-loader',
        },
    },
];
const client = {
    entry: './src/client.js',
    output: {
        path: path.resolve(__dirname, 'dist/public'),
        filename: 'bundle.js',
    },
    module: {
        rules: loaders,
    },
};
const server = {
    entry: './src/server.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'server.js',
    },
    module: {
        rules: loaders,
    },
    target: 'node', // in order to ignore built-in modules like path, fs, etc.
    externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
};
module.exports = [client, server];
