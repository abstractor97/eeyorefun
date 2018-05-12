class GameStartVO {
	public roleObjList: PlayerRoleObj[] = [];
	public teamRoleList: PlayerRoleObj[];
	public myRoleID: number;
	public playMode: number;
	public teamPlayerCount: number = 1;
	public roomTime: number = 0;
	public mapSize: number = 60;
	public initLandSize: number;
	private _mallList: MallListVO;
	private _myRoleObj: PlayerRoleObj;
	public constructor(playMode: number, myInfoVO: UserBaseInfoObj, mallListVO?: MallListVO, roomTime: number = 0) {
		this.playMode = playMode;
		this._mallList = mallListVO;
		this._myRoleObj = new PlayerRoleObj(StaticData.USER_UID, this._mallList.getRandMallObj(myInfoVO.itemid));
		this._myRoleObj.nickName = myInfoVO.name;
		this._myRoleObj.head = myInfoVO.icon;
		this.myRoleID = this._myRoleObj.roleID;
		if (this.playMode != StaticData.PLAY_MODE_FRIEND) {
			this.roleObjList.push(this._myRoleObj);
		}
		if (StaticData.IS_NEW_GUIDE) {
			this._myRoleObj.initDir = StaticData.DIR_UP;
			this._myRoleObj.initPos = new Point(this.mapSize / 2, this.mapSize / 2);
		}
		if (this.playMode == StaticData.PLAY_MODE_NORMAL) {
			this.initLandSize = StaticData.configVO.normalLandSize;
			var _total: number = StaticData.configVO.normalPlayers
			_total = StaticData.IS_NEW_GUIDE ? _total - 1 : _total;
			// this.mapSize = 20;
			// _total = 1;
			this.initRandRole(_total);
		} else if (this.playMode == StaticData.PLAY_MODE_TEAM) {
			this.initLandSize = StaticData.configVO.teamLandSize;
			this.teamPlayerCount = StaticData.configVO.teamPlayers;
			this.roomTime = StaticData.configVO.teamModeTime;
			this.initRandRole(StaticData.configVO.teamCount);
			// this.initRandRole(2);
		} else if (this.playMode == StaticData.PLAY_MODE_FRIEND) {
			this.initLandSize = StaticData.configVO.normalLandSize;
			this.roomTime = roomTime;
		}
	}
	public baseGC() {
		this.teamRoleList = [];
		this.roleObjList = [];
	}
	public getRoleObjByUID(userID: number): PlayerRoleObj {
		for (var i in this.roleObjList) {
			var _obj = this.roleObjList[i];
			if (_obj.userID == userID) {
				return _obj;
			}
		}
	}
	public addTeamRoleObj(roleObj: PlayerRoleObj) {
		if (!this.teamRoleList) {
			this.teamRoleList = [];
		}
		this.teamRoleList.push(roleObj);
	}
	public getKillAndDeadClew(): string[] {
		var _myKill: number = 0;
		var _teamKill: number = 0;
		var _myDead: number = 0;
		var _teamDead: number = 0;
		for (var i in this.teamRoleList) {
			var _roleObj = this.teamRoleList[i];
			if (_roleObj.roleID == this.myRoleID) {
				_teamKill += _roleObj.killTotalCount;
				_teamDead += _roleObj.deadCount;
			}
			if (_roleObj.userID == this._myRoleObj.userID) {
				_myDead = _roleObj.deadCount;
				_myKill = _roleObj.killTotalCount;
			}
		}
		return [_myKill + "/" + _teamKill, _myDead + "/" + _teamDead];
	}
	public get myRoleObj(): PlayerRoleObj {
		return this._myRoleObj;
	}
	public changeUserInfo(obj: PlayerRoleObj) {
		for (var i in this.roleObjList) {
			var _obj = this.roleObjList[i];
			if (_obj.userID == obj.userID) {
				_obj = obj;
			}
		}
	}
	public initFriendList(list: UserInfoObj[]) {
		for (var i in list) {
			var _userInfoVO = list[i];
			var _obj = new PlayerRoleObj(_userInfoVO.uid, this._mallList.findMallObjByID(_userInfoVO.itemid));
			_obj.nickName = _userInfoVO.name;
			this.roleObjList.push(_obj);
			if (_obj.userID == this.myRoleObj.userID) {
				this.myRoleObj.roleID = _obj.roleID;
			}
		}
	}
	private initRandRole(roleCount: number) {
		while (this.roleObjList.length < roleCount) {
			var roleID = StaticData.configVO.roleRandID;
			if (roleCount - this.roleObjList.length < 2 || StaticFun.getRanNum(5) == 0) {
				roleID = -1;
			}
			var _mallObj = this._mallList.getRandMallObj(roleID);
			// var _mallObj= this._mallList.findMallObjByID(this.myRoleID);
			var _isHava: boolean = false;
			for (var i in this.roleObjList) {
				if (_mallObj.id == this.roleObjList[i].roleID) {
					_isHava = true;
					break;
				}
			}
			// this.roleObjList.push(new PlayerRoleObj(this.roleObjList.length * 1000000 + _mallObj.id, _mallObj));
			if (!_isHava) {
				var _roleObj = new PlayerRoleObj(_mallObj.id, _mallObj);
				this.roleObjList.push(_roleObj);
				if (StaticData.IS_NEW_GUIDE) {
					var _len: number = this.roleObjList.length;
					if (_len < 4) {
						_roleObj.initDir = _len == 2 ? StaticData.DIR_UP : StaticData.DIR_RIGHT;;
						_roleObj.initPos = _len == 2 ? new Point(-6 + this.mapSize / 2, -1 + this.mapSize / 2) : new Point(6 + this.mapSize / 2, 3 + this.mapSize / 2);;;
					} else {
						var _initX: number = 3 + StaticFun.getRanNum(this.mapSize - 6);
						var _initY: number = 3 + StaticFun.getRanNum(10);
						if (StaticFun.getRanNum(2) == 0) {
							_initY = this.mapSize - 3 - StaticFun.getRanNum(10);
						}
						_roleObj.initPos = new Point(_initX, _initY);
					}
				}
			}
		}
	}
}
class PlayerRoleObj {
	public roleID: number;
	public userID: number;
	public color: number;
	public head: number;
	public sex: number;
	public power: number;//最大能量系数
	public powerReply: number;//能力回复速度系数
	public revive: number;//可复活次数
	public nickName: string;
	public ratio: number = 0;
	public initDir: string;
	public initPos: Point;
	public killCurrCount: number = 0;//当前击杀数量,死亡后清零
	public killTotalCount: number = 0;//所有击杀总数量
	public deadCount: number = 0;//死亡数量
	public landTotalCount: number = 0;//总占地数
	public constructor(userID: number, mallObj?: MallGoodObj) {
		this.userID = userID;
		this.sex = StaticFun.getRanNum(2) + 1;
		if (mallObj) {
			this.power = mallObj.power;
			this.powerReply = mallObj.powerReply;
			this.revive = mallObj.revive;
			this.roleID = mallObj.id;
			this.color = mallObj.color;
			this.nickName = mallObj.title;
		}
	}
}