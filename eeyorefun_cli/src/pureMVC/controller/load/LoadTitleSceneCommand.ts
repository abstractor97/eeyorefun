/**
 * @author 
 */
class LoadTitleSceneCommand extends puremvc.SimpleCommand implements puremvc.ICommand{
    public constructor() {
    	   super()
	}
    public execute(notification: puremvc.INotification): void {
        var _loadResVO: LoadResVO = new LoadResVO(
            StaticData.RES_TitleScene,
            this.loadResCom.bind(this),
            LoadingViewMediator.LOAD_TYPE_BIG,
            StaticData.langConfig.getLangStrByID(100002));
        this.facade.sendNotification(StaticEvent.N_C_LOAD_RESOURCE_GROUP,_loadResVO);
    }
    private loadResCom(): void {
        this.facade.sendNotification(StaticEvent.N_M_TITLE_SCENE_SHOW);
    }
}
