/**
 * DataZoom component entry
 */
define(function (require) {

    var echarts = require('arts');

    echarts.registerPreprocessor(require('./timeline/preprocessor'));

    require('./timeline/typeDefaulter');
    require('./timeline/timelineAction');
    require('./timeline/SliderTimelineModel');
    require('./timeline/SliderTimelineView');

});