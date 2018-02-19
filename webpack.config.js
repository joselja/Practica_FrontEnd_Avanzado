const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {

    // entry point: archivo que lee webpack para construir el grafo de dependencias
    entry: path.join(__dirname, 'src', 'entry.js'),

    // output: carpeta en la que quiero que webpack me deje el código generado
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },

    // module loaders
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },

    // plugins que estamos utilizando
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'index.html'),
            minify: {
                collapseWhitespace: true
            }
        })
    ],

    // dev server configuration
    devServer: {
        open: true, // abre el navegador por defecto
        port: 3000, // puerto del servidor web
        overlay: true // muestra los errores en pantalla
    }

};
