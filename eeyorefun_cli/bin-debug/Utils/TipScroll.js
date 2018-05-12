var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var TipScroll = (function () {
    function TipScroll(lb, rectMask) {
        this._list = [];
        this._currIndex = 0;
        this._moveSpeed = 1;
        this._lb = lb;
        this._lb.verticalAlign = egret.VerticalAlign.CONTENT_JUSTIFY;
        this._mask = rectMask;
        egret.startTick(this.callBack, this);
    }
    TipScroll.prototype.baseGC = function () {
        egret.stopTick(this.callBack, this);
        this._lb = null;
        this._mask = null;
    };
    TipScroll.prototype.addTip = function (_str, _times, _link) {
        if (_times === void 0) { _times = -1; }
        if (_link === void 0) { _link = ""; }
        this._list.push(new TipScrollVO(_str, _link, _times));
        if (this._list.length > 0 && !this._isShow) {
            this.showNextStr();
        }
    };
    TipScroll.prototype.showNextStr = function () {
        if (this._list.length == 0 || this._isShow) {
            return;
        }
        else if (this._currIndex >= this._list.length) {
            this._currIndex = 0;
        }
        var _vo = this._list[this._currIndex];
        var _tempTF = new egret.TextField();
        _tempTF.text = _vo.str;
        _tempTF.size = this._lb.size;
        this._lb.x = this._mask.width;
        // this._lb.text = _vo.str;
        this._lb.textFlow = new Array({ text: _vo.str, style: { "href": _vo.link } });
        this._lb.width = _tempTF.width;
        this._maxMove = -this._lb.width - 100;
        this._isShow = true;
        if (_vo.times > 0) {
            _vo.times -= 1;
            if (_vo.times == 0) {
                this._list.splice(this._currIndex, 1);
            }
        }
        this._currIndex++;
    };
    TipScroll.prototype.callBack = function (timeStamp) {
        if (this._isShow) {
            if (this._lb.x > this._maxMove) {
                this._lb.x -= this._moveSpeed;
            }
            else {
                this._isShow = false;
                this.showNextStr();
            }
        }
        return false;
    };
    return TipScroll;
}());
__reflect(TipScroll.prototype, "TipScroll");
var TipScrollVO = (function () {
    function TipScrollVO(_str, _link, _times) {
        this.str = _str;
        this.link = _link;
        this.times = _times;
    }
    return TipScrollVO;
}());
__reflect(TipScrollVO.prototype, "TipScrollVO");
//# sourceMappingURL=TipScroll.js.map