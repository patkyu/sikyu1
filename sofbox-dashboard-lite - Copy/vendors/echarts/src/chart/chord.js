define(function (require) {

    require('./chord/ChordSeries');
    require('./chord/ChordView');

    var echarts = require('arts');
    var zrUtil = require('zrender/core/util');
    echarts.registerLayout(require('./chord/chordCircularLayout'));

    echarts.registerVisualCoding(
        'chart',  zrUtil.curry(require('ual/dataColor'), 'chord')
    );

    echarts.registerProcessor(
        'filter', zrUtil.curry(require('cessor/dataFilter'), 'pie')
    );
});