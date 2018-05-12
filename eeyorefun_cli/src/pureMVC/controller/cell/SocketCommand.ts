class SocketCommand extends puremvc.SimpleCommand implements puremvc.ICommand{
	public constructor() {
		super();
	}
	public execute(notification: puremvc.INotification): void{
		var _socketProxy:WebSocketProxy=this.facade.retrieveProxy(WebSocketProxy.NAME) as WebSocketProxy;
		switch(notification.getType()){
			case StaticEvent.SOCKET_CONNECT:
				this.facade.sendNotification(StaticEvent.N_M_LOADING_SHOW,new LoadingVO(LoadingViewMediator.LOAD_TYPE_FIREST,"正在连接服务器...",false));
				break;
			case StaticEvent.SOCKET_STATE:
				this.socketState(notification.getBody() as boolean);
				break;
		}
	}
	private socketState(isConnect:boolean):void{
		if(isConnect){
			this.facade.sendNotification(StaticEvent.N_M_LOADING_DEL);
			this.sendNotification(StaticEvent.N_C_LOAD_TITLE_SCENE);
		}else{
			(this.facade.retrieveProxy(WebSocketProxy.NAME) as WebSocketProxy).closeSocket();
			this.facade.sendNotification(StaticEvent.N_M_LOADING_DEL);
		}
	}
}