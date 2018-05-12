class TaskConfigVO {
	public listData: TaskConfigObj[] = [];
	public constructor(list: Object[]) {
		for (var i in list) {
			this.listData.push(new TaskConfigObj(list[i]));
		}
	}
	public findConfigByID(id: number): TaskConfigObj {
		for (var i in this.listData) {
			var _obj = this.listData[i];
			if (_obj.id == id) {
				return _obj;
			}
		}
	}
}
class TaskConfigObj extends BaseVO {
	public id: number;
	public title: string;
	public clew: string;
	public type: number;
	public event: number;
	public val: number;
	public award: string;
	public awardVO:AwardVO;
	public constructor(obj: Object) {
		super(obj);
		this.awardVO=new AwardVO(this.award);
	}
}
