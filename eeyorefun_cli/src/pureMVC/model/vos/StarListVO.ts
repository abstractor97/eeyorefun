class StarListVO {
	public listVO: StarCellObj[] = [];
	public constructor(list: Object[]) {
		for (var i in list) {
			this.listVO.push(new StarCellObj(list[i]));
		}
	}
	public getStarDataByNum(num: number): StarCellObj {
		for (var i in this.listVO) {
			var _obj = this.listVO[i];
			if (num == _obj.star) {
				return _obj;
			}
		}
		return this.listVO[this.listVO.length-1];
	}
}
class StarCellObj extends BaseVO {
	public star: number;
	public award: string;
	public id: number;
	public awardVO: AwardVO;
	public constructor(obj?: Object) {
		super(obj);
		this.awardVO = new AwardVO(this.award);
	}
}