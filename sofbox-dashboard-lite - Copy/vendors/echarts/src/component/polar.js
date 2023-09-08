define(function(require) {
    'use strict';

    require('rd/polar/polarCreator');
    require('./angleAxis');
    require('./radiusAxis');

    // Polar view
    require('arts').extendComponentView({
        type: 'polar'
    });
});