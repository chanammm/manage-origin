var [path, HtmlWebpackPlugin, MiniCssExtractPlugin, optimizecssassets, uglifyjs] = [
    require('path'), require('html-webpack-plugin'), require('mini-css-extract-plugin'), require('optimize-css-assets-webpack-plugin'), require('uglifyjs-webpack-plugin')
];
module.exports = {
    mode: 'development',  //模式 production development
    optimization: {
        minimizer: [
            new uglifyjs({
                cache: false
            }),
            new optimizecssassets()
        ]
    },
    entry: {
        config: './config.js',
        login: './src/public/javascripts/login.js', //登陆操作
        index: './src/public/javascripts/index.js', //common index
        list: './src/public/javascripts/list.js', //list
        crud: './src/public/javascripts/crud.js', //crud
    },
    output: {
        filename: '[name]._23_aKvs-b8bW2Vg3fwHozO.js',
        path: path.resolve(__dirname, './src/dist/javascripts/')
    },
    watch: true,
    watchOptions: {
        poll: 1000,
        aggregateTimeout: 1000,
        ignored: /node_modules/
    },
    resolve: {
        modules: [path.resolve('node_modules')],
        alias: {
            // vue: './vue/dist/vue.js',
            // mainFiedlds: ['style', 'main'],
            // mainFiles: [],
            // extensions: ['.js','.css','.json']
            // china: './'
        }
    },
    plugins: [
        new HtmlWebpackPlugin({  //login
            template: './app.html',
            filename: '../app.htm',
            minify: {
                removeAttributeQuotes: true,
                collapseWhitespace: true
            },
            hash: true,
            chunks: ['config', 'login']
        }),
        new HtmlWebpackPlugin({  //common index
            template: './src/views/common/index.html',
            filename: '../views/common/index.htm',
            minify: {
                removeAttributeQuotes: true,
                collapseWhitespace: true
            },
            hash: true,
            chunks: ['config', 'index']
        }),
        new HtmlWebpackPlugin({  //index
            template: './src/views/page/index.html',
            filename: '../views/index.htm',
            minify: {
                removeAttributeQuotes: true,
                collapseWhitespace: true
            },
            hash: true,
            chunks: []
        }),
        new HtmlWebpackPlugin({  //lsit
            template: './src/views/page/list.html',
            filename: '../views/list.htm',
            minify: {
                removeAttributeQuotes: true,
                collapseWhitespace: true
            },
            hash: true,
            chunks: ['config', 'list']
        }),
        new HtmlWebpackPlugin({  //management
            template: './src/views/page/management.html',
            filename: '../views/management.htm',
            minify: {
                removeAttributeQuotes: true,
                collapseWhitespace: true
            },
            hash: true,
            chunks: ['config', 'crud']
        }),
        new HtmlWebpackPlugin({  //log
            template: './src/views/page/log.html',
            filename: '../views/log.htm',
            minify: {
                removeAttributeQuotes: true,
                collapseWhitespace: true
            },
            hash: true,
            chunks: ['config', 'list']
        }),
        new HtmlWebpackPlugin({  //machineterlist
            template: './src/views/page/machineterlist.html',
            filename: '../views/machineterlist.htm',
            minify: {
                removeAttributeQuotes: true,
                collapseWhitespace: true
            },
            hash: true,
            chunks: ['config', 'list']
        }),
        new HtmlWebpackPlugin({  //machineter
            template: './src/views/page/machineter.html',
            filename: '../views/machineter.htm',
            minify: {
                removeAttributeQuotes: true,
                collapseWhitespace: true
            },
            hash: true,
            chunks: ['config', 'crud']
        }),
        new HtmlWebpackPlugin({  //machinelog
            template: './src/views/page/machinelog.html',
            filename: '../views/machinelog.htm',
            minify: {
                removeAttributeQuotes: true,
                collapseWhitespace: true
            },
            hash: true,
            chunks: ['config', 'list']
        }),
        new HtmlWebpackPlugin({  //machinerecord
            template: './src/views/page/machinerecord.html',
            filename: '../views/machinerecord.htm',
            minify: {
                removeAttributeQuotes: true,
                collapseWhitespace: true
            },
            hash: true,
            chunks: ['config', 'list']
        }),
        new HtmlWebpackPlugin({  //partclassification
            template: './src/views/page/partclassification.html',
            filename: '../views/partclassification.htm',
            minify: {
                removeAttributeQuotes: true,
                collapseWhitespace: true
            },
            hash: true,
            chunks: ['config', 'list']
        }),
        new HtmlWebpackPlugin({  //spareparts
            template: './src/views/page/spareparts.html',
            filename: '../views/spareparts.htm',
            minify: {
                removeAttributeQuotes: true,
                collapseWhitespace: true
            },
            hash: true,
            chunks: ['config', 'list']
        }),
        new HtmlWebpackPlugin({  //sparepart
            template: './src/views/page/sparepart.html',
            filename: '../views/sparepart.htm',
            minify: {
                removeAttributeQuotes: true,
                collapseWhitespace: true
            },
            hash: true,
            chunks: ['config', 'crud']
        }),
        new HtmlWebpackPlugin({  //partsapplication
            template: './src/views/page/partsapplication.html',
            filename: '../views/partsapplication.htm',
            minify: {
                removeAttributeQuotes: true,
                collapseWhitespace: true
            },
            hash: true,
            chunks: ['config', 'list']
        }),
        new HtmlWebpackPlugin({  //stock
            template: './src/views/page/stock.html',
            filename: '../views/stock.htm',
            minify: {
                removeAttributeQuotes: true,
                collapseWhitespace: true
            },
            hash: true,
            chunks: ['config', 'list']
        }),
        new HtmlWebpackPlugin({  //workOrder
            template: './src/views/page/workorder.html',
            filename: '../views/workorder.htm',
            minify: {
                removeAttributeQuotes: true,
                collapseWhitespace: true
            },
            hash: true,
            chunks: ['config', 'list']
        }),
        new HtmlWebpackPlugin({  //cosorder
            template: './src/views/page/cosorder.html',
            filename: '../views/cosorder.htm',
            minify: {
                removeAttributeQuotes: true,
                collapseWhitespace: true
            },
            hash: true,
            chunks: ['config', 'crud']
        }),
        new MiniCssExtractPlugin({
            template: './src/public/stylesheets/base.min.css',
            filename: '../stylesheets/[name]_23_aKvs-b8bW2Vg3fwHozO.css'
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/, use: [
                    {
                        loader: 'style-loader',
                        options: {
                            insertAt: 'top'  //出现在顶部
                        }
                    },
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10 * 1024,
                        outputPath: './images/'
                    }
                }
            },
            {
                test: /\.(html)$/,
                use: {
                    loader: 'html-loader',
                    options: {
                        attrs: ['img:src', 'img:data-src', 'audio:src'],
                        minimize: false
                    }
                }
            }
        ]
    }
}