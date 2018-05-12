var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var game;
(function (game) {
    var AppContainer = (function (_super) {
        __extends(AppContainer, _super);
        function AppContainer() {
            var _this = _super.call(this) || this;
            _this._sceneLayer = new egret.DisplayObjectContainer();
            _this._UILayer = new eui.UILayer();
            _this._popupLayer = new PopupBaseLayer();
            _this._loadingLayer = new PopupBaseLayer();
            _this._tipLayer = new egret.DisplayObjectContainer();
            _this._UILayer.touchEnabled = false;
            _this._popupLayer.touchEnabled = false;
            _this._loadingLayer.touchEnabled = false;
            _this.addChild(_this._sceneLayer);
            _this.addChild(_this._UILayer);
            _this.addChild(_this._popupLayer);
            _this.addChild(_this._tipLayer);
            _this.addChild(_this._loadingLayer);
            if (StaticData.IS_LOG) {
                _this._debugLabel = new eui.Label();
                _this._debugLabel.type = egret.TextFieldType.INPUT;
                _this._debugLabel.addEventListener(egret.Event.FOCUS_IN, _this.onFocusIn, _this);
                _this._debugLabel.size = 20;
                _this._debugLabel.x = 200;
                _this._debugLabel.width = 100;
                _this._debugLabel.wordWrap = true;
                _this.addChild(_this._debugLabel);
            }
            return _this;
        }
        AppContainer.prototype.onFocusIn = function (e) {
            this._debugLabel.text = DebugLog.getInstance().getLogStr();
        };
        Object.defineProperty(AppContainer.prototype, "sceneLayer", {
            get: function () {
                return this._sceneLayer;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AppContainer.prototype, "UILayer", {
            get: function () {
                return this._UILayer;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AppContainer.prototype, "popupLayer", {
            get: function () {
                return this._popupLayer;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AppContainer.prototype, "loadingLayer", {
            get: function () {
                return this._loadingLayer;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AppContainer.prototype, "tipLayer", {
            get: function () {
                return this._tipLayer;
            },
            enumerable: true,
            configurable: true
        });
        return AppContainer;
    }(egret.DisplayObjectContainer));
    game.AppContainer = AppContainer;
    __reflect(AppContainer.prototype, "game.AppContainer");
})(game || (game = {}));
//# sourceMappingURL=AppContainer.js.map