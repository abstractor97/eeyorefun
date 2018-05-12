/**
 *
 * @author 
 *
 */
class LoadResourceGroupCommand extends puremvc.SimpleCommand implements puremvc.ICommand{
	public constructor() {
    	   super()
	}
    public execute(notification: puremvc.INotification): void {
        var _loadResVO:LoadResVO=notification.getBody() as LoadResVO;
        (this.facade.retrieveProxy(LoadResProxy.NAME) as LoadResProxy).addLoadRes(_loadResVO);
    }
}
