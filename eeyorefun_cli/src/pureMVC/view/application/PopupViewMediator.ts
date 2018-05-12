class PopupViewMediator extends puremvc.Mediator implements puremvc.IMediator{
	public static NAME:string="PopupViewMediator";
	public constructor(view:PopupBaseLayer) {
		super(PopupViewMediator.NAME,view);
	}
	public listNotificationInterests(): Array<any> {
        return [
            StaticEvent.N_M_POPUP_LAYER_ADD,
            StaticEvent.N_M_POPUP_LAYER_DEL,
        ]
    }
	
	 public handleNotification(notification: puremvc.INotification): void {
        var _view:PopupViewBase=notification.getBody() as PopupViewBase;
		_view.isShowBG=notification.getType()=="false"?false:true; 
        switch(notification.getName()){
			case StaticEvent.N_M_POPUP_LAYER_ADD:
				_view.horizontalCenter=0;
				_view.verticalCenter=0;
				this.view.addView(_view);
				break;
			case StaticEvent.N_M_POPUP_LAYER_DEL:
				this.view.delView(_view);
				break;
		}
	 }
	 public get view(): PopupBaseLayer {
        return <PopupBaseLayer> this.viewComponent;
    }
}