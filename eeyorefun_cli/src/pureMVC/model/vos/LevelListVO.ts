class LevelListVO {
	public listVO: LevelCellObj[];
	public constructor(list: Object[]) {
		this.listVO = [];
		for (var i in list) {
			var _lastObj = this.listVO[this.listVO.length - 1];
			var _newObj: LevelCellObj = new LevelCellObj(list[i]);
			if (_lastObj) {
				// _newObj.startStar = _lastObj.star + 1;
				_lastObj.endStar = _newObj.star - 1;
			}
			this.listVO.push(_newObj);
		}
	}

	public getLevelDataByStar(star: number): LevelCellObj {
		star = star == 0 ? 1 : star;
		for (var i: number = 0; i < this.listVO.length; i++) {
			var _curObj = this.listVO[i];
			if (_curObj.star <= star && star <= _curObj.endStar) {
				return _curObj;
			}
		}
		return this.listVO[this.listVO.length - 1];
	}
	public initAward(starVO: StarListVO) {
		for (var i in this.listVO) {
			var _obj = this.listVO[i];
			var _endNum: number = 0;
			_obj.awardStr = starVO.getStarDataByNum(_obj.star).awardVO.num + "-" + starVO.getStarDataByNum(_obj.endStar).awardVO.num;
		}
	}
}
class LevelCellObj extends BaseVO {
	public title: string;
	public endStar: number = 10000;
	public star: number;
	public id: number;
	public num: string;
	public icon: number;
	public awardStr: string;
	public constructor(obj: Object) {
		super(obj);
	}
}