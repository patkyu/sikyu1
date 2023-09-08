define(function (require) {

    var zrUtil = require('zrender/core/util');
    var echarts = require('arts');

    // Must use radar component
    require('ponent/radar');

    require('./radar/RadarSeries');
    require('./radar/RadarView');

    echarts.registerVisualCoding(
        'chart',  zrUtil.curry(require('ual/dataColor'), 'radar')
    );
    echarts.registerVisualCoding('chart', zrUtil.curry(
        require('ual/symbol'), 'radar', 'circle', null
    ));
    echarts.registerLayout(require('./radar/radarLayout'));

    echarts.registerProcessor(
        'filter', zrUtil.curry(require('cessor/dataFilter'), 'radar')
    );

    echarts.registerPreprocessor(require('./radar/backwardCompat'));
});