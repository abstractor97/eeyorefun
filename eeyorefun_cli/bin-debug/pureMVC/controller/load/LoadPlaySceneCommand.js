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
var LoadPlaySceneCommand = (function (_super) {
    __extends(LoadPlaySceneCommand, _super);
    function LoadPlaySceneCommand() {
        return _super.call(this) || this;
    }
    LoadPlaySceneCommand.prototype.execute = function (notification) {
        this._gameStartVO = notification.getBody();
        var _playSceneRes = RES.getGroupByName(StaticData.RES_playScene);
        var _listRes = [];
        for (var i in _playSceneRes) {
            _listRes.push(_playSceneRes[i].name);
        }
        for (var n in this._gameStartVO.roleObjList) {
            var _roleID = this._gameStartVO.roleObjList[n].roleID;
            var list = StaticFun.getAnimationResList(StaticData.getRoleName(_roleID));
            _listRes = _listRes.concat(list);
        }
        RES.createGroup(StaticData.RES_playScene, _listRes, true);
        var _loadResVO = new LoadResVO(StaticData.RES_playScene, this.loadResCom.bind(this), LoadingViewMediator.LOAD_TYPE_BIG, StaticData.langConfig.getLangStrByID(100002));
        this.facade.sendNotification(StaticEvent.N_C_LOAD_RESOURCE_GROUP, _loadResVO);
    };
    LoadPlaySceneCommand.prototype.loadResCom = function () {
        var _dropListObj = RES.getRes("dropList_json");
        this.sendNotification(StaticEvent.N_M_PLAY_SCENE_SHOW, this._gameStartVO);
    };
    return LoadPlaySceneCommand;
}(puremvc.SimpleCommand));
__reflect(LoadPlaySceneCommand.prototype, "LoadPlaySceneCommand", ["puremvc.ICommand", "puremvc.INotifier"]);
//# sourceMappingURL=LoadPlaySceneCommand.js.map