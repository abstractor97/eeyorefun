class LoadEmailCommand extends puremvc.SimpleCommand implements puremvc.ICommand {
    public constructor() {
        super();
    }
    public execute(notification: puremvc.INotification): void {
        var _loadResVO: LoadResVO = new LoadResVO(
            StaticData.RES_emailRes,
            this.loadResCom.bind(this),
            LoadingViewMediator.LOAD_TYPE_SMALL,
            StaticData.langConfig.getLangStrByID(100002));
        this.facade.sendNotification(StaticEvent.N_C_LOAD_RESOURCE_GROUP, _loadResVO);
    }
    private loadResCom(): void {
        var _reqVO = new ReqEmailListObj();
        this.sendNotification(StaticEvent.N_C_SOCKET_SEND_DATA, new SocketSendVO(_reqVO, this.loadEmailCom.bind(this)));
    }
    private loadEmailCom(vo: SocketRecVO) {
        var _recVO=new RecEmailListVO(vo.data);
        this.facade.sendNotification(StaticEvent.N_M_EMAIL_SHOW,_recVO);
    }
}