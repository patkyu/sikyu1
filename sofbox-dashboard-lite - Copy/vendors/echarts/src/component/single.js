define(function (require) {

    require('rd/single/singleCreator');
    require('./singleAxis');

    var echarts = require('arts');

    echarts.extendComponentView({
        type: 'single'
    });
    
});