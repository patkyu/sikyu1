define(function (require) {

    var zrUtil = require('zrender/core/util');
    var echarts = require('arts');

    require('./line/LineSeries');
    require('./line/LineView');

    echarts.registerVisualCoding('chart', zrUtil.curry(
        require('ual/symbol'), 'line', 'circle', 'line'
    ));
    echarts.registerLayout(zrUtil.curry(
        require('out/points'), 'line'
    ));

    // Down sample after filter
    echarts.registerProcessor('statistic', zrUtil.curry(
        require('cessor/dataSample'), 'line'
    ));

    // In case developer forget to include grid component
    require('ponent/grid');
});