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
var LoadBaseInfoCommand = (function (_super) {
    __extends(LoadBaseInfoCommand, _super);
    function LoadBaseInfoCommand() {
        return _super.call(this) || this;
    }
    LoadBaseInfoCommand.prototype.execute = function (notification) {
        this._isLogin = notification.getBody();
        var _reqVO = new ReqUserBaseInfoObj();
        _reqVO.uid = StaticData.USER_UID;
        _reqVO.sid = StaticData.S_ID;
        _reqVO.login = this._isLogin ? 1 : 0;
        var _sendVO = new SocketSendVO(_reqVO, this.loadLoginDataCom.bind(this));
        if (this._isLogin) {
            _sendVO.loadingType = LoadingViewMediator.LOAD_TYPE_BIG;
            _sendVO.loadingTitle = StaticData.langConfig.getLangStrByID(100005);
        }
        else {
            _sendVO.loadingType = LoadingViewMediator.LOAD_TYPE_NONE;
        }
        this.facade.sendNotification(StaticEvent.N_C_SOCKET_SEND_DATA, _sendVO);
    };
    LoadBaseInfoCommand.prototype.loadLoginDataCom = function (recVO) {
        var _recVO = new UserBaseInfoObj(recVO.data);
        if (!this.facade.hasProxy(UserInfoProxy.NAME)) {
            this.facade.registerProxy(new UserInfoProxy());
        }
        StaticData.USER_UID = _recVO.uid;
        var _userProxy = this.facade.retrieveProxy(UserInfoProxy.NAME);
        _userProxy.initUserInfoObj(_recVO, this._isLogin);
        var _userOV = _userProxy.userInfoObj;
        if (_userOV.isopen == 1) {
            StaticData.IS_NEW_GUIDE = true;
            var _app = this.facade.retrieveMediator(ApplicationMediator.NAME).getViewComponent();
            _app.stage.scaleMode = egret.StageScaleMode.EXACT_FIT;
        }
        if (this._isLogin) {
            this.sendNotification(StaticEvent.N_C_LOAD_MAIN_SCENE);
        }
        //用户数据统计
        var _gameData = this.facade.retrieveProxy(GameBaseDataProxy.NAME);
        var _qqInfoObj = _gameData.getQQInfoObj();
    };
    return LoadBaseInfoCommand;
}(puremvc.SimpleCommand));
__reflect(LoadBaseInfoCommand.prototype, "LoadBaseInfoCommand", ["puremvc.ICommand", "puremvc.INotifier"]);
//# sourceMappingURL=LoadBaseInfoCommand.js.map