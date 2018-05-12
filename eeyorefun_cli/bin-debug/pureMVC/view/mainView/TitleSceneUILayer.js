var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var TitleSceneUILayer = (function (_super) {
    __extends(TitleSceneUILayer, _super);
    function TitleSceneUILayer() {
        var _this = _super.call(this) || this;
        _this.skinName = StaticData.getSkinName("titleSceneUISkin");
        return _this;
    }
    TitleSceneUILayer.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    TitleSceneUILayer.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this._btnList = [this.btn_login, this.btn_guest, this.btn_register];
        _super.prototype.baseInitBtnEvent.call(this);
        // this.showSnow();
        // this.changeAllLand();
    };
    TitleSceneUILayer.prototype.onSpeedEnd = function (e) {
        console.log(e.type);
    };
    TitleSceneUILayer.prototype.showSnow = function () {
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
    };
    TitleSceneUILayer.prototype.baseGC = function () {
        _super.prototype.BaseUILayerGC.call(this);
    };
    TitleSceneUILayer.prototype.changeAllLand = function (_roleID) {
        this._allLandSP = new egret.Sprite();
        // this.addChild(this._allLandSP);
        this._landBmd = new egret.Bitmap();
        this.addChild(this._landBmd);
        var _roleID = 1001 + StaticFun.getRanNum(10);
        for (var n = 0; n < 20; n++) {
            for (var m = 0; m < 20; m++) {
                var _pos = new Point(n, m);
                var _landViewCell = new egret.Bitmap();
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
        var renderTexture = new egret.RenderTexture();
        renderTexture.drawToTexture(this._allLandSP);
        this._landBmd.texture = renderTexture;
        // this._allLandSP.removeChildren();
    };
    return TitleSceneUILayer;
}(BaseUILayer));
__reflect(TitleSceneUILayer.prototype, "TitleSceneUILayer", ["IBaseGC"]);
//# sourceMappingURL=TitleSceneUILayer.js.map