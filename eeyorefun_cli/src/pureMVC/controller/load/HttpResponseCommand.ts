class HttpResponseCommand extends puremvc.SimpleCommand implements puremvc.ICommand {
	private _sendVO: HttpSendVO;
	private _sendID: number;
	public constructor() {
		super();
	}
	public execute(notification: puremvc.INotification) {
		this._sendVO = notification.getBody();
		this._sendID = StaticFun.getRanNum(100000) + 1000;
		if (this._sendVO.loadingType != null) {
			this.facade.sendNotification(StaticEvent.N_M_LOADING_SHOW, new LoadingVO(this._sendVO.loadingType, this._sendVO.loadingTitle, false, this._sendID));
		}
		var request = new egret.HttpRequest();
		request.responseType = egret.HttpResponseType.TEXT;
		//设置为 POST 请求
		// request.open("http://httpbin.org/get", this._sendVO.sendType);
		// request.open("http://httpbin.org/get",egret.HttpMethod.GET);
		// request.open("http://pay.lajoin.com/index/test/index", egret.HttpMethod.POST);
		request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		request.open(this._sendVO.sendURL, this._sendVO.sendType);

		if (this._sendVO.sendType == egret.HttpMethod.POST) {
			request.send(this._sendVO.dataObj);
		} else {
			request.send();
		}

		DebugLog.getInstance().showLog("发送Http数据:"+this._sendVO.sendVOStr);
		request.addEventListener(egret.Event.COMPLETE, this.onPostComplete, this);
		request.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onPostIOError, this);
		request.addEventListener(egret.ProgressEvent.PROGRESS, this.onPostProgress, this);
	}
	private onPostComplete(event: egret.Event): void {
		this.sendNotification(StaticEvent.N_M_LOADING_DEL, new LoadingVO("", "", false, this._sendID));
		var request = <egret.HttpRequest>event.currentTarget;
		DebugLog.getInstance().showLog("收到Http数据:"+request.response);
		if (this._sendVO.callBack != null) {
			this._sendVO.callBack(request.response);
		}
		this._sendVO.gc();
	}
	private onPostIOError(event: egret.IOErrorEvent): void {
		this.sendNotification(StaticEvent.N_M_LOADING_DEL, new LoadingVO("", "", false, this._sendID));
		AlertCtrl.getInstance().showAlert("http-post error : " + event);
		console.log("post error : " + event);
	}
	private onPostProgress(event: egret.ProgressEvent): void {
		// console.log("post progress : " + Math.floor(100 * event.bytesLoaded / event.bytesTotal) + "%");
	}
}