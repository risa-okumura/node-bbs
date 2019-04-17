const path = require('path');
module.exports = {
    mode: 'production',
    //ソースファイル
    entry: path.join(__dirname,'/src/index.js'),
    //出力ディレクトリと出力ファイル名の設定.
    output: {
        path: path.join(__dirname,'/public'),
        filename: 'app.js'
    },
    devtool: 'inline-source-map',
    module: {
        rules:[
            {
                //ファイルのパターン.
                test: /.js$/,
                //使用するプラグイン.
                loader: 'babel-loader',
                //プラグインのオプション.
                options: {
                    presets: ['es2015','react']
                }
            }
        ]
    },
    performance: { hints: false }
}