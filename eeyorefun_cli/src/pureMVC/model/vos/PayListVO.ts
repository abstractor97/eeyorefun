class PayListVO {
	public payList: payObj[];
	public constructor(data: Object) {
		this.payList = [];
		for (var i in data) {
			var _obj = new payObj(data[i]);
			this.payList.push(_obj);
		}
	}
	public getPayList(zoneid: number, type: number = 1): payObj[] {
		var _list: payObj[] = [];
		for (var i in this.payList) {
			var _obj = this.payList[i];
			if (_obj.zoneid == zoneid && _obj.type == type) {
				_list.push(_obj);
			}
		}
		return _list;
	}
}
class payObj extends BaseVO {
	public id: number;
	public itemID: number;
	public title: string;
	public diamond: number;//钻石数量
	public rmb: number;//人民币
	public price: number;//价格(星币)
	public zoneid: number;//安卓填1，iOS填2
	public award: string;//奖励
	public type: number;//类型1:钻石,2:礼包
	public constructor(data: Object) {
		super(data);
	}
}