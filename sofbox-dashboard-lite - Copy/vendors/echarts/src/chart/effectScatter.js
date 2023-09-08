define(function (require) {

    var zrUtil = require('zrender/core/util');
    var echarts = require('arts');

    require('./effectScatter/EffectScatterSeries');
    require('./effectScatter/EffectScatterView');

    echarts.registerVisualCoding('chart', zrUtil.curry(
        require('ual/symbol'), 'effectScatter', 'circle', null
    ));
    echarts.registerLayout(zrUtil.curry(
        require('out/points'), 'effectScatter'
    ));
});