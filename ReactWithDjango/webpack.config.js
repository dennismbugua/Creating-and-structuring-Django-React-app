module.exports = {
    module: {
        rules: [
            {
                // test: /\.js$/,
                test: /\.js|\.jsx$/,

                enforce: 'pre',
                use: ['source-map-loader'],

                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                },
            },

            // Relevant bit of config for style loader and css loader:
            {
                test: /\.css$/,
                // the order of `use` is important!
                use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
            },

            //Image Loader. Install <== npm install url-loader --save-dev ==>
            {
                test: /\.(jpg|png)$/,
                use: {
                    loader: 'url-loader',
                },
            },

        ]
    },

    // Managing bundle size
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    }

}