class SocketBDVO {
	public sendID:number;
	public dataStr:string;
	private _str:string;
	public constructor(_sendID:number=0,_dataStr:string="") {
		this.sendID=_sendID;
		this.dataStr=_dataStr;
	}
	public initData(str:string){
		if(str==""||str==undefined){
			return;
		}
		var data:Object=JSON.parse(str);
		for (var key in data) {
			this[key] = data[key];
		}
	}
	public toString():string{
		var _obj:Object=new Object();
		_obj["sendID"]=this.sendID;
		_obj["dataStr"]=this.dataStr;
		this._str=JSON.stringify(_obj);
		return this._str;
	}
}