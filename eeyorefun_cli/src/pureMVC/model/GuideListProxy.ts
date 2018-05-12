class GuideListProxy extends puremvc.Proxy implements puremvc.IProxy {
	public static NAME: string = "GuideListProxy";
	public constructor(list: Object[]) {
		super(GuideListProxy.NAME);
		var _list: GuideVO[] = [];
		for (var i in list) {
			_list.push(new GuideVO(list[i]));
		}
		this.data = _list;
	}
	public onRegister(): void{
		EventManager.getInstance().addEventListener(EventManager.EVENT_SEND_GUIDE_ID,this.sendGuideID,this);
	}
	public getGuideByID(id: number): GuideVO {
		var _list: GuideVO[] = this.guideList;
		for (var i: number = 0; i < _list.length; i++) {
			if (id == _list[i].id) {
				return _list[i];
			}
		}
	}
	private sendGuideID() {
		if (StaticData.GUIDE_CURR_ID != 0) {
			// var _reqVO = new ReqNewGuideObj();
			// _reqVO.opt = StaticData.GUIDE_CURR_ID;
			// this.facade.sendNotification(StaticEvent.N_C_SOCKET_SEND_DATA, new SocketSendVO(_reqVO, null, LoadingViewMediator.LOAD_TYPE_NONE));
		}
	}
	public get guideList(): GuideVO[] {
		return this.data;
	}
}