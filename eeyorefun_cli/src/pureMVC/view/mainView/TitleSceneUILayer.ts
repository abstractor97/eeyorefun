class TitleSceneUILayer extends BaseUILayer implements IBaseGC {
	public btn_login: eui.Button;
	public btn_guest: eui.Button;
	public btn_register: eui.Button;

	private _allLandSP: egret.Sprite;
	private _landBmd: egret.Bitmap;

	private _stageW: number;
	private _stageH: number;
	public constructor() {
		super();
		this.skinName = StaticData.getSkinName("titleSceneUISkin");
	}
	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}
	protected childrenCreated(): void {
		super.childrenCreated();
		this._btnList = [this.btn_login, this.btn_guest, this.btn_register];
		super.baseInitBtnEvent();
		// this.showSnow();
		// this.changeAllLand();
	}

	private onSpeedEnd(e: egret.Event) {
		console.log(e.type);
	}
	private showSnow() {
		//获取纹理
		var texture = RES.getRes("snow_png");
		//获取配置
		var config = RES.getRes("snow_json");
		//创建 GravityParticleSystem
		var system = new particle.GravityParticleSystem(texture, config);
		//启动粒子库
		system.start();
		//将例子系统添加到舞台
		this.addChild(system);
	}
	public baseGC() {
		super.BaseUILayerGC();
	}

	private changeAllLand(_roleID?: number) {
		this._allLandSP = new egret.Sprite();
		// this.addChild(this._allLandSP);
		this._landBmd = new egret.Bitmap();
		this.addChild(this._landBmd);
		var _roleID: number = 1001 + StaticFun.getRanNum(10);
		for (var n: number = 0; n < 20; n++) {
			for (var m: number = 0; m < 20; m++) {
				var _pos: Point = new Point(n, m);
				var _landViewCell: egret.Bitmap = new egret.Bitmap();
				_landViewCell.texture = RES.getRes(StaticData.getLandImg(_roleID));
				_landViewCell.x = _pos.x * StaticData.LAND_SIZE;
				_landViewCell.y = _pos.y * StaticData.LAND_SIZE;
				this._allLandSP.addChild(_landViewCell);
			}
		}
		// var _sp = StaticFun.getRect(300, 300, 0xFF0000);
		// this._allLandSP.addChild(_sp);
		// var _img: egret.Bitmap=new egret.Bitmap();
		// _img.texture = RES.getRes(StaticData.getLandImg(_roleID));
		// this._allLandSP.addChild(_img);
		var renderTexture: egret.RenderTexture = new egret.RenderTexture();
		renderTexture.drawToTexture(this._allLandSP);
		this._landBmd.texture = renderTexture;
		// this._allLandSP.removeChildren();
	}


}