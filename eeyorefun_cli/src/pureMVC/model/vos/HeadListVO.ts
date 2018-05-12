class HeadListVO extends BaseVO {
	public dataList: HeadObj[] = [];
	public constructor(list: Object[]) {
		super();
		for (var i in list) {
			this.dataList.push(new HeadObj(list[i]));
		}
	}
	public getHeadObjByID(id: number = -1): HeadObj {
		if (id == -1) {
			return StaticFun.getRanList(this.dataList, 1)[0];
		}
		for (var i in this.dataList) {
			var _obj = this.dataList[i];
			if (_obj.id == id) {
				return _obj;
			}
		}
	}
	public getIndexByID(id: number): number {
		for (var i: number = 0; i < this.dataList.length; i++) {
			if (id == this.dataList[i].id) {
				return i;
			}
		}
	}
}
class HeadObj extends BaseVO {
	public id: number;
	public name: string;
	public sex: number;
	public constructor(obj: Object) {
		super(obj);
	}
}