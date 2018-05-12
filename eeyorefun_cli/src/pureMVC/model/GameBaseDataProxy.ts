class GameBaseDataProxy extends puremvc.Proxy implements puremvc.IProxy {
	public static NAME: string = "GameBaseDataProxy";
	private _loadingTipList: string[] = [];
	private _levelVO: LevelListVO;
	private _starVO: StarListVO;
	private _manNameList: string[] = [];
	private _womanNameList: string[] = [];
	private _taskConfigVO: TaskConfigVO;
	private _headListVO: HeadListVO;
	private _mallListVO: MallListVO;
	private _qqInfoObj: RecInfoQQObj;
	public constructor() {
		super(GameBaseDataProxy.NAME);
	}

	public addQQInfoObj(qqInfoObj: RecInfoQQObj) {
		this._qqInfoObj = qqInfoObj;
	}
	public getQQInfoObj(): RecInfoQQObj {
		return this._qqInfoObj;
	}
	public addLoadingTip(str: string) {
		if (!str) {
			return;
		}
		this._loadingTipList = this._loadingTipList.concat(str.split("\n"));
	}
	public getLoadingTipRand(): string {
		if (this._loadingTipList.length == 0) {
			return null;
		}
		return StaticFun.getRanList(this._loadingTipList, 1)[0];
	}
	public initNameMan(str: string) {
		this._manNameList = str.split("\r\n");

	}
	public initNameWoman(str: string) {
		this._womanNameList = str.split("\r\n");
	}
	public getRandName(sex: number = -1): string {
		if (sex == 1) {
			return StaticFun.getRanList(this._manNameList, 1)[0];
		} else if (sex == 2) {
			return StaticFun.getRanList(this._womanNameList, 1)[0];
		} else {
			var _list = this._manNameList.concat(this._womanNameList);
			return StaticFun.getRanList(_list, 1)[0];
		}
	}
	private _payListVO: PayListVO;
	public addPayList(payListVO: PayListVO) {
		this._payListVO = payListVO;
	}
	public getPayList(): PayListVO {
		return this._payListVO;
	}
	public setHeadVO(headVO) {
		this._headListVO = headVO;
	}
	public getHeadListVO() {
		return this._headListVO;
	}
	private _signListVO: SignListVO;
	public setSignListVO(listVO: SignListVO) {
		this._signListVO = listVO;
	}
	public getSignListVO(): SignListVO {
		return this._signListVO;
	}
	public setLevelVO(levelVO: LevelListVO) {
		this._levelVO = levelVO;
	}
	public getLevelVO(): LevelListVO {
		return this._levelVO;
	}
	public setMallListVO(list: MallListVO) {
		this._mallListVO = list;
	}
	public getMallListVO(): MallListVO {
		return this._mallListVO;
	}
	public setStarVO(starVO: StarListVO) {
		this._starVO = starVO;
	}
	public getStarVO(): StarListVO {
		return this._starVO;
	}
	public setTaskConfigVO(vo: TaskConfigVO) {
		this._taskConfigVO = vo;
	}
	public getTaskConfigVO(): TaskConfigVO {
		return this._taskConfigVO;
	}

}