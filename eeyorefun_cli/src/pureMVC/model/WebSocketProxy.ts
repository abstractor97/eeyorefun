class WebSocketProxy extends puremvc.Proxy implements puremvc.IProxy {
	public static NAME: string = "WebSocketProxy";
	private webSocket: egret.WebSocket;
	private _isConnect: boolean;
	private _callBackConnect: Function;
	private _callBackClose: Function;
	private _loadID: number;
	private _server: string;

	private _isStartHeart: boolean;

	public constructor() {
		super(WebSocketProxy.NAME);
	}
	public onRegister(): void {
		this.webSocket = new egret.WebSocket();
		this.webSocket.type = egret.WebSocket.TYPE_BINARY;
		this.webSocket.addEventListener(egret.ProgressEvent.SOCKET_DATA, this.onReceiveMessage, this);
		this.webSocket.addEventListener(egret.Event.CONNECT, this.onSocketOpen, this);
		this.webSocket.addEventListener(egret.Event.CLOSE, this.onSocketClose, this);
		this.webSocket.addEventListener(egret.IOErrorEvent.IO_ERROR, this.ioErro, this);
	}

	private _isChangeServer: boolean = false;
	public connectSocket(server: string, callBack?: Function) {
		this._callBackConnect = callBack;
		this._server = server;
		if (this._isConnect) {
			this._isChangeServer = true;
			this.closeSocket(this.setConnectWait);
		} else {
			this.setConnect();
		}
		// this.facade.sendNotification(StaticEvent.N_M_LOADING_SHOW,new LoadingVO(LoadingViewMediator.LOAD_TYPE_FIREST,StaticData.langConfig.getLangStrByID(100006),false,this._loadID));
	}
	private setConnectWait() {
		egret.setTimeout(this.setConnect.bind(this), this, 100);
	}
	private setConnect() {
		this._isChangeServer = false;
		DebugLog.getInstance().showLog("连接服务器", this._server);
		// this.webSocket.connect("112.74.46.50", 12002);
		this.webSocket.connectByUrl(this._server);
		// 112.74.46.50:12002
		this._loadID = StaticFun.getRanNum(100000) + 12500;
	}
	private runCallBack(status: boolean) {
		this.sendNotification(StaticEvent.N_M_LOADING_DEL, new LoadingVO("", "", false, this._loadID));

		if (this._callBackConnect && this._isConnect) {
			this._callBackConnect(status);
		}
		if (this._callBackClose && !this._isConnect) {
			this._callBackClose(status);
		}
		if (this._isChangeServer) {
			return;
		}
		this._callBackClose = null;
		this._callBackConnect = null;
	}

	public closeSocket(callBack?: Function) {
		this._callBackClose = callBack;
		if (this._isConnect) {
			this.webSocket.close();
		}
	}
	private ioErro(e: egret.IOErrorEvent): void {
		this._isConnect = false;
		egret.log("egret.IOErrorEvent:" + e.type);
		AlertCtrl.getInstance().showAlert(StaticData.langConfig.getLangStrByID(100007));
		this.runCallBack(false);
	}
	private onSocketClose() {
		this._isConnect = false;
		this.stopHeart();
		this.runCallBack(false);
	}
	private onSocketOpen(): void {
		this._isConnect = true;
		this.runCallBack(true);
	}
	private _currTicker: number = 0;
	private _lastTicker: number = 0;

	public startHeart() {
		if (this._isStartHeart) {
			return;
		}
		this._isStartHeart = true;
		egret.startTick(this.onThisTicker.bind(this), this);
	}
	private stopHeart() {
		egret.stopTick(this.onThisTicker.bind(this), this);
	}
	private onThisTicker(timeStamp: number) {
		if (this._lastTicker != 0) {
			this._currTicker += (timeStamp - this._lastTicker);
		}
		this._lastTicker = timeStamp;
		if (this._currTicker > StaticData.configVO.heartTime * 1000) {
			this._currTicker = 0;
			var _reqVO: ReqPingObj = new ReqPingObj();
			var _sendVO = new SocketSendVO(_reqVO);
			_sendVO.isLog = false;
			this.facade.sendNotification(StaticEvent.N_C_SOCKET_SEND_DATA, _sendVO);
		}
	}

	private onReceiveMessage(e: egret.Event): void {
		var byte: egret.ByteArray = new egret.ByteArray();
		this.webSocket.readBytes(byte);
		var _len: number = byte.readShort();
		var _str: string = byte.readUTFBytes(_len - 2);
		DebugLog.getInstance().showLog("收到数据：" + _str);
		this.facade.sendNotification(StaticEvent.N_C_SOCKET_RECEIVE_DATA, JSON.parse(_str));
	}

	public sendData(sendVO: SocketSendVO) {
		if (sendVO.isLog) {
			DebugLog.getInstance().showLog("发送数据：" + sendVO.sendStr);
		}
		if (!this._isConnect) {
			DebugLog.getInstance().showLog("请先连接服务器!");
			return;
		}
		var _strByteArray: egret.ByteArray = new egret.ByteArray();
		_strByteArray.writeUTFBytes(sendVO.sendStr);
		var byteArray: egret.ByteArray = new egret.ByteArray();
		byteArray.writeShort(2 + _strByteArray.length);
		byteArray.writeBytes(_strByteArray);
		this.webSocket.writeBytes(byteArray);
		this.webSocket.flush();
	}
}