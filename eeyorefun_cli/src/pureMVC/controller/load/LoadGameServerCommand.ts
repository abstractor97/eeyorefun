class LoadGameServerCommand extends puremvc.SimpleCommand implements puremvc.ICommand {
	private _groupName: string = "loadingRes";
	private _socketProxy: WebSocketProxy;
	private _recServerObj: RecGameServerObj;
	public constructor() {
		super();
	}
	public execute(notification: puremvc.INotification): void {
		var _reqVO: ReqGameServerObj = notification.getBody();
		this.facade.sendNotification(StaticEvent.N_C_SOCKET_SEND_DATA, new SocketSendVO(_reqVO, this.loadListDataCom.bind(this), LoadingViewMediator.LOAD_TYPE_BIG, StaticData.langConfig.getLangStrByID(100005)));
	}
	private loadListDataCom(recVO: SocketRecVO) {
		this._socketProxy = this.facade.retrieveProxy(WebSocketProxy.NAME) as WebSocketProxy;
		this._recServerObj = new RecGameServerObj(recVO.data);
		StaticData.S_ID = this._recServerObj.sid;
		this.facade.sendNotification(StaticEvent.N_M_LOADING_SHOW, new LoadingVO(LoadingViewMediator.LOAD_TYPE_BIG, StaticData.langConfig.getLangStrByID(100006), true, 0));
		this._socketProxy.connectSocket(this._recServerObj.server, this.socketConnect.bind(this));
	}
	private socketConnect(isConn: boolean) {
		this.facade.sendNotification(StaticEvent.N_M_LOADING_DEL);
		if (isConn) {
			if (this._recServerObj.uid == 0) {
				this.sendNotification(StaticEvent.N_C_LOAD_GAME_REGISTER_UID, StaticData.OPEN_ID);
			} else {
				StaticData.USER_UID = this._recServerObj.uid;
				this.sendNotification(StaticEvent.N_C_LOAD_BASE_INFO, true);
			}
		}
	}
}