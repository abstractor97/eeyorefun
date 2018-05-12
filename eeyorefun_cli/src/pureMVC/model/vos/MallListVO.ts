class MallListVO {
	public allList: MallGoodObj[];
	public mallShowList: MallGoodObj[];
	public randList: MallGoodObj[];

	public constructor(data: Object) {
		this.allList = [];
		this.mallShowList = [];
		this.randList = [];
		var _randFirstObj: MallGoodObj;
		var _randIDList: number[] = [];
		for (var i in data) {
			var _obj = new MallGoodObj(data[i]);
			this.allList.push(_obj);
			if (_obj.id <= StaticData.configVO.roleRandID) {
				if (_obj.isShow == 1) {
					this.mallShowList.push(_obj);
				}
			}
			if (_obj.id == StaticData.configVO.roleRandID) {
				_randFirstObj = _obj;
				this.randList.unshift(_obj);
				_randIDList.unshift(_obj.id);
			} else if (_obj.id > StaticData.configVO.roleRandID) {
				this.randList.push(_obj);
				_randIDList.push(_obj.id);
			}
		}
		_randFirstObj.iconList = _randIDList;
		this.mallShowList.sort(function (a: MallGoodObj, b: MallGoodObj): number {
			if (a.sort > b.sort) {
				return -1;
			} else if (a.sort < b.sort) {
				return 1;
			} else {
				return 0;
			}
		});
	}
	public getMallListByShowType(type: number): MallGoodObj[] {
		var _list: MallGoodObj[] = [];
		for (var i in this.mallShowList) {
			var _obj = this.mallShowList[i];
			if (type == 1) {
				if (_obj.showType == 1 || _obj.showType == 0) {
					_list.push(_obj);
				}
			} else if (_obj.showType == type) {
				_list.push(_obj);
			}
		}
		return _list;
	}

	public getRandMallObj(roleID: number = -1): MallGoodObj {
		if (roleID == -1) {
			return StaticFun.getRanList(this.mallShowList)[0];
		} else if (roleID < StaticData.configVO.roleRandID) {
			return this.findMallObjByID(roleID);
		} else {
			return StaticFun.getRanList(this.randList)[0];
		}
	}

	public findMallObjByID(id: number): MallGoodObj {
		for (var i in this.allList) {
			if (id == this.allList[i].id) {
				return this.allList[i];
			}
		}
	}
	public setInitMallList(mallOV: RecMallListObj, roleID: number) {
		var _myHaveList: MallGoodObj[] = [];
		var _myUnlockList: MallGoodObj[] = [];
		var _myOtherList: MallGoodObj[] = [];
		for (var i in this.mallShowList) {
			var _obj = this.mallShowList[i];
			if (roleID == _obj.id) {
				_obj.isUse = true;
				if (_obj.id >= StaticData.configVO.roleRandID) {
					this.randList[0].isUse = true;
				}
			} else {
				_obj.isUse = false;
			}
			_obj.isHave = mallOV.checkHave(_obj.id);
			_obj.isUnLock = mallOV.checkUnlock(_obj.id);
			if (_obj.isHave) {
				_myHaveList.push(_obj);
			} else if (_obj.isUnLock) {
				_myUnlockList.push(_obj)
			} else {
				_myOtherList.push(_obj);

			}
		}
		this.mallShowList = [];
		this.mallShowList = this.mallShowList.concat(_myHaveList);
		this.mallShowList = this.mallShowList.concat(_myUnlockList);
		this.mallShowList = this.mallShowList.concat(_myOtherList);
	}
}
class MallGoodObj extends BaseVO {
	public id: number;
	public title: string;
	public glod: number;
	public diamond: number;
	public diamond_pri: number;//原始价格
	public coin_pri: number;//原始价格
	public color: number;
	public reachClew: string;
	public reach: number;
	public val: number;
	public petID: number;//对应的QQ宠物id
	public revive: number;//无尽是否可免分享复活
	public power: number;//能量恢复速度
	public powerReply: number;//能量恢复速度
	public desc: string;//宠物对白
	public sort: number;
	public isHave: boolean;
	public isUse: boolean;
	public isUnLock: boolean;
	public isShow: number;//是否在商城显示0:隐藏,1:显示
	public iconList: number[];
	public showType: number;//显示分类
	public disc: number;//折扣
	public constructor(data: Object) {
		super(data);
		if (this.disc < 100) {
			this.diamond_pri = Math.ceil(this.diamond / (this.disc / 100));
			this.coin_pri = Math.ceil(this.glod / (this.disc / 100));
		}
	}
}

