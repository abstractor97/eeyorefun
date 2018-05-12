class PlayerResultVO extends ReqBaseObj {

	public otime: number = 0;//游戏时间(秒)
	
	//上报结果参数
	public knum: number;//	连击杀数量
	public allkill: number;//单场总击杀数量
	public oknum: number;//	被击杀数量
	public ratio: number;//占地百分百
	public score: number;
	public rank: number;// 团队间排名
	public orank: number;// 自己在团队中排名
	public cratio: number;//团队贡献（整数）
	public fuid: number;//对方uid（0：表示撞墙 其他：被他人击杀）

	public killDes: string;//死亡描述
	public deadCount: number;//被杀次数
	public landTotalCount: number = 0;//总占地数
	public constructor() {
		super();
		// this.rank=StaticFun.getRanNum(2)+1;
		// this.cratio=StaticFun.getRanNum(2000)+1000;
		// this.knum=StaticFun.getRanNum(10);
		// this.oknum=StaticFun.getRanNum(10);
		// this.score=StaticFun.getRanNum(100)+10;
	}
}