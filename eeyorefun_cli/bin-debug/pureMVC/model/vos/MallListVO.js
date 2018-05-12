var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var MallListVO = (function () {
    function MallListVO(data) {
        this.allList = [];
        this.mallShowList = [];
        this.randList = [];
        var _randFirstObj;
        var _randIDList = [];
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
            }
            else if (_obj.id > StaticData.configVO.roleRandID) {
                this.randList.push(_obj);
                _randIDList.push(_obj.id);
            }
        }
        _randFirstObj.iconList = _randIDList;
        this.mallShowList.sort(function (a, b) {
            if (a.sort > b.sort) {
                return -1;
            }
            else if (a.sort < b.sort) {
                return 1;
            }
            else {
                return 0;
            }
        });
    }
    MallListVO.prototype.getMallListByShowType = function (type) {
        var _list = [];
        for (var i in this.mallShowList) {
            var _obj = this.mallShowList[i];
            if (type == 1) {
                if (_obj.showType == 1 || _obj.showType == 0) {
                    _list.push(_obj);
                }
            }
            else if (_obj.showType == type) {
                _list.push(_obj);
            }
        }
        return _list;
    };
    MallListVO.prototype.getRandMallObj = function (roleID) {
        if (roleID === void 0) { roleID = -1; }
        if (roleID == -1) {
            return StaticFun.getRanList(this.mallShowList)[0];
        }
        else if (roleID < StaticData.configVO.roleRandID) {
            return this.findMallObjByID(roleID);
        }
        else {
            return StaticFun.getRanList(this.randList)[0];
        }
    };
    MallListVO.prototype.findMallObjByID = function (id) {
        for (var i in this.allList) {
            if (id == this.allList[i].id) {
                return this.allList[i];
            }
        }
    };
    MallListVO.prototype.setInitMallList = function (mallOV, roleID) {
        var _myHaveList = [];
        var _myUnlockList = [];
        var _myOtherList = [];
        for (var i in this.mallShowList) {
            var _obj = this.mallShowList[i];
            if (roleID == _obj.id) {
                _obj.isUse = true;
                if (_obj.id >= StaticData.configVO.roleRandID) {
                    this.randList[0].isUse = true;
                }
            }
            else {
                _obj.isUse = false;
            }
            _obj.isHave = mallOV.checkHave(_obj.id);
            _obj.isUnLock = mallOV.checkUnlock(_obj.id);
            if (_obj.isHave) {
                _myHaveList.push(_obj);
            }
            else if (_obj.isUnLock) {
                _myUnlockList.push(_obj);
            }
            else {
                _myOtherList.push(_obj);
            }
        }
        this.mallShowList = [];
        this.mallShowList = this.mallShowList.concat(_myHaveList);
        this.mallShowList = this.mallShowList.concat(_myUnlockList);
        this.mallShowList = this.mallShowList.concat(_myOtherList);
    };
    return MallListVO;
}());
__reflect(MallListVO.prototype, "MallListVO");
var MallGoodObj = (function (_super) {
    __extends(MallGoodObj, _super);
    function MallGoodObj(data) {
        var _this = _super.call(this, data) || this;
        if (_this.disc < 100) {
            _this.diamond_pri = Math.ceil(_this.diamond / (_this.disc / 100));
            _this.coin_pri = Math.ceil(_this.glod / (_this.disc / 100));
        }
        return _this;
    }
    return MallGoodObj;
}(BaseVO));
__reflect(MallGoodObj.prototype, "MallGoodObj");
//# sourceMappingURL=MallListVO.js.map