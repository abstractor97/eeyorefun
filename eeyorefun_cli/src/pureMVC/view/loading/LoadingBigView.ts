/**
 *
 * @author 
 *
 */
class LoadingBigView extends BaseLoadingView {
	public img_mask_bar_1:eui.Image;

	public img_bar_bg_1: eui.Image;
	public img_bar_1: eui.Image;
	public thumb: eui.Rect;
	public img_bar_bg_2: eui.Image;
	public img_bar_2: eui.Image;
	public img_tips_bg: eui.Image;

	public lb_per: eui.Label;
	public lb_title: eui.Label;
	public lb_tips: eui.Label;

	public gp_tips: eui.Group;
	public gp_bar_1: eui.Group;
	public gp_bar_2: eui.Group;


    public constructor() {
    	super();
		this.skinName = "LoadingBigSkin";
	}
	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}
	protected childrenCreated(): void {
		super.childrenCreated();
		this.img_bar_1.mask = this.img_mask_bar_1;
		this.img_bar_2.mask = this.thumb;
		if (this._isPer) {
			this.gp_bar_1.visible = false;
			this.gp_bar_2.visible = true;
		} else {
			this.gp_bar_1.visible = true;
			this.gp_bar_2.visible = false;
			this.setBarMove();
		}
	}
	
	private setBarMove() {
		this.img_bar_1.x=-this.img_bar_1.width;
		var _endX:number=this.img_mask_bar_1.x+this.img_mask_bar_1.width
		egret.Tween.removeTweens(this.img_bar_1);
		egret.Tween.get(this.img_bar_1).to({x:_endX},5000).call(this.setBarMove.bind(this));
	}
	public baseGC() {
		egret.Tween.removeTweens(this.img_bar_1);
    }
}
