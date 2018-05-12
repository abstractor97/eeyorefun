class SectorProgressSprite extends egret.Sprite {
	private _angle: number = 0;
	private _dic: number;
	private _anticlockwise: boolean;
	private _callBack: Function;
	private _radius: number;
	private _drawShape: egret.Shape;

	private _initDis:number=6;
	public constructor(radius: number, anticlockwise: boolean, time: number, callBack?: Function) {
		super();
		this._radius = radius;
		this._anticlockwise = anticlockwise;
		this._dic = this._initDis/time;
		this._callBack = callBack;

		this.rotation = -90;
		this._drawShape = new egret.Shape();
		this._drawShape.x = -radius;
		this._drawShape.y = -radius;
		this.addChild(this._drawShape);
	}
	public startRun(time:number=0){
		if(time!=0){
			this._dic=this._initDis/time;
		}
		this._angle=0;
		egret.startTick(this.tickFun, this);
	}


	private tickFun(timeStamp: number): boolean {
		this._angle += 1 * this._dic;
		this.changeGraphics(this._angle);
		if (Math.abs(this._angle)>= 360) {
			this.clearRun();
		}
		this._angle=this._angle%360;
		return true;
	}

	private changeGraphics(angle) {
		this._drawShape.graphics.clear();
		this._drawShape.graphics.beginFill(0xff0000);
		this._drawShape.graphics.moveTo(this._radius, this._radius);
		this._drawShape.graphics.lineTo(this._radius * 2, this._radius);
		this._drawShape.graphics.drawArc(this._radius, this._radius,this._radius, 0, angle * Math.PI / 180, this._anticlockwise);
		this._drawShape.graphics.lineTo(this._radius, this._radius);
		this._drawShape.graphics.endFill();
	}

	public clearRun() {
		egret.stopTick(this.tickFun, this);
		this._drawShape.graphics.clear();
		if (this._callBack) {
			this._callBack();
			this._callBack = null;
		}
	}
}