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
var UserInfoObj = (function (_super) {
    __extends(UserInfoObj, _super);
    function UserInfoObj(data) {
        var _this = _super.call(this, data) || this;
        _this.isBase64 = false;
        if (!data["isBase64"] && _this.name) {
            _this.isBase64 = true;
            _this.name = Base64.getInstance().decode(_this.name);
        }
        return _this;
    }
    return UserInfoObj;
}(BaseVO));
__reflect(UserInfoObj.prototype, "UserInfoObj");
//# sourceMappingURL=UserInfoObj.js.map