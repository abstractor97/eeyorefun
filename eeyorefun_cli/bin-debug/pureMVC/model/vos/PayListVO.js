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
var PayListVO = (function () {
    function PayListVO(data) {
        this.payList = [];
        for (var i in data) {
            var _obj = new payObj(data[i]);
            this.payList.push(_obj);
        }
    }
    PayListVO.prototype.getPayList = function (zoneid, type) {
        if (type === void 0) { type = 1; }
        var _list = [];
        for (var i in this.payList) {
            var _obj = this.payList[i];
            if (_obj.zoneid == zoneid && _obj.type == type) {
                _list.push(_obj);
            }
        }
        return _list;
    };
    return PayListVO;
}());
__reflect(PayListVO.prototype, "PayListVO");
var payObj = (function (_super) {
    __extends(payObj, _super);
    function payObj(data) {
        return _super.call(this, data) || this;
    }
    return payObj;
}(BaseVO));
__reflect(payObj.prototype, "payObj");
//# sourceMappingURL=PayListVO.js.map