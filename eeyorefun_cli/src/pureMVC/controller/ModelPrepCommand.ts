

module game {

	export class ModelPrepCommand extends puremvc.SimpleCommand implements puremvc.ICommand{

		public constructor(){
			super();
		}
		public execute(notification:puremvc.INotification):void{
    		this.facade.registerProxy(new LoadResProxy());
			this.facade.registerProxy(new GameBaseDataProxy());
			this.facade.registerProxy(new WebSocketProxy());
		}
	}
}