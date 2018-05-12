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
var GuideListProxy = (function (_super) {
    __extends(GuideListProxy, _super);
    function GuideListProxy(list) {
        var _this = _super.call(this, GuideListProxy.NAME) || this;
        var _list = [];
        for (var i in list) {
            _list.push(new GuideVO(list[i]));
        }
        _this.data = _list;
        return _this;
    }
    GuideListProxy.prototype.onRegister = function () {
        EventManager.getInstance().addEventListener(EventManager.EVENT_SEND_GUIDE_ID, this.sendGuideID, this);
    };
    GuideListProxy.prototype.getGuideByID = function (id) {
        var _list = this.guideList;
        for (var i = 0; i < _list.length; i++) {
            if (id == _list[i].id) {
                return _list[i];
            }
        }
    };
    GuideListProxy.prototype.sendGuideID = function () {
        if (StaticData.GUIDE_CURR_ID != 0) {
            // var _reqVO = new ReqNewGuideObj();
            // _reqVO.opt = StaticData.GUIDE_CURR_ID;
            // this.facade.sendNotification(StaticEvent.N_C_SOCKET_SEND_DATA, new SocketSendVO(_reqVO, null, LoadingViewMediator.LOAD_TYPE_NONE));
        }
    };
    Object.defineProperty(GuideListProxy.prototype, "guideList", {
        get: function () {
            return this.data;
        },
        enumerable: true,
        configurable: true
    });
    GuideListProxy.NAME = "GuideListProxy";
    return GuideListProxy;
}(puremvc.Proxy));
__reflect(GuideListProxy.prototype, "GuideListProxy", ["puremvc.IProxy", "puremvc.INotifier"]);
//# sourceMappingURL=GuideListProxy.js.map