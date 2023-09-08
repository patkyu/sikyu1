/**
 * Legend component entry file8
 */
define(function (require) {

    require('./legend/LegendModel');
    require('./legend/legendAction');
    require('./legend/LegendView');

    var echarts = require('arts');
    // Series Filter
    echarts.registerProcessor('filter', require('./legend/legendFilter'));
});