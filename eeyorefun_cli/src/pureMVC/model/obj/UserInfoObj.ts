class UserInfoObj extends BaseVO {
	public uid: number;//用户id
	public icon: number;//用户头像
	public sex: number;//用户性别 1男，2女
	public name: string;//用户昵称
	public coin: number;//用户金币
	public diamond: number;//用户钻石
	public vip: number;//vip等级
	public star: number;////星的数量（计算段位数）
	public sign: number;//0:未签到 1：已经签到
	public itemid: number;//正在使用角色id
	public uname: string;//今日最佳无尽 用户名称
	public uratio: number;// 10000,//今日最佳无尽 占领土地
	public gname: string;//"Guest_100002",//今日最佳团队 团队名称
	public gratio: number;// 10000,//今日最佳团队 团队占领土地
	public lrank: Object[];
	public isBase64: boolean = false;
	public constructor(data: Object) {
		super(data);
		if (!data["isBase64"] && this.name) {
			this.isBase64=true;
			this.name = Base64.getInstance().decode(this.name);
		}
	}
}