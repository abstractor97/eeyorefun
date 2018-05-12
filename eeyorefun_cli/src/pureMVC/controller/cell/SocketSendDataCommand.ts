class SocketSendDataCommand extends puremvc.SimpleCommand implements puremvc.ICommand{
	public constructor() {
		super();
	}
	public execute(notification:puremvc.INotification): void{
		var _sendVO:SocketSendVO=notification.getBody() as SocketSendVO;
		var _socketProxy:WebSocketProxy=this.facade.retrieveProxy(WebSocketProxy.NAME) as WebSocketProxy;
		if(_sendVO.loadingType!=null){
			this.facade.sendNotification(StaticEvent.N_M_LOADING_SHOW,new LoadingVO(_sendVO.loadingType,_sendVO.loadingTitle,false,_sendVO.sendID));
		}
		_socketProxy.sendData(_sendVO);
	}
}