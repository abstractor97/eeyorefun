var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var GameStartVO = (function () {
    function GameStartVO(playMode, myInfoVO, mallListVO, roomTime) {
        if (roomTime === void 0) { roomTime = 0; }
        this.roleObjList = [];
        this.teamPlayerCount = 1;
        this.roomTime = 0;
        this.mapSize = 60;
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
            var _total = StaticData.configVO.normalPlayers;
            _total = StaticData.IS_NEW_GUIDE ? _total - 1 : _total;
            // this.mapSize = 20;
            // _total = 1;
            this.initRandRole(_total);
        }
        else if (this.playMode == StaticData.PLAY_MODE_TEAM) {
            this.initLandSize = StaticData.configVO.teamLandSize;
            this.teamPlayerCount = StaticData.configVO.teamPlayers;
            this.roomTime = StaticData.configVO.teamModeTime;
            this.initRandRole(StaticData.configVO.teamCount);
            // this.initRandRole(2);
        }
        else if (this.playMode == StaticData.PLAY_MODE_FRIEND) {
            this.initLandSize = StaticData.configVO.normalLandSize;
            this.roomTime = roomTime;
        }
    }
    GameStartVO.prototype.baseGC = function () {
        this.teamRoleList = [];
        this.roleObjList = [];
    };
    GameStartVO.prototype.getRoleObjByUID = function (userID) {
        for (var i in this.roleObjList) {
            var _obj = this.roleObjList[i];
            if (_obj.userID == userID) {
                return _obj;
            }
        }
    };
    GameStartVO.prototype.addTeamRoleObj = function (roleObj) {
        if (!this.teamRoleList) {
            this.teamRoleList = [];
        }
        this.teamRoleList.push(roleObj);
    };
    GameStartVO.prototype.getKillAndDeadClew = function () {
        var _myKill = 0;
        var _teamKill = 0;
        var _myDead = 0;
        var _teamDead = 0;
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
    };
    Object.defineProperty(GameStartVO.prototype, "myRoleObj", {
        get: function () {
            return this._myRoleObj;
        },
        enumerable: true,
        configurable: true
    });
    GameStartVO.prototype.changeUserInfo = function (obj) {
        for (var i in this.roleObjList) {
            var _obj = this.roleObjList[i];
            if (_obj.userID == obj.userID) {
                _obj = obj;
            }
        }
    };
    GameStartVO.prototype.initFriendList = function (list) {
        for (var i in list) {
            var _userInfoVO = list[i];
            var _obj = new PlayerRoleObj(_userInfoVO.uid, this._mallList.findMallObjByID(_userInfoVO.itemid));
            _obj.nickName = _userInfoVO.name;
            this.roleObjList.push(_obj);
            if (_obj.userID == this.myRoleObj.userID) {
                this.myRoleObj.roleID = _obj.roleID;
            }
        }
    };
    GameStartVO.prototype.initRandRole = function (roleCount) {
        while (this.roleObjList.length < roleCount) {
            var roleID = StaticData.configVO.roleRandID;
            if (roleCount - this.roleObjList.length < 2 || StaticFun.getRanNum(5) == 0) {
                roleID = -1;
            }
            var _mallObj = this._mallList.getRandMallObj(roleID);
            // var _mallObj= this._mallList.findMallObjByID(this.myRoleID);
            var _isHava = false;
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
                    var _len = this.roleObjList.length;
                    if (_len < 4) {
                        _roleObj.initDir = _len == 2 ? StaticData.DIR_UP : StaticData.DIR_RIGHT;
                        ;
                        _roleObj.initPos = _len == 2 ? new Point(-6 + this.mapSize / 2, -1 + this.mapSize / 2) : new Point(6 + this.mapSize / 2, 3 + this.mapSize / 2);
                        ;
                        ;
                    }
                    else {
                        var _initX = 3 + StaticFun.getRanNum(this.mapSize - 6);
                        var _initY = 3 + StaticFun.getRanNum(10);
                        if (StaticFun.getRanNum(2) == 0) {
                            _initY = this.mapSize - 3 - StaticFun.getRanNum(10);
                        }
                        _roleObj.initPos = new Point(_initX, _initY);
                    }
                }
            }
        }
    };
    return GameStartVO;
}());
__reflect(GameStartVO.prototype, "GameStartVO");
var PlayerRoleObj = (function () {
    function PlayerRoleObj(userID, mallObj) {
        this.ratio = 0;
        this.killCurrCount = 0; //当前击杀数量,死亡后清零
        this.killTotalCount = 0; //所有击杀总数量
        this.deadCount = 0; //死亡数量
        this.landTotalCount = 0; //总占地数
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
    return PlayerRoleObj;
}());
__reflect(PlayerRoleObj.prototype, "PlayerRoleObj");
//# sourceMappingURL=GameStartVO.js.map