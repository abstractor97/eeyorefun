class UserBaseInfoObj extends UserInfoObj {
	public anum: number;//关注数
	public fnum: number;//粉丝数
	public isopen: number;//是否设置玩家信息 （0：不需要 1：需要）登入界面已经加了
	public levelObj: LevelCellObj;
	public shnum:number;//当天分享次数
	public shreward:number;//累计获得奖励
	public point:number;//收集点数
	public oneyuan:number;//是否购买1元礼包
	public ztag:number;//是否发送到桌面
	public hand:number;//操作习惯,0:左手,1:右手
	public fpay:number;//是否已经完成首充,0:没有,1:有
	public hpay:number;//是否有充值翻倍活动,0:没有,1:有
	public isrelive:number;//今天是否已经分享复活过,0:没有,1:有
	public leftdays: number;//赛季结算剩余天数
	public oldstar: number;//赛季结算上一赛季星星数
	public adddiamond: number;//赛季结算增加的钻石数

	public constructor(data: Object) {
		super(data);
	}
}