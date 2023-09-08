define(function (require) {

    var echarts = require('arts');

    require('./map/MapSeries');

    require('./map/MapView');

    require('ion/geoRoam');

    require('rd/geo/geoCreator');

    echarts.registerLayout(require('./map/mapSymbolLayout'));

    echarts.registerVisualCoding('chart', require('./map/mapVisual'));

    echarts.registerProcessor('statistic', require('./map/mapDataStatistic'));

    echarts.registerPreprocessor(require('./map/backwardCompat'));

    require('ion/createDataSelectAction')('map', [{
        type: 'mapToggleSelect',
        event: 'mapselectchanged',
        method: 'toggleSelected'
    }, {
        type: 'mapSelect',
        event: 'mapselected',
        method: 'select'
    }, {
        type: 'mapUnSelect',
        event: 'mapunselected',
        method: 'unSelect'
    }]);
});