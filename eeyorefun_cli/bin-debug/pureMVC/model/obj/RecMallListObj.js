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
var RecMallListObj = (function (_super) {
    __extends(RecMallListObj, _super);
    function RecMallListObj(obj) {
        return _super.call(this, obj) || this;
    }
    RecMallListObj.prototype.checkHave = function (id) {
        for (var i in this.list) {
            if (id == this.list[i]) {
                return true;
            }
        }
        return false;
    };
    RecMallListObj.prototype.checkUnlock = function (id) {
        for (var i in this.alist) {
            if (id == this.alist[i]) {
                return true;
            }
        }
        return false;
    };
    return RecMallListObj;
}(BaseVO));
__reflect(RecMallListObj.prototype, "RecMallListObj");
//# sourceMappingURL=RecMallListObj.js.map