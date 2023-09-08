define(function (require) {

    require('Component').registerSubTypeDefaulter('timeline', function () {
        // Only slider now.
        return 'slider';
    });

});