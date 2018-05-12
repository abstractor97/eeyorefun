/**
 *
 * @author 
 *
 */
class AnimationManager {
    private static _instance: AnimationManager;
    private factory: dragonBones.EgretFactory = new dragonBones.EgretFactory();
    public constructor() {
        egret.Ticker.getInstance().register(function (advancedTime) {
            dragonBones.WorldClock.clock.advanceTime(advancedTime / 1000);
        }, this);
    }
    public static getInstance(): AnimationManager {
        if (this._instance == null) {
            this._instance = new AnimationManager();
        }
        return this._instance;
    }
    public delResource(name: string) {
        var _dragonBonesName: string = StaticFun.getAnimationResList(name)[0];
        this.factory.removeSkeletonData(_dragonBonesName);
        this.factory.removeTextureAtlas(_dragonBonesName);
    }
    public addResourceList(name: string): void {
        var list: string[] = StaticFun.getAnimationResList(name);
        this.addResource(list[0], list[1], list[2]);
    }

    public addResource(skeletonName: string, textureDataName: string, textureName: string): void {
        var _dragonBonesName: string = skeletonName;
        var skeletonData = RES.getRes(skeletonName);
        var textureData = RES.getRes(textureDataName);
        var texture = RES.getRes(textureName);
        this.factory.addSkeletonData(dragonBones.DataParser.parseDragonBonesData(skeletonData), _dragonBonesName);
        this.factory.addTextureAtlas(new dragonBones.EgretTextureAtlas(texture, textureData), _dragonBonesName);
    }

    public getArmature(armName: string, dragName?: string): dragonBones.Armature {
        var _dragName: string = dragName ? dragName : armName;
        var _dragonBonesName: string = StaticFun.getAnimationResList(_dragName)[0];
        var armature: dragonBones.Armature = this.factory.buildArmature(armName, _dragonBonesName);
        dragonBones.WorldClock.clock.add(armature);
        return armature;
    }
    public delArmature(armature: dragonBones.Armature) {
        if(!armature){
            return;
        }
        dragonBones.WorldClock.clock.remove(armature);
    }
    public getArmatureDisplay(armature: dragonBones.Armature): egret.DisplayObjectContainer {
        var _display: egret.DisplayObjectContainer = armature.getDisplay();
        var _onRemove: Function = function (e: Event): void {
            dragonBones.WorldClock.clock.remove(armature);
            _display.removeEventListener(egret.Event.REMOVED_FROM_STAGE, _onRemove, this);
        }
        _display.addEventListener(egret.Event.REMOVED_FROM_STAGE, _onRemove, this);
        return _display;
    }

}
