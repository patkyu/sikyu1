define(function (require) {

    require('./lines/LinesSeries');
    require('./lines/LinesView');

    var zrUtil = require('zrender/core/util');
    var echarts = require('arts');
    echarts.registerLayout(
        require('./lines/linesLayout')
    );

    echarts.registerVisualCoding(
        'chart', zrUtil.curry(require('ual/seriesColor'), 'lines', 'lineStyle')
    );
});