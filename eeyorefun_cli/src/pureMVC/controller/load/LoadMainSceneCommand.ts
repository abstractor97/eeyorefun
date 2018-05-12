class LoadMainSceneCommand extends puremvc.SimpleCommand implements puremvc.ICommand {
    private _isLoadUserInfo: boolean;
    public constructor() {
        super()
    }
    public execute(notification: puremvc.INotification): void {
        this._isLoadUserInfo = notification.getBody();
        var _loadResVO: LoadResVO = new LoadResVO(
            StaticData.RES_mainScene,
            this.loadResCom.bind(this),
            LoadingViewMediator.LOAD_TYPE_BIG,
            StaticData.langConfig.getLangStrByID(100002));
        this.facade.sendNotification(StaticEvent.N_C_LOAD_RESOURCE_GROUP, _loadResVO);
    }
    private loadResCom(): void {
        var _starObj: Object = RES.getRes("starList_json");
        var _levelObj: Object = RES.getRes("levelList_json");
        var _userNameMan: string = RES.getRes("userNameMan_txt");
        var _userNameWoman: string = RES.getRes("userNameWoman_txt");
        var _mallList: Object = RES.getRes("roleList_json");
        var _headListObj: Object = RES.getRes("headList_json");

        var _payListObj: Object = RES.getRes("payList_json");
        var _payListVO: PayListVO = new PayListVO(StaticFun.getObjList(_payListObj));


        var _headListVO = new HeadListVO(StaticFun.getObjList(_headListObj));
        var _mallVO = new MallListVO(StaticFun.getObjList(_mallList));
        var _starVO = new StarListVO(StaticFun.getObjList(_starObj));
        var _levelVO = new LevelListVO(StaticFun.getObjList(_levelObj));
        _levelVO.initAward(_starVO);
        var _baseProxy: GameBaseDataProxy = this.facade.retrieveProxy(GameBaseDataProxy.NAME) as GameBaseDataProxy;
        _baseProxy.setLevelVO(_levelVO);
        _baseProxy.setStarVO(_starVO);
        _baseProxy.setMallListVO(_mallVO);
        _baseProxy.initNameMan(_userNameMan);
        _baseProxy.initNameWoman(_userNameWoman);
        _baseProxy.setHeadVO(_headListVO);
        _baseProxy.addPayList(_payListVO);

        if (this._isLoadUserInfo) {
            this.loadMyUserInfo();
        } else {
            var _sendVO: HttpSendVO = new HttpSendVO(
                StaticData.getReqHttpUrl(StaticData.configVO.getNote),
                egret.HttpMethod.GET,
                "",
                this.loadNoteCom.bind(this),
                LoadingViewMediator.LOAD_TYPE_BIG,
                StaticData.langConfig.getLangStrByID(100003));
            this.sendNotification(StaticEvent.N_C_HTTP_SEND_DATA, _sendVO);
        }
    }
    private loadNoteCom(str: string) {
        var _noteObj = new RecNoteObj(JSON.parse(str));
        this.facade.sendNotification(StaticEvent.N_M_MAIN_SCENE_SHOW, _noteObj);
    }
    private loadMyUserInfo() {
        var _reqVO = new ReqUserInfoObj();
        _reqVO.fid = StaticData.USER_UID;
        this.facade.sendNotification(StaticEvent.N_C_SOCKET_SEND_DATA, new SocketSendVO(_reqVO, this.loadUserInfoCom.bind(this)));
    }
    private loadUserInfoCom(socketVO: SocketRecVO): void {
        var _userInfo = new RecUserInfoObj(socketVO.data);
        var _myUserOV = (this.facade.retrieveProxy(UserInfoProxy.NAME) as UserInfoProxy).userInfoObj;
        _myUserOV.star = _userInfo.star;
        _myUserOV.name = _userInfo.name;
        _myUserOV.coin = _userInfo.coin;
        _myUserOV.diamond = _userInfo.diamond;
        this.facade.sendNotification(StaticEvent.N_M_MAIN_SCENE_SHOW);
    }
}
