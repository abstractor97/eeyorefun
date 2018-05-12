class LoadMallCommand extends puremvc.SimpleCommand implements puremvc.ICommand {
    private _myRoleID: number;
    public constructor() {
        super()
    }
    public execute(notification: puremvc.INotification): void {
        this._myRoleID = notification.getBody();
        var _loadResVO: LoadResVO = new LoadResVO(
            StaticData.RES_mallRes,
            this.loadResCom.bind(this),
            LoadingViewMediator.LOAD_TYPE_SMALL,
            StaticData.langConfig.getLangStrByID(100002));
        this.facade.sendNotification(StaticEvent.N_C_LOAD_RESOURCE_GROUP, _loadResVO);
    }
    private loadResCom(): void {
    }
    private reqMallListCom(socket: SocketRecVO) {
        this.facade.sendNotification(StaticEvent.N_M_MALL_SHOW);
    }
}