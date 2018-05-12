class SocketRecDataCommand extends puremvc.SimpleCommand implements puremvc.ICommand {
	public constructor() {
		super();
	}
	public execute(notification: puremvc.INotification): void {
		var _obj: Object = notification.getBody() as Object;
		var _socketRecVO: SocketRecVO = new SocketRecVO(_obj);

		if (_socketRecVO.result == StaticData.CODE_0) {
			this.sendNotification(StaticEvent.SOCKET_REC + _socketRecVO.msgid + _socketRecVO.cmd, _socketRecVO);
			var _fun: Function = RequestManager.getInstance().getCallBack(_socketRecVO.seq);
			if (_fun != null) {
				_fun(_socketRecVO);
			}
		} else if (_socketRecVO.result == StaticData.CODE_7001) {
			AlertCtrl.getInstance().showAlert(StaticData.langConfig.getLangStrByID(110055),this.showShareView.bind(this),function(){});
		} else if (_socketRecVO.result == StaticData.CODE_7002) {
			AlertCtrl.getInstance().showAlert(StaticData.langConfig.getLangStrByID(110054),this.showPayView.bind(this),function(){});
		} else if (_socketRecVO.errmsg) {
			AlertCtrl.getInstance().showAlert(_socketRecVO.errmsg);
		}
		if (_socketRecVO.seq != 0) {
			this.sendNotification(StaticEvent.N_M_LOADING_DEL, new LoadingVO("", "", false, _socketRecVO.seq));
			RequestManager.getInstance().delCallBack(_socketRecVO.seq);
		}
	};
	private showShareView(){
		this.facade.sendNotification(StaticEvent.N_M_SHARE_VIEW_SHOW);
	}
	private showPayView(){
		this.facade.sendNotification(StaticEvent.N_M_PAY_VIEW_SHOW);
	}
}