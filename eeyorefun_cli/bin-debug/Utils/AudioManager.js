var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var AudioManager = (function () {
    function AudioManager() {
        this._isPlayEffec = true;
        this._isPlayMain = true;
        if (AudioManager._instance != null) {
            Error("请使用getInstance()获取");
        }
    }
    AudioManager.getInstance = function () {
        if (AudioManager._instance == null) {
            AudioManager._instance = new AudioManager();
        }
        return AudioManager._instance;
    };
    AudioManager.prototype.playEffecAudio = function (sd) {
        if (sd && this._isPlayEffec) {
            var sound = RES.getRes(sd);
            if (sound) {
                sound.play(0, 1);
            }
        }
    };
    AudioManager.prototype.playMainSound = function (sd, times) {
        if (times === void 0) { times = 0; }
        this.stopMainSound();
        if (sd) {
            var sound = RES.getRes(sd);
            this._mainSoundChannel = sound.play(0, times);
            if (!this._isPlayMain) {
                this._mainSoundChannel.volume = 0;
            }
        }
    };
    AudioManager.prototype.stopMainSound = function () {
        if (this._mainSoundChannel) {
            this._mainSoundChannel.stop();
        }
    };
    AudioManager.prototype.setPlayEffec = function (isTrue) {
        this._isPlayEffec = isTrue;
    };
    AudioManager.prototype.isPlayMain = function () {
        return this._isPlayMain;
    };
    AudioManager.prototype.isPlayEffec = function () {
        return this._isPlayEffec;
    };
    AudioManager.prototype.setPlayMain = function (isTrue) {
        this._isPlayMain = isTrue;
        if (this._mainSoundChannel) {
            if (this._isPlayMain) {
                this._mainSoundChannel.volume = 1;
            }
            else {
                this._mainSoundChannel.volume = 0;
            }
        }
    };
    return AudioManager;
}());
__reflect(AudioManager.prototype, "AudioManager");
//# sourceMappingURL=AudioManager.js.map