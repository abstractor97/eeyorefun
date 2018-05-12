class OffLineCommand extends puremvc.SimpleCommand implements puremvc.ICommand {
	public constructor() {
		super()
	}
	public execute(notification: puremvc.INotification): void {
		var _socketProxy: WebSocketProxy = this.facade.retrieveProxy(WebSocketProxy.NAME) as WebSocketProxy;
		_socketProxy.closeSocket(this.socketCloseFun.bind(this));
	}
	private socketCloseFun(socketVO: SocketRecVO): void {
		AlertCtrl.getInstance().showAlertNoBtn(StaticData.langConfig.getLangStrByID(110060));
	}
}