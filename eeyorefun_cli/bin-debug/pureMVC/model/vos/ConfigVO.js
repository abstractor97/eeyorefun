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
var ConfigVO = (function (_super) {
    __extends(ConfigVO, _super);
    function ConfigVO(data) {
        var _this = _super.call(this, data) || this;
        if (_this.isDebug) {
            _this.server = _this.ws;
        }
        else {
            _this.server = _this.wss;
        }
        return _this;
    }
    ConfigVO.prototype.checkTestUid = function (uid) {
        var _list = this.uidTestList;
        for (var i in _list) {
            if (_list[i] == uid) {
                return true;
            }
        }
        return false;
    };
    return ConfigVO;
}(BaseVO));
__reflect(ConfigVO.prototype, "ConfigVO");
//# sourceMappingURL=ConfigVO.js.map