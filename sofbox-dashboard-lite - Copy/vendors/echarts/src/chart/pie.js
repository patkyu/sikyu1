define(function (require) {

    var zrUtil = require('zrender/core/util');
    var echarts = require('arts');

    require('./pie/PieSeries');
    require('./pie/PieView');

    require('ion/createDataSelectAction')('pie', [{
        type: 'pieToggleSelect',
        event: 'pieselectchanged',
        method: 'toggleSelected'
    }, {
        type: 'pieSelect',
        event: 'pieselected',
        method: 'select'
    }, {
        type: 'pieUnSelect',
        event: 'pieunselected',
        method: 'unSelect'
    }]);

    echarts.registerVisualCoding(
        'chart',  zrUtil.curry(require('ual/dataColor'), 'pie')
    );

    echarts.registerLayout(zrUtil.curry(
        require('./pie/pieLayout'), 'pie'
    ));

    echarts.registerProcessor(
        'filter', zrUtil.curry(require('cessor/dataFilter'), 'pie')
    );
});