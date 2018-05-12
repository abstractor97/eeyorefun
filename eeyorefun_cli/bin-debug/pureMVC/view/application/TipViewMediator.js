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
 * TipViewMediator extends pure
 */
var TipViewMediator = (function (_super) {
    __extends(TipViewMediator, _super);
    function TipViewMediator(view) {
        return _super.call(this, TipViewMediator.NAME, view) || this;
    }
    TipViewMediator.prototype.listNotificationInterests = function () {
        return [
            StaticEvent.N_M_TIP_LAYER_ADD,
            StaticEvent.N_M_TIP_LAYER_DEL,
        ];
    };
    TipViewMediator.prototype.handleNotification = function (notification) {
        var _loadVO = notification.getBody();
        switch (notification.getName()) {
            case StaticEvent.N_M_TIP_LAYER_ADD:
                break;
            case StaticEvent.N_M_TIP_LAYER_DEL:
                break;
        }
    };
    Object.defineProperty(TipViewMediator.prototype, "view", {
        get: function () {
            return this.viewComponent;
        },
        enumerable: true,
        configurable: true
    });
    TipViewMediator.NAME = "TipViewMediator";
    return TipViewMediator;
}(puremvc.Mediator));
__reflect(TipViewMediator.prototype, "TipViewMediator", ["puremvc.IMediator", "puremvc.INotifier"]);
//# sourceMappingURL=TipViewMediator.js.map