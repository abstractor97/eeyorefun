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
var BaseMediator = (function (_super) {
    __extends(BaseMediator, _super);
    function BaseMediator(mediatorName, viewComponent) {
        return _super.call(this, mediatorName, viewComponent) || this;
    }
    BaseMediator.prototype.loadRes = function (resName, callBack, loadType, loadTitle) {
        loadType = loadType ? loadType : LoadingViewMediator.LOAD_TYPE_SMALL;
        loadTitle = loadTitle ? loadTitle : StaticData.langConfig.getLangStrByID(100002);
        var _loadResVO = new LoadResVO(resName, callBack, loadType, loadTitle);
        this.facade.sendNotification(StaticEvent.N_C_LOAD_RESOURCE_GROUP, _loadResVO);
    };
    return BaseMediator;
}(puremvc.Mediator));
__reflect(BaseMediator.prototype, "BaseMediator", ["puremvc.IMediator", "puremvc.INotifier"]);
//# sourceMappingURL=BaseMediator.js.map