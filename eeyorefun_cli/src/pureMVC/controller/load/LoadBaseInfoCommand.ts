class LoadBaseInfoCommand extends puremvc.SimpleCommand implements puremvc.ICommand {
	private _isLogin: boolean;
	public constructor() {
		super();
	}
	public execute(notification: puremvc.INotification): void {
		this._isLogin = notification.getBody();
		var _reqVO = new ReqUserBaseInfoObj();
		_reqVO.uid = StaticData.USER_UID;
		_reqVO.sid = StaticData.S_ID;
		_reqVO.login = this._isLogin ? 1 : 0;

		var _sendVO = new SocketSendVO(_reqVO, this.loadLoginDataCom.bind(this));
		if (this._isLogin) {
			_sendVO.loadingType = LoadingViewMediator.LOAD_TYPE_BIG;
			_sendVO.loadingTitle = StaticData.langConfig.getLangStrByID(100005);
		} else {
			_sendVO.loadingType = LoadingViewMediator.LOAD_TYPE_NONE;
		}
		this.facade.sendNotification(StaticEvent.N_C_SOCKET_SEND_DATA, _sendVO);
	}

	private loadLoginDataCom(recVO: SocketRecVO) {
		var _recVO = new UserBaseInfoObj(recVO.data);
		if (!this.facade.hasProxy(UserInfoProxy.NAME)) {
			this.facade.registerProxy(new UserInfoProxy());
		}
		StaticData.USER_UID = _recVO.uid;
		var _userProxy = (this.facade.retrieveProxy(UserInfoProxy.NAME) as UserInfoProxy);
		_userProxy.initUserInfoObj(_recVO, this._isLogin);
		var _userOV = _userProxy.userInfoObj;



		if (_userOV.isopen == 1) {
			StaticData.IS_NEW_GUIDE = true;
			var _app = (this.facade.retrieveMediator(ApplicationMediator.NAME) as ApplicationMediator).getViewComponent();
			_app.stage.scaleMode = egret.StageScaleMode.EXACT_FIT;
		}
		if (this._isLogin) {
			this.sendNotification(StaticEvent.N_C_LOAD_MAIN_SCENE);
		}
		//用户数据统计

		var _gameData = this.facade.retrieveProxy(GameBaseDataProxy.NAME) as GameBaseDataProxy;
		var _qqInfoObj = _gameData.getQQInfoObj();
		
	}
}