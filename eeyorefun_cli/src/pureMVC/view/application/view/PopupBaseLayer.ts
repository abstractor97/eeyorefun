class PopupBaseLayer extends eui.UILayer {
	private _mask: eui.Rect;


	public constructor() {
		super();
		this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onToStage, this);
		this.addEventListener(egret.Event.RESIZE, this.onReSize, this);
	}
	private onReSize() {
		if (this._mask) {
			this._mask.width = this.stage.stageWidth;
			this._mask.height = this.stage.stageHeight;
		}
	}
	private onToStage(e: egret.Event) {
		this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onToStage, this);
		this._mask = new eui.Rect(this.stage.stageWidth, this.stage.stageHeight, 0x000000);
		this._mask.alpha = 0.8;
		this._mask.visible = false;
		this.addChild(this._mask);
	}
	public addView(view: PopupViewBase) {
		if (!this.contains(view)) {
			this.addChild(view);
			var _scale: number = view.scaleX;
			if (view.isEase) {
				view.scaleX = view.scaleY = 0.1;
				egret.Tween.removeTweens(view);
				egret.Tween.get(view).to({ scaleX: _scale, scaleY: _scale }, 300, egret.Ease.backOut);
			}
		}
		this.setMaskTier(true);
	}
	public delView(view: egret.DisplayObjectContainer) {
		if (this.contains(view)) {
			this.removeChild(view);
		}
		this.setMaskTier(false);
	}
	private setMaskTier(isAdd: boolean) {

		if (this.numChildren > 1) {
			var _depth: number = isAdd ? 1 : 2;
			var _view: PopupViewBase = this.getChildAt(this.numChildren - _depth) as PopupViewBase;
			this._mask.visible = _view.isShowBG;
			this.touchEnabled = _view.isShowBG;
			this.setChildIndex(this._mask, this.numChildren - 2);
			this.onReSize();
		} else {
			this._mask.visible = false;
			this.touchEnabled = false;
		}
	}
}