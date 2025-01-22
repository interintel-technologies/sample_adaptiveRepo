
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const webpack = require("webpack");
const { ESBuildMinifyPlugin } = require('esbuild-loader');
const path = require('path');
const WebpackAssetsManifest = require('webpack-assets-manifest');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");

let copyPluginPatterns = mode => {
    let patterns = [
        { 
            from: "node_modules/@webcomponents/webcomponentsjs/webcomponents-loader.js", 
            to: "node_modules/@webcomponents/webcomponentsjs/webcomponents-loader.js" 
        },
        { 
            from: "node_modules/@fortawesome/fontawesome-free/sprites/", 
            to: "node_modules/@fortawesome/fontawesome-free/sprites/" 
        },
        { 
            from: "node_modules/@fortawesome/fontawesome-free/css/all.css", 
            to: "node_modules/@fortawesome/fontawesome-free/css/all.css" 
        },
        { 
            from: "node_modules/@fortawesome/fontawesome-free/webfonts/", 
            to: "node_modules/@fortawesome/fontawesome-free/webfonts/" 
        },
        {
            from: "src/themes/dsv2.0/svgs/",
            to: "assets/svgs/"
        }
    ];

    return [
        ...patterns
    ];
};

let conditionalPlugins = (mode, page) => {
    return [
        new HtmlWebpackPlugin({
            inject: true,
            // filename: page + ".html",
            template: `./src/static-pages/${page}/${page}.html`
        })
    ];
}

module.exports = (env, argv) =>{
    const page=argv.name;
    return {
        entry: {
            [page]: `./src/static-pages/${page}/${page}.js`
        },
        devServer: {
            historyApiFallback: true
        },
        module: {
            rules: [
                { 
                    test: /\.md|\.docx$/, 
                    loader: 'ignore-loader' 
                },
                {
                    test: /\.js$/,
                    loader: 'babel-loader'
                },
                {
                    test: /\.template\.js$/,
                    loader: 'minify-template-literal-loader',
                    options: {
                        caseSensitive: true,
                        collapseWhitespace: true
                    }
                },
                {
                    test: /\.js$/,
                    loader: require.resolve('@open-wc/webpack-import-meta-loader'),
                },
                {
                    test: /\.(woff|woff2|eot|ttf|otf)$/,
                    type: 'asset/resource',
                    generator: {
                        publicPath: argv.mode === "development" ? '/' : '/static/static-files/'
                    }
                },
                {
                    test: /\.(png|svg|jpg|jpeg|gif)$/i,
                    type: 'asset/resource',
                },
                {
                    test: /\.css|\.s(c|a)ss$/,
                    use: [
                        {
                            loader: 'lit-css-loader',
                            options: {
                                uglify: true, // defaults to false
                                specifier: "lit-element"
                            },
                        },
                        'sass-loader'
                    ]
                }
            ]
        },
        optimization: {
            minimizer: [
                new ESBuildMinifyPlugin({
                    target: 'es2021',
                    css: true
                }),
                new TerserPlugin({
                    exclude: ['/src/themes/', '/src/components/'],
                }),
            ]
        },
        plugins: [
            new CleanWebpackPlugin(),
            new CopyPlugin({
                patterns: [...copyPluginPatterns(argv.mode)],
            }),
            new WebpackAssetsManifest(),
            new webpack.DefinePlugin({
                PRODUCTION: JSON.stringify(argv.mode === 'production'),
                THEME: argv.theme,
            }),
            ...conditionalPlugins(argv.mode,page)
        ],
        output: {
            globalObject: "this",
            path: path.join(__dirname, 'dist'),
            publicPath: argv.mode === "development" ? '/' : `/static/static-files/${page}/`,
            filename: '[name].js',
            chunkFilename: 'chunks/[name]-[chunkhash].js',
            assetModuleFilename: 'assets/[name][ext]',
        }
    }
};
