/**
 * AlertBaseView extends egret.gui.TitleW
 */
class AlertBaseView extends PopupViewBase {
    public label_clew: eui.Label;
    public btn_cancel: eui.Button;
    public btn_enter: eui.Button;
    public gp_enter: eui.Group;
    public gp_cancel: eui.Group;

    private _clew: string;
    private _enterFun: Function;
    private _cancelFun: Function;
    private _defEnterStr: string;
    private _defCancelStr: string;
    constructor(clew: string, enterFun?: Function, cancelFun?: Function) {
        super();
        // this.isEase = false;
        this._clew = clew;
        this.isShowBG = true;
        this._enterFun = enterFun;
        this._cancelFun = cancelFun;
        this.skinName = "AlertBaseSkin";
    }
    protected partAdded(partName: string, instance: any): void {
        super.partAdded(partName, instance);
    }
    public hideBtn() {
        this.gp_enter.visible = this.gp_cancel.visible = false;
    }
    protected childrenCreated(): void {
        this.label_clew.textFlow = new egret.HtmlTextParser().parser(this._clew);
        if (!this.enterFun || !this._cancelFun) {
            this.gp_cancel.visible = false;
            this.gp_enter.horizontalCenter = 0;
        }
        this.btn_enter.addEventListener(egret.TouchEvent.TOUCH_TAP, this.enterFun, this);
        this.btn_cancel.addEventListener(egret.TouchEvent.TOUCH_TAP, this.cancelFun, this);
    }
    private closeFun(e: Event): void {
        this.removeThis();
        if (this._cancelFun) {
            this._cancelFun();
        } else if (this._enterFun) {
            this._enterFun();
        }
    }
    private removeThis(): void {
        this._enterFun = null;
        this._cancelFun = null;
        this.btn_enter.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.enterFun, this);
        this.btn_cancel.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.cancelFun, this);
        (this.parent as PopupBaseLayer).delView(this);
    }
    private enterFun(e: Event): void {
        if (this._enterFun != null) {
            this._enterFun();
        }
        this.removeThis();
    }
    private cancelFun(e: Event): void {
        if (this._cancelFun != null) {
            this._cancelFun();
        }
        this.removeThis();
    }
}