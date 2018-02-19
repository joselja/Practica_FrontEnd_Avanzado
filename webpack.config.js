const path = require('path');

module.exports = {
    // entry point: archivo que lee webpack para construir el grafo de dependencias
    entry: './src/entry.js',
    // output: carpeta en la que quiero que webpack me deje el código generado
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};
