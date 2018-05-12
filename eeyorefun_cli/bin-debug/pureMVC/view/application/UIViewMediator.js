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
var UIViewMediator = (function (_super) {
    __extends(UIViewMediator, _super);
    function UIViewMediator(view) {
        return _super.call(this, UIViewMediator.NAME, view) || this;
    }
    UIViewMediator.prototype.listNotificationInterests = function () {
        return [
            StaticEvent.N_M_UI_SHOW,
            StaticEvent.N_M_UI_DEL,
        ];
    };
    UIViewMediator.prototype.removeUI = function () {
        this.view.removeChildren();
    };
    UIViewMediator.prototype.addUIView = function (ui) {
        ui.width = this.view.stage.stageWidth;
        ui.height = this.view.stage.stageHeight;
        this.view.addChild(ui);
    };
    UIViewMediator.prototype.handleNotification = function (notification) {
        var ui = notification.getBody();
        switch (notification.getName()) {
            case StaticEvent.N_M_UI_SHOW:
                this.addUIView(ui);
                break;
            case StaticEvent.N_M_UI_DEL:
                this.removeUI();
                break;
        }
    };
    Object.defineProperty(UIViewMediator.prototype, "view", {
        get: function () {
            return this.viewComponent;
        },
        enumerable: true,
        configurable: true
    });
    UIViewMediator.NAME = "UIViewMediator";
    return UIViewMediator;
}(puremvc.Mediator));
__reflect(UIViewMediator.prototype, "UIViewMediator", ["puremvc.IMediator", "puremvc.INotifier"]);
//# sourceMappingURL=UIViewMediator.js.map