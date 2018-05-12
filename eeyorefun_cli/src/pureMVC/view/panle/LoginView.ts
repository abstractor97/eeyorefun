class LoginView extends PopupViewBase {
	public lb_acc: eui.Label;
	public lb_pw: eui.Label;
	public lb_title_acc: eui.Label;
	public lb_title_pw: eui.Label;
	public btn_cancel: eui.Button;
	public btn_login: eui.Button;

	public constructor() {
		super();
		this.skinName = StaticData.getSkinName("loginViewSkin");
	}
	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}
	protected childrenCreated(): void {
		super.childrenCreated();
		this._btnList = [this.btn_login, this.btn_cancel];
		super.baseInitBtnEvent();
		
		this.lb_acc.type=egret.TextFieldType.INPUT;
		this.lb_pw.type=egret.TextFieldType.INPUT;
		
	}
	public thisClose() {
		super.baseCloseWindow();
	}
	public getReqServerObj():ReqGameServerObj{
		var _acc:string=this.lb_acc.text;
		var _pw:string=this.lb_pw.text;

		if(_acc==""){
			AlertCtrl.getInstance().showAlert(StaticData.langConfig.getLangStrByID(110042));
			return;
		}
		if(_pw==""){
				AlertCtrl.getInstance().showAlert(StaticData.langConfig.getLangStrByID(110031));
			return;
		}
		return new ReqGameServerObj(_acc,_pw);
	}
	
}