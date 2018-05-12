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
var UserInfoProxy = (function (_super) {
    __extends(UserInfoProxy, _super);
    function UserInfoProxy() {
        return _super.call(this, UserInfoProxy.NAME) || this;
    }
    UserInfoProxy.prototype.initUserInfoObj = function (vo, isLogin) {
        if (!isLogin) {
            this.changeUserInfo(vo);
        }
        else {
            this.data = vo;
        }
    };
    Object.defineProperty(UserInfoProxy.prototype, "userInfoObj", {
        get: function () {
            return this.data;
        },
        enumerable: true,
        configurable: true
    });
    UserInfoProxy.prototype.changeUserInfo = function (data) {
        if (!data) {
            return;
        }
        for (var i in data) {
            this.userInfoObj[i] = data[i];
        }
        EventManager.getInstance().sendEvent(EventManager.EVENT_USER_INFO_CHANGE);
        if (this._reqCallBack != null) {
            this._reqCallBack();
            this._reqCallBack = null;
        }
    };
    UserInfoProxy.NAME = "UserInfoProxy";
    return UserInfoProxy;
}(puremvc.Proxy));
__reflect(UserInfoProxy.prototype, "UserInfoProxy", ["puremvc.IProxy", "puremvc.INotifier"]);
//# sourceMappingURL=UserInfoProxy.js.map