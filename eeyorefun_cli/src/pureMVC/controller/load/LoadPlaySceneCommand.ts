class LoadPlaySceneCommand extends puremvc.SimpleCommand implements puremvc.ICommand {
    private _gameStartVO: GameStartVO;
    public constructor() {
        super()
    }
    public execute(notification: puremvc.INotification): void {
        this._gameStartVO = notification.getBody();
        var _playSceneRes: RES.ResourceItem[] = RES.getGroupByName(StaticData.RES_playScene);
        var _listRes: string[] = [];
        for (var i in _playSceneRes) {
            _listRes.push(_playSceneRes[i].name);
        }
        for (var n in this._gameStartVO.roleObjList) {
            var _roleID: number = this._gameStartVO.roleObjList[n].roleID;
            var list: string[] = StaticFun.getAnimationResList(StaticData.getRoleName(_roleID));
            _listRes = _listRes.concat(list);
        }
        RES.createGroup(StaticData.RES_playScene, _listRes, true);
        var _loadResVO: LoadResVO = new LoadResVO(
            StaticData.RES_playScene,
            this.loadResCom.bind(this),
            LoadingViewMediator.LOAD_TYPE_BIG,
            StaticData.langConfig.getLangStrByID(100002));
        this.facade.sendNotification(StaticEvent.N_C_LOAD_RESOURCE_GROUP, _loadResVO);
    }
    private loadResCom(): void {
        var _dropListObj: Object = RES.getRes("dropList_json");
        this.sendNotification(StaticEvent.N_M_PLAY_SCENE_SHOW, this._gameStartVO);
    }
}