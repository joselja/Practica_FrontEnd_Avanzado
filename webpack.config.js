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

    // plugins que estamos utilizando
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'index.html')
        })
    ]

};
