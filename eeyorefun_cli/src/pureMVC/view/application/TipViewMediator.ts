/**
 * TipViewMediator extends pure
 */
class TipViewMediator extends puremvc.Mediator implements puremvc.IMediator {
    public static NAME:string="TipViewMediator";
    constructor(view:egret.DisplayObjectContainer) {
        super(TipViewMediator.NAME,view);
    }
    public listNotificationInterests(): Array<any> {
        return [
            StaticEvent.N_M_TIP_LAYER_ADD,
            StaticEvent.N_M_TIP_LAYER_DEL,
        ]
    }
	 public handleNotification(notification: puremvc.INotification): void {
        var _loadVO:LoadResVO=notification.getBody() as LoadResVO;
        switch(notification.getName()){
			case StaticEvent.N_M_TIP_LAYER_ADD:
				break;
			case StaticEvent.N_M_TIP_LAYER_DEL:
				break;
		}
	 }
     public get view(): egret.DisplayObjectContainer {
        return <egret.DisplayObjectContainer> this.viewComponent;
    }
}