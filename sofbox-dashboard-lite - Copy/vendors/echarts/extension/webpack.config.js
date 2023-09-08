var PROD = process.argv.indexOf('-p') >= 0;

module.exports = {
    entry: {
        'bmap': __dirname + '/ension/bmap/bmap.js',
        'dataTool': __dirname + '/ension/dataTool'
    },
    output: {
        libraryTarget: 'umd',
        library: ['echarts', '[name]'],
        path: __dirname + '/t/extension',
        filename: PROD ? '[name].min.js' : '[name].js'
    },
    externals: {
        'echarts': 'echarts'
    }
};