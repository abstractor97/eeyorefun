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
var LoadMainSceneCommand = (function (_super) {
    __extends(LoadMainSceneCommand, _super);
    function LoadMainSceneCommand() {
        return _super.call(this) || this;
    }
    LoadMainSceneCommand.prototype.execute = function (notification) {
        this._isLoadUserInfo = notification.getBody();
        var _loadResVO = new LoadResVO(StaticData.RES_mainScene, this.loadResCom.bind(this), LoadingViewMediator.LOAD_TYPE_BIG, StaticData.langConfig.getLangStrByID(100002));
        this.facade.sendNotification(StaticEvent.N_C_LOAD_RESOURCE_GROUP, _loadResVO);
    };
    LoadMainSceneCommand.prototype.loadResCom = function () {
        var _starObj = RES.getRes("starList_json");
        var _levelObj = RES.getRes("levelList_json");
        var _userNameMan = RES.getRes("userNameMan_txt");
        var _userNameWoman = RES.getRes("userNameWoman_txt");
        var _mallList = RES.getRes("roleList_json");
        var _headListObj = RES.getRes("headList_json");
        var _payListObj = RES.getRes("payList_json");
        var _payListVO = new PayListVO(StaticFun.getObjList(_payListObj));
        var _headListVO = new HeadListVO(StaticFun.getObjList(_headListObj));
        var _mallVO = new MallListVO(StaticFun.getObjList(_mallList));
        var _starVO = new StarListVO(StaticFun.getObjList(_starObj));
        var _levelVO = new LevelListVO(StaticFun.getObjList(_levelObj));
        _levelVO.initAward(_starVO);
        var _baseProxy = this.facade.retrieveProxy(GameBaseDataProxy.NAME);
        _baseProxy.setLevelVO(_levelVO);
        _baseProxy.setStarVO(_starVO);
        _baseProxy.setMallListVO(_mallVO);
        _baseProxy.initNameMan(_userNameMan);
        _baseProxy.initNameWoman(_userNameWoman);
        _baseProxy.setHeadVO(_headListVO);
        _baseProxy.addPayList(_payListVO);
        if (this._isLoadUserInfo) {
            this.loadMyUserInfo();
        }
        else {
            var _sendVO = new HttpSendVO(StaticData.getReqHttpUrl(StaticData.configVO.getNote), egret.HttpMethod.GET, "", this.loadNoteCom.bind(this), LoadingViewMediator.LOAD_TYPE_BIG, StaticData.langConfig.getLangStrByID(100003));
            this.sendNotification(StaticEvent.N_C_HTTP_SEND_DATA, _sendVO);
        }
    };
    LoadMainSceneCommand.prototype.loadNoteCom = function (str) {
        var _noteObj = new RecNoteObj(JSON.parse(str));
        this.facade.sendNotification(StaticEvent.N_M_MAIN_SCENE_SHOW, _noteObj);
    };
    LoadMainSceneCommand.prototype.loadMyUserInfo = function () {
        var _reqVO = new ReqUserInfoObj();
        _reqVO.fid = StaticData.USER_UID;
        this.facade.sendNotification(StaticEvent.N_C_SOCKET_SEND_DATA, new SocketSendVO(_reqVO, this.loadUserInfoCom.bind(this)));
    };
    LoadMainSceneCommand.prototype.loadUserInfoCom = function (socketVO) {
        var _userInfo = new RecUserInfoObj(socketVO.data);
        var _myUserOV = this.facade.retrieveProxy(UserInfoProxy.NAME).userInfoObj;
        _myUserOV.star = _userInfo.star;
        _myUserOV.name = _userInfo.name;
        _myUserOV.coin = _userInfo.coin;
        _myUserOV.diamond = _userInfo.diamond;
        this.facade.sendNotification(StaticEvent.N_M_MAIN_SCENE_SHOW);
    };
    return LoadMainSceneCommand;
}(puremvc.SimpleCommand));
__reflect(LoadMainSceneCommand.prototype, "LoadMainSceneCommand", ["puremvc.ICommand", "puremvc.INotifier"]);
//# sourceMappingURL=LoadMainSceneCommand.js.map