define(function (require) {

    var SymbolDraw = require('per/SymbolDraw');
    var EffectSymbol = require('per/EffectSymbol');

    require('s').extendChartView({

        type: 'effectScatter',

        init: function () {
            this._symbolDraw = new SymbolDraw(EffectSymbol);
        },

        render: function (seriesModel, ecModel, api) {
            var data = seriesModel.getData();
            var effectSymbolDraw = this._symbolDraw;
            effectSymbolDraw.updateData(data);
            this.group.add(effectSymbolDraw.group);
        },

        updateLayout: function () {
            this._symbolDraw.updateLayout();
        },

        remove: function (ecModel, api) {
            this._symbolDraw && this._symbolDraw.remove(api);
        }
    });
});