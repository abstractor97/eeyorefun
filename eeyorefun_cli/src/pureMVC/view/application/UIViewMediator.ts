


class UIViewMediator extends puremvc.Mediator implements puremvc.IMediator{
	public static NAME:string="UIViewMediator";
	public constructor(view:eui.UILayer) {
		super(UIViewMediator.NAME,view);
	}
	public listNotificationInterests(): Array<any> {
        return [
            StaticEvent.N_M_UI_SHOW,
            StaticEvent.N_M_UI_DEL,
        ]
    }
	private removeUI(){
		this.view.removeChildren();
	}
	private addUIView(ui:eui.Component){
		ui.width=this.view.stage.stageWidth;
		ui.height=this.view.stage.stageHeight;
		this.view.addChild(ui);
	}
	public handleNotification(notification: puremvc.INotification): void {
        var ui:eui.Component=notification.getBody() as eui.Component;
        switch(notification.getName()){
			case StaticEvent.N_M_UI_SHOW:
				this.addUIView(ui);
				break;
			case StaticEvent.N_M_UI_DEL:
				this.removeUI();
				break;
		}
	 }
	public get view(): eui.UILayer {
        return <eui.UILayer> this.viewComponent;
    }

}