class AlertCtrl {
	private static _instance: AlertCtrl;
	private _view: PopupBaseLayer;
	public constructor() {
		if (AlertCtrl._instance != null) {
			throw ("该类是单例模式请使用getInstance()获取");
		}
	}
	public static getInstance(): AlertCtrl {
		if (AlertCtrl._instance == null) {
			AlertCtrl._instance = new AlertCtrl();
		}
		return AlertCtrl._instance;
	}
	public setContain(view: PopupBaseLayer) {
		this._view = view;
	}
	public showAlertNoBtn(clew: string) {
		var _view: AlertBaseView = new AlertBaseView(clew);
		_view.hideBtn();
		_view.horizontalCenter = 0;
		_view.verticalCenter = 0;
		this._view.addView(_view);
	}
	public showAlert(clew: string, enterFun?: Function, cancelFun?: Function) {
		var view: AlertBaseView = new AlertBaseView(clew, enterFun, cancelFun);
		view.horizontalCenter = 0;
		view.verticalCenter = 0;
		this._view.addView(view);
	}
}