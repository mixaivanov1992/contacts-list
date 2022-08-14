/* eslint-disable */
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
    entry: {
        main: ['@babel/polyfill', './src/index.tsx'],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        plugins: [new TsconfigPathsPlugin()],
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                    },
                ],
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    stats: 'errors-only',
};
