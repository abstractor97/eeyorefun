class HttpSendVO  {
	public loadingType:string;
	public loadingTitle:string;
	public sendURL:string;
	public dataObj:any;
	public sendType:string;
	public callBack:Function;
	public constructor(url:string,_sendType:string,data:any,_callBack?:Function,_loadingType?:string,_loadingTitle?:string) {
		this.sendURL=url;
		this.dataObj=data;
		this.sendType=_sendType;
		this.loadingType=_loadingType;
		this.loadingTitle=_loadingTitle;
		this.callBack=_callBack;
	}
	public gc(){
		this.callBack=null;
		this.dataObj=null;
	}
	public get sendVOStr():string{
		var _str:string="sendURL:"+this.sendURL+",sendType:"+this.sendType+",sendData:"+this.sendStr;
		return _str;
	}
	public get sendStr() : string {
		var _str:string="";
		if(this.dataObj as Object ){
			_str=JSON.stringify(this.dataObj);
		}else if(this.dataObj as string){
			_str=this.dataObj;
		}
		return _str;
	}
}