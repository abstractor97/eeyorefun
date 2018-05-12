class UserInfoProxy extends puremvc.Proxy implements puremvc.IProxy {
	public static NAME: string = "UserInfoProxy";
	private _reqCallBack: Function;
	public constructor() {
		super(UserInfoProxy.NAME);
	}
	public initUserInfoObj(vo: UserBaseInfoObj, isLogin: boolean) {

		if (!isLogin) {
			this.changeUserInfo(vo);
		} else {
			this.data = vo;
		}
	}
	public get userInfoObj(): UserBaseInfoObj {
		return this.data;
	}
	public changeUserInfo(data?: Object) {
		if (!data) {
			return;
		}
		for (var i in data) {
			this.userInfoObj[i] = data[i];
		}
		EventManager.getInstance().sendEvent(EventManager.EVENT_USER_INFO_CHANGE);
		if (this._reqCallBack != null) {
			this._reqCallBack();
			this._reqCallBack = null;
		}
	}
}