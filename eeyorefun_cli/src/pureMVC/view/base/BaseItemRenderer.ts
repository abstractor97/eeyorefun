class BaseItemRenderer  extends eui.ItemRenderer {
	public constructor() {
		super();
	}
	private onRemove(e:Event){
		this.removeEventListener(egret.Event.REMOVED_FROM_STAGE,this.onRemove,this);
		this.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.onBtnTap,this);
		this.baseGC();
	}
	protected baseGC(){

	}
	protected initThisTap():void {
		this.touchEnabled=true;
		this.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onBtnTap,this);
		this.addEventListener(egret.Event.REMOVED_FROM_STAGE,this.onRemove,this);
	}
	protected onBtnTap(e:TouchEvent){
	}
}