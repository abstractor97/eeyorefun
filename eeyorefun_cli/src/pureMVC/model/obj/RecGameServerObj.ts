class RecGameServerObj extends BaseVO{
	public server:string;//":"192.168.1.48",//ip
	public ws:string;//ws地址
	public wss:string;//wss地址
	public uid:number;//1001,//uid（0：表示未注册 其他：已经注册）
	public sid:string;//"fsdfsfdsssss",   //sessionid
	public constructor(data:Object) {
		super(data);
		if(StaticData.IS_DEBUG){
			this.server=this.ws;
		}else{
			this.server=this.wss;
		}
	}
}