var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 *
 * @author
 *
 */
var AnimationManager = (function () {
    function AnimationManager() {
        this.factory = new dragonBones.EgretFactory();
        egret.Ticker.getInstance().register(function (advancedTime) {
            dragonBones.WorldClock.clock.advanceTime(advancedTime / 1000);
        }, this);
    }
    AnimationManager.getInstance = function () {
        if (this._instance == null) {
            this._instance = new AnimationManager();
        }
        return this._instance;
    };
    AnimationManager.prototype.delResource = function (name) {
        var _dragonBonesName = StaticFun.getAnimationResList(name)[0];
        this.factory.removeSkeletonData(_dragonBonesName);
        this.factory.removeTextureAtlas(_dragonBonesName);
    };
    AnimationManager.prototype.addResourceList = function (name) {
        var list = StaticFun.getAnimationResList(name);
        this.addResource(list[0], list[1], list[2]);
    };
    AnimationManager.prototype.addResource = function (skeletonName, textureDataName, textureName) {
        var _dragonBonesName = skeletonName;
        var skeletonData = RES.getRes(skeletonName);
        var textureData = RES.getRes(textureDataName);
        var texture = RES.getRes(textureName);
        this.factory.addSkeletonData(dragonBones.DataParser.parseDragonBonesData(skeletonData), _dragonBonesName);
        this.factory.addTextureAtlas(new dragonBones.EgretTextureAtlas(texture, textureData), _dragonBonesName);
    };
    AnimationManager.prototype.getArmature = function (armName, dragName) {
        var _dragName = dragName ? dragName : armName;
        var _dragonBonesName = StaticFun.getAnimationResList(_dragName)[0];
        var armature = this.factory.buildArmature(armName, _dragonBonesName);
        dragonBones.WorldClock.clock.add(armature);
        return armature;
    };
    AnimationManager.prototype.delArmature = function (armature) {
        if (!armature) {
            return;
        }
        dragonBones.WorldClock.clock.remove(armature);
    };
    AnimationManager.prototype.getArmatureDisplay = function (armature) {
        var _display = armature.getDisplay();
        var _onRemove = function (e) {
            dragonBones.WorldClock.clock.remove(armature);
            _display.removeEventListener(egret.Event.REMOVED_FROM_STAGE, _onRemove, this);
        };
        _display.addEventListener(egret.Event.REMOVED_FROM_STAGE, _onRemove, this);
        return _display;
    };
    return AnimationManager;
}());
__reflect(AnimationManager.prototype, "AnimationManager");
//# sourceMappingURL=AnimationManager.js.map