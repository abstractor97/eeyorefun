class AudioManager {
	private static _instance: AudioManager;
	private _isPlayEffec: boolean = true;
	private _isPlayMain: boolean = true;
	private _mainSoundChannel: egret.SoundChannel;
	public constructor() {
		if (AudioManager._instance != null) {
			Error("请使用getInstance()获取");
		}
	}
	public static getInstance(): AudioManager {
		if (AudioManager._instance == null) {
			AudioManager._instance = new AudioManager();
		}
		return AudioManager._instance;
	}
	public playEffecAudio(sd: string) {
		if (sd && this._isPlayEffec) {
			var sound: egret.Sound = RES.getRes(sd);
			if (sound) {
				sound.play(0, 1);
			}
		}
	}
	public playMainSound(sd: string, times: number = 0) {
		this.stopMainSound();
		if (sd) {
			var sound: egret.Sound = RES.getRes(sd);
			this._mainSoundChannel = sound.play(0, times);
			if (!this._isPlayMain) {
				this._mainSoundChannel.volume = 0;
			}
		}
	}

	public stopMainSound() {
		if (this._mainSoundChannel) {
			this._mainSoundChannel.stop();
		}
	}
	public setPlayEffec(isTrue: boolean) {
		this._isPlayEffec = isTrue;
	}
	public isPlayMain(): boolean {
		return this._isPlayMain;
	}
	public isPlayEffec(): boolean {
		return this._isPlayEffec;
	}
	public setPlayMain(isTrue: boolean) {
		this._isPlayMain = isTrue;
		if (this._mainSoundChannel) {
			if (this._isPlayMain) {
				this._mainSoundChannel.volume = 1;
			} else {
				this._mainSoundChannel.volume = 0;
			}
		}
	}
}