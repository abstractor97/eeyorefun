/**
 *
 * @author 
 *
 */
class LoadingSmallView extends BaseLoadingView {
	public lb_title: eui.Label;
	public lb_tips: eui.Label;
	public img_icon: eui.Image;
	public lb_per: eui.Label;
	public gp_tips: eui.Group;
	public img_tips_bg: eui.Image;
	public gp_icon: eui.Group;
	public img_icon_1: eui.Image;

	public constructor() {
    	super();
		this.skinName = "LoadingSmallSkin";
	}
	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}
	protected childrenCreated(): void {
		super.childrenCreated();
		if (this._isPer) {
			this.img_icon_1.visible=false;
			this.lb_per.visible=true;
		} else {
			this.img_icon_1.visible=true;
			this.lb_per.text="loading";
			this.setIconRotation();
		}
	}
	public setIsPer(isPer: boolean) {
        this._isPer = isPer;
    }
	public setProgress(_per: number): void {
		if (!this._isPer) {
			return;
		}
        this.lb_per.text = Math.floor(100 * _per) + "%";
    }
	private setIconRotation() {
		egret.Tween.removeTweens(this.gp_icon);
		egret.Tween.get(this.gp_icon).to({ rotation: -360 }, 2000).call(this.setIconRotation.bind(this));
	}
	public baseGC() {
		egret.Tween.removeTweens(this.gp_icon);
    }
}
