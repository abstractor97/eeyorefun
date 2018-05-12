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
var PopupViewMediator = (function (_super) {
    __extends(PopupViewMediator, _super);
    function PopupViewMediator(view) {
        return _super.call(this, PopupViewMediator.NAME, view) || this;
    }
    PopupViewMediator.prototype.listNotificationInterests = function () {
        return [
            StaticEvent.N_M_POPUP_LAYER_ADD,
            StaticEvent.N_M_POPUP_LAYER_DEL,
        ];
    };
    PopupViewMediator.prototype.handleNotification = function (notification) {
        var _view = notification.getBody();
        _view.isShowBG = notification.getType() == "false" ? false : true;
        switch (notification.getName()) {
            case StaticEvent.N_M_POPUP_LAYER_ADD:
                _view.horizontalCenter = 0;
                _view.verticalCenter = 0;
                this.view.addView(_view);
                break;
            case StaticEvent.N_M_POPUP_LAYER_DEL:
                this.view.delView(_view);
                break;
        }
    };
    Object.defineProperty(PopupViewMediator.prototype, "view", {
        get: function () {
            return this.viewComponent;
        },
        enumerable: true,
        configurable: true
    });
    PopupViewMediator.NAME = "PopupViewMediator";
    return PopupViewMediator;
}(puremvc.Mediator));
__reflect(PopupViewMediator.prototype, "PopupViewMediator", ["puremvc.IMediator", "puremvc.INotifier"]);
//# sourceMappingURL=PopupViewMediator.js.map