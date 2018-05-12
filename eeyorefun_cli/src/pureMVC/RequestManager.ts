class RequestManager {
	private static _instance:RequestManager;
	private _funList:Object=new Object();
	private _countNum:number=0;
	public constructor() {
		if(RequestManager._instance!=null){
			return;
		}
	}
	public static getInstance():RequestManager{
		if(RequestManager._instance==null){
			RequestManager._instance=new RequestManager();
		}
		return RequestManager._instance;
	}
	public addCallBack(fun:Function):number{
		var _num:number=this.getCallBackID();
		this._funList["fun_"+_num]=fun;
		return _num;
	}
	public getCallBack(id:number):Function{
		return this._funList["fun_"+id];
	}
	public delCallBack(id:number){
		this._funList["fun_"+id]=null;
		delete this._funList["fun_"+id];
	}
	public getCallBackID():number{ 
		return ++this._countNum;
	}
	
}