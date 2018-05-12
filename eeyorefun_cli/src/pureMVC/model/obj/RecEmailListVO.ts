class RecEmailListVO extends BaseVO {
	public mlist: Object[];
	public list: EmailListObj[];
	public constructor(data: Object) {
		super(data);
		// this.mlist=[{},{},{},{},{},{},{},{},{}]
		this.list = [];
		for (var i in this.mlist) {
			this.list.push(new EmailListObj(this.mlist[i]));
		}
	}
	public delEmailByID(id: number) {
		for (var i: number = 0; i < this.list.length; i++) {
			var _obj: EmailListObj = this.list[i];
			if (_obj.id == id) {
				this.list.splice(i, 1);
				break;
			}
		}
	}
}
class EmailListObj extends BaseVO {
	public id: number;//id
	public title: string;//标题
	public content: string;//内容
	public type: number = 0;//邮件类型(0：邮件 1：系统消息)
	public fuid: number;//uid	
	public fname: string;//发送者姓名
	public stime: number;//发送时间
	public status: number;//状态（0:未读 1:已读)	
	public ilist: Object[];//物品
	public goodList: EmailGoodObj[];
	public constructor(data: Object) {
		super(data);
		this.goodList = [];
		for (var i in this.ilist) {
			this.goodList.push(new EmailGoodObj(this.ilist[i]));
		}
		if (this.fname) {
			this.fname = Base64.getInstance().decode(this.fname);
		}
		// this.initData();
	}
	private initData() {
		this.id = 1000;
		this.title = "test_" + StaticFun.getRanNum(1000);
		this.content = "content_" + StaticFun.getRanNum(1000);
		this.type = StaticFun.getRanNum(2);
		this.fuid = StaticFun.getRanNum(1000);
		this.fname = "send_" + StaticFun.getRanNum(1000);
		this.stime =  StaticFun.getRanNum(1000);
		this.status = StaticFun.getRanNum(2);
		this.goodList = [];
		this.goodList.push(new EmailGoodObj({ "id": 1, "num": 100 }));
	}
}
class EmailGoodObj extends BaseVO {
	public id: number;
	public num: number;
	public constructor(data: Object) {
		super(data);
	}
}