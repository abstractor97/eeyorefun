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
/**
 *
 * @author
 *
 */
var CustomEventMy = (function (_super) {
    __extends(CustomEventMy, _super);
    function CustomEventMy(name, data, type, bubbles, cancelable) {
        if (data === void 0) { data = null; }
        if (type === void 0) { type = null; }
        if (bubbles === void 0) { bubbles = false; }
        if (cancelable === void 0) { cancelable = false; }
        var _this = _super.call(this, name, bubbles, cancelable) || this;
        _this._name = name;
        _this._data = data;
        _this._type = type;
        return _this;
    }
    Object.defineProperty(CustomEventMy.prototype, "type", {
        get: function () {
            return this._type;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomEventMy.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomEventMy.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    return CustomEventMy;
}(egret.Event));
__reflect(CustomEventMy.prototype, "CustomEventMy");
//# sourceMappingURL=CustomEventMy.js.map