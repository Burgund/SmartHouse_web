/*
    How to use:
    1.) JavaScript:
         Add new js file in entry as public(target): resource
    2.) CSS/SCSS:
         Add new css / scss file in entry as target file name (not full path) : path to resource
    3.) npm run dev
 */

module.exports = {
    entry: {
        'public/js/modules/reports': './resources/assets/js/modules/reports/main',
        'theme': './resources/assets/scss/theme.scss'
    },
    output: {
        path: __dirname,
        filename: '[name].js'
    },
    watch: false,
    mode: "development",
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [["@babel/preset-env", {
                            targets: {
                                browsers: ['> 1%']
                            }
                        }]]
                    }
                }
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'public/css/[name].css',
                        }
                    },
                    {
                        loader: 'extract-loader'
                    },
                    {
                        loader: 'css-loader?-url'
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            }
        ]
    }
}