class BaseMediator extends puremvc.Mediator implements puremvc.IMediator {
	public constructor(mediatorName?: string, viewComponent?: any) {
		super(mediatorName, viewComponent);
	}

	public loadRes(resName: string, callBack: Function, loadType?: string, loadTitle?: string): void {
		loadType = loadType ? loadType : LoadingViewMediator.LOAD_TYPE_SMALL;
		loadTitle = loadTitle ? loadTitle : StaticData.langConfig.getLangStrByID(100002);
		var _loadResVO: LoadResVO = new LoadResVO(
			resName,
			callBack,
			loadType,
			loadTitle
		);
		this.facade.sendNotification(StaticEvent.N_C_LOAD_RESOURCE_GROUP, _loadResVO);
	}
}