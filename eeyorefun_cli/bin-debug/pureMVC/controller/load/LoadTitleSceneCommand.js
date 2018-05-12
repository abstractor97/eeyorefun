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
 * @author
 */
var LoadTitleSceneCommand = (function (_super) {
    __extends(LoadTitleSceneCommand, _super);
    function LoadTitleSceneCommand() {
        return _super.call(this) || this;
    }
    LoadTitleSceneCommand.prototype.execute = function (notification) {
        var _loadResVO = new LoadResVO(StaticData.RES_TitleScene, this.loadResCom.bind(this), LoadingViewMediator.LOAD_TYPE_BIG, StaticData.langConfig.getLangStrByID(100002));
        this.facade.sendNotification(StaticEvent.N_C_LOAD_RESOURCE_GROUP, _loadResVO);
    };
    LoadTitleSceneCommand.prototype.loadResCom = function () {
        this.facade.sendNotification(StaticEvent.N_M_TITLE_SCENE_SHOW);
    };
    return LoadTitleSceneCommand;
}(puremvc.SimpleCommand));
__reflect(LoadTitleSceneCommand.prototype, "LoadTitleSceneCommand", ["puremvc.ICommand", "puremvc.INotifier"]);
//# sourceMappingURL=LoadTitleSceneCommand.js.map