class LoadGuideCommand extends puremvc.SimpleCommand implements puremvc.ICommand{
	public constructor() {
		super();
	}
	public execute(notification: puremvc.INotification): void {
        var _loadResVO: LoadResVO = new LoadResVO(
            StaticData.RES_guideRes,
            this.loadResCom.bind(this),
             LoadingViewMediator.LOAD_TYPE_SMALL,
            StaticData.langConfig.getLangStrByID(100005)
            );
        this.facade.sendNotification(StaticEvent.N_C_LOAD_RESOURCE_GROUP,_loadResVO);
    }
    private loadResCom(): void {
		var _fileName:string="newGuide_json";
		var _obj: Object = RES.getRes(_fileName);
		var _objList:Object[]=StaticFun.getObjList(_obj);
		this.facade.registerProxy(new GuideListProxy(_objList));
		this.facade.sendNotification(StaticEvent.N_M_GUIDE_SHOW);
	}
}