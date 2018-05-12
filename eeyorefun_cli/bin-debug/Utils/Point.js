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
var Point = (function (_super) {
    __extends(Point, _super);
    function Point(_x, _y, str) {
        if (_x === void 0) { _x = 0; }
        if (_y === void 0) { _y = 0; }
        var _this = _super.call(this, _x, _y) || this;
        if (str) {
            var _arr = str.split("-");
            _this.x = Number(_arr[0]);
            _this.y = Number(_arr[1]);
        }
        return _this;
    }
    Point.prototype.toString = function () {
        return this.x + "_" + this.y;
    };
    Point.prototype.getKey = function () {
        return this.x + "-" + this.y;
    };
    return Point;
}(egret.Point));
__reflect(Point.prototype, "Point");
//# sourceMappingURL=Point.js.map