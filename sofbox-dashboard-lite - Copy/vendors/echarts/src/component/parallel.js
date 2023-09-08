define(function(require) {

    require('rd/parallel/parallelCreator');
    require('rd/parallel/ParallelModel');
    require('./parallelAxis');

    var echarts = require('arts');

    // Parallel view
    echarts.extendComponentView({
        type: 'parallel'
    });

    echarts.registerPreprocessor(
        require('rd/parallel/parallelPreprocessor')
    );

});