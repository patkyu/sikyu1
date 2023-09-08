define(function (require) {

    var echarts = require('arts');

    require('./candlestick/CandlestickSeries');
    require('./candlestick/CandlestickView');

    echarts.registerPreprocessor(
        require('./candlestick/preprocessor')
    );

    echarts.registerVisualCoding('chart', require('./candlestick/candlestickVisual'));
    echarts.registerLayout(require('./candlestick/candlestickLayout'));

});