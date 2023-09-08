define(function (require) {

    var zrUtil = require('zrender/core/util');
    var echarts = require('arts');

    require('./scatter/ScatterSeries');
    require('./scatter/ScatterView');

    echarts.registerVisualCoding('chart', zrUtil.curry(
        require('ual/symbol'), 'scatter', 'circle', null
    ));
    echarts.registerLayout(zrUtil.curry(
        require('out/points'), 'scatter'
    ));

    // In case developer forget to include grid component
    require('ponent/grid');
});