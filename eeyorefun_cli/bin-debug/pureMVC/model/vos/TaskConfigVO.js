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
var TaskConfigVO = (function () {
    function TaskConfigVO(list) {
        this.listData = [];
        for (var i in list) {
            this.listData.push(new TaskConfigObj(list[i]));
        }
    }
    TaskConfigVO.prototype.findConfigByID = function (id) {
        for (var i in this.listData) {
            var _obj = this.listData[i];
            if (_obj.id == id) {
                return _obj;
            }
        }
    };
    return TaskConfigVO;
}());
__reflect(TaskConfigVO.prototype, "TaskConfigVO");
var TaskConfigObj = (function (_super) {
    __extends(TaskConfigObj, _super);
    function TaskConfigObj(obj) {
        var _this = _super.call(this, obj) || this;
        _this.awardVO = new AwardVO(_this.award);
        return _this;
    }
    return TaskConfigObj;
}(BaseVO));
__reflect(TaskConfigObj.prototype, "TaskConfigObj");
//# sourceMappingURL=TaskConfigVO.js.map