define(function (require) {

    var echarts = require('arts');

    require('./boxplot/BoxplotSeries');
    require('./boxplot/BoxplotView');

    echarts.registerVisualCoding('chart', require('./boxplot/boxplotVisual'));
    echarts.registerLayout(require('./boxplot/boxplotLayout'));

});