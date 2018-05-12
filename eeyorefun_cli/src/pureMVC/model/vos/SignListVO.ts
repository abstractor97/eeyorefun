class SignListVO extends BaseVO {
	public signList: SignObj[];
	public constructor(list: Object[]) {
		super(list);
		this.signList = [];
		for (var i in list) {
			this.signList.push(new SignObj(list[i]));
		}
	}
}
class SignObj extends BaseVO {
	public day: number;
	public award: string;
	public title: string;
	public awardObj: AwardVO;
	public constructor(data: Object) {
		super(data);
		this.awardObj = new AwardVO(this.award);
	}
}