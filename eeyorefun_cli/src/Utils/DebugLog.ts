class DebugLog {
	private static _instance: DebugLog;
	private _debugStr: string = "";
	public constructor() {

	}
	public static getInstance(): DebugLog {
		if (DebugLog._instance == null) {
			DebugLog._instance = new DebugLog();
		}
		return DebugLog._instance;
	}
	public getLogStr(): string {
		return this._debugStr;
	}
	public showLog(message?: any, ...optionalParams: any[]) {
		if (!StaticData.IS_LOG) {
			return;
		}
		var _str: string = "\n" + message;
		this._debugStr += _str;
		console.log(message, ...optionalParams);
	}
}