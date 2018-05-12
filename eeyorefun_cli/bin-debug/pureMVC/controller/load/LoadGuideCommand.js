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
var LoadGuideCommand = (function (_super) {
    __extends(LoadGuideCommand, _super);
    function LoadGuideCommand() {
        return _super.call(this) || this;
    }
    LoadGuideCommand.prototype.execute = function (notification) {
        var _loadResVO = new LoadResVO(StaticData.RES_guideRes, this.loadResCom.bind(this), LoadingViewMediator.LOAD_TYPE_SMALL, StaticData.langConfig.getLangStrByID(100005));
        this.facade.sendNotification(StaticEvent.N_C_LOAD_RESOURCE_GROUP, _loadResVO);
    };
    LoadGuideCommand.prototype.loadResCom = function () {
        var _fileName = "newGuide_json";
        var _obj = RES.getRes(_fileName);
        var _objList = StaticFun.getObjList(_obj);
        this.facade.registerProxy(new GuideListProxy(_objList));
        this.facade.sendNotification(StaticEvent.N_M_GUIDE_SHOW);
    };
    return LoadGuideCommand;
}(puremvc.SimpleCommand));
__reflect(LoadGuideCommand.prototype, "LoadGuideCommand", ["puremvc.ICommand", "puremvc.INotifier"]);
//# sourceMappingURL=LoadGuideCommand.js.map