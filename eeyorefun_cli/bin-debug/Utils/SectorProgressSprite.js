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
var SectorProgressSprite = (function (_super) {
    __extends(SectorProgressSprite, _super);
    function SectorProgressSprite(radius, anticlockwise, time, callBack) {
        var _this = _super.call(this) || this;
        _this._angle = 0;
        _this._initDis = 6;
        _this._radius = radius;
        _this._anticlockwise = anticlockwise;
        _this._dic = _this._initDis / time;
        _this._callBack = callBack;
        _this.rotation = -90;
        _this._drawShape = new egret.Shape();
        _this._drawShape.x = -radius;
        _this._drawShape.y = -radius;
        _this.addChild(_this._drawShape);
        return _this;
    }
    SectorProgressSprite.prototype.startRun = function (time) {
        if (time === void 0) { time = 0; }
        if (time != 0) {
            this._dic = this._initDis / time;
        }
        this._angle = 0;
        egret.startTick(this.tickFun, this);
    };
    SectorProgressSprite.prototype.tickFun = function (timeStamp) {
        this._angle += 1 * this._dic;
        this.changeGraphics(this._angle);
        if (Math.abs(this._angle) >= 360) {
            this.clearRun();
        }
        this._angle = this._angle % 360;
        return true;
    };
    SectorProgressSprite.prototype.changeGraphics = function (angle) {
        this._drawShape.graphics.clear();
        this._drawShape.graphics.beginFill(0xff0000);
        this._drawShape.graphics.moveTo(this._radius, this._radius);
        this._drawShape.graphics.lineTo(this._radius * 2, this._radius);
        this._drawShape.graphics.drawArc(this._radius, this._radius, this._radius, 0, angle * Math.PI / 180, this._anticlockwise);
        this._drawShape.graphics.lineTo(this._radius, this._radius);
        this._drawShape.graphics.endFill();
    };
    SectorProgressSprite.prototype.clearRun = function () {
        egret.stopTick(this.tickFun, this);
        this._drawShape.graphics.clear();
        if (this._callBack) {
            this._callBack();
            this._callBack = null;
        }
    };
    return SectorProgressSprite;
}(egret.Sprite));
__reflect(SectorProgressSprite.prototype, "SectorProgressSprite");
//# sourceMappingURL=SectorProgressSprite.js.map