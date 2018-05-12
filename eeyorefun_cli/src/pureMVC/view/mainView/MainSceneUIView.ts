class MainSceneUIView extends BaseUILayer implements IBaseGC {
	public gp_main: eui.Group;
	public gp_breed: eui.Group;
	public btn_breed: eui.Button;
	public gp_drill: eui.Group;
	public btn_drill: eui.Button;
	public gp_store: eui.Group;
	public btn_store: eui.Button;
	public gp_mine: eui.Group;
	public btn_mine: eui.Button;
	public gp_study: eui.Group;
	public btn_study: eui.Button;


	private _levelListVO: LevelListVO
	private _userVO: UserBaseInfoObj;
	public constructor(userVO: UserBaseInfoObj, levelListVO: LevelListVO) {
		super();
		this._userVO = userVO;
		this._levelListVO = levelListVO;
		this.skinName = StaticData.getSkinName("MainSceneUISkin");
	}
	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}
	protected childrenCreated(): void {


		super.baseInitBtnEvent();

		EventManager.getInstance().addEventListener(EventManager.EVENT_USER_INFO_CHANGE, this.onUserInfoChange, this);
	}

	private onUserInfoChange(e?: CustomEventMy) {

	}
	public baseGC() {
		EventManager.getInstance().removeEventListener(EventManager.EVENT_USER_INFO_CHANGE, this.onUserInfoChange, this);
		super.BaseUILayerGC();
	}
}

