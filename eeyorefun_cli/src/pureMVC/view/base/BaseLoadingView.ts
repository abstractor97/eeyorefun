/**
 *
 * @author 
 *
 */
class BaseLoadingView extends PopupViewBase {
    public lb_per: eui.Label;
    public lb_title: eui.Label;
    public lb_tips: eui.Label;

    public thumb: eui.Rect;
    public loadingID: number;

    protected _isPer: boolean;
    public constructor() {
        super();
        this.isEase=false;
    }
    public setIsPer(isPer: boolean) {
        this._isPer = isPer;
        if (!isPer) {
            this.lb_per.text = "loading...";
        }
    }
    public setTips(tips: string) {
        this.lb_tips.text = tips;
        // StaticFun.setLabelStr(this.lb_tips,tips);
    }
    public setTitle(_title: string): void {
        this.lb_title.text = _title;
        // StaticFun.setLabelStr(this.lb_title,_title);
    }
    public setProgress(_per: number): void {
        if (!this._isPer) {
            return;
        }
        this.thumb.scaleX = _per;
        this.lb_per.text = Math.floor(100 * _per) + "%";
    }
    public baseGC() {
    }
}
