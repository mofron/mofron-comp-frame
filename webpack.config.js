module.exports = {
    entry: __dirname + '/src/parts.js',
    output: {
        path: __dirname + '/dist',
        filename: 'frame.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'  ,
            query: {
                presets: ['es2015']
            }
        }]
    }
};
