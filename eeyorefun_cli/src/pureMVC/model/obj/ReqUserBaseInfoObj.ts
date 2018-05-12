class ReqUserBaseInfoObj extends ReqBaseObj{
	public uid:number;//用户id
	public sid:string;//Sessionid会话id
	public flag:number=256;//获取表数据标志（暂时取值：256）
	public login:number;//登入标志（1：登录 0：拉取数据）
	
	public constructor() {
		super();
		this.cmd=10002;
	}
}