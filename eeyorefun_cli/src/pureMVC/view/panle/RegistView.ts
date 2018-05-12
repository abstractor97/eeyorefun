class RegistView extends PopupViewBase {
	public lb_title_acc: eui.Label;
	public lb_title_pw1: eui.Label;
	public lb_title_pw2: eui.Label;
	public lb_acc: eui.Label;
	public lb_pw1: eui.Label;
	public lb_pw2: eui.Label;

	public btn_cancel: eui.Button;
	public btn_regist: eui.Button;

	public constructor() {
		super();
		this.skinName = StaticData.getSkinName("registViewSkin");
	}
	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}
	protected childrenCreated(): void {
		super.childrenCreated();
		this._btnList = [this.btn_regist, this.btn_cancel];
		super.baseInitBtnEvent();
		
		this.lb_acc.type=egret.TextFieldType.INPUT;
		this.lb_pw1.type=egret.TextFieldType.INPUT;
		this.lb_pw2.type=egret.TextFieldType.INPUT;
		
	}
	public getRegistObj(): ReqNewRegistObj {
		var _acc: string = this.lb_acc.text;
		var _pw1:string=this.lb_pw1.text;
		var _pw2:string=this.lb_pw2.text;
		if(_acc==""||_pw1==""||_pw2==""){
			AlertCtrl.getInstance().showAlert(StaticData.langConfig.getLangStrByID(110045),function(){},function(){});
			return;
		}
		if(_pw1!=_pw2){
			AlertCtrl.getInstance().showAlert(StaticData.langConfig.getLangStrByID(110037));
			return;
		}
		var _newRegistObj = new ReqNewRegistObj();
		_newRegistObj.acc=_acc;
		_newRegistObj.pass=_pw1;
		return _newRegistObj;
	}
	public thisClose() {
		super.baseCloseWindow();
	}
}