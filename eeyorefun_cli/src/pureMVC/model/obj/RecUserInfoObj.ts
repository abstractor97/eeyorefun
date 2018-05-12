class RecUserInfoObj extends BaseVO {
	public uid: number;//用户id
	public icon: number;//用户头像
	public sex: number;//用户性别 1男，2女
	public name: string;//用户昵称
	public coin: number;//用户金币
	public diamond: number;//用户钻石
	public star: number;////星的数量（计算段位数）
	public itemid: number;
	public anum: number;//关注数
	public fnum: number;//粉丝数
	public mvp: number;//,//mvp
	public allratio: number;//,//总占领
	public alltimes: number;//,//总场次
	public wujin: number;//,//无尽
	public friend: number;//,//好友
	public group: number;//,//团战
	public allkill: number;//,//总击杀
	public onekill: number;//,//单场击杀
	public conkill: number;////单场连杀
	public isfan:number;//0:没有关注 1：已经关注	
	public list:number[];//已拥有宠物列表

	public constructor(obj: Object) {
		super(obj);
		if (this.name) {
			this.name = Base64.getInstance().decode(this.name);
		}
	}
}