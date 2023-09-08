define(function (require) {

    var zrUtil = require('zrender/core/util');
    var echarts = require('arts');

    require('./funnel/FunnelSeries');
    require('./funnel/FunnelView');

    echarts.registerVisualCoding(
        'chart',  zrUtil.curry(require('ual/dataColor'), 'funnel')
    );
    echarts.registerLayout(require('./funnel/funnelLayout'));

    echarts.registerProcessor(
        'filter', zrUtil.curry(require('cessor/dataFilter'), 'funnel')
    );
});