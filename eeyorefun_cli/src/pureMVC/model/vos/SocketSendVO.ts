class SocketSendVO {
	public isLog:boolean=true;
	private _sendStr : string;
	public loadingType:string;
	public loadingTitle:string;
	public sendID:number;
	public constructor(obj:Object,callBack?:Function,_loadingType?:string,_loadingTitle?:string) {
		this.sendID=RequestManager.getInstance().addCallBack(callBack);
		obj["seq"]=this.sendID;
		this._sendStr=JSON.stringify(obj);
		this.loadingType=_loadingType;
		this.loadingTitle=_loadingTitle;
	}
	public get sendStr() : string {
		return this._sendStr;
	}
}