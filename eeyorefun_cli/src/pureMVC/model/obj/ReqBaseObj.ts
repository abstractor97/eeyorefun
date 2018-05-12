class ReqBaseObj {
	public msgid:number=1002;
	public cmd:number;
	public seq:string;//序列号
	public uid:number;//玩家uid
	public ver:string="1.0";//客户端版本号
	public constructor() {
		this.uid=StaticData.USER_UID;
	}
}