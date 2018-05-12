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
var RecEmailListVO = (function (_super) {
    __extends(RecEmailListVO, _super);
    function RecEmailListVO(data) {
        var _this = _super.call(this, data) || this;
        // this.mlist=[{},{},{},{},{},{},{},{},{}]
        _this.list = [];
        for (var i in _this.mlist) {
            _this.list.push(new EmailListObj(_this.mlist[i]));
        }
        return _this;
    }
    RecEmailListVO.prototype.delEmailByID = function (id) {
        for (var i = 0; i < this.list.length; i++) {
            var _obj = this.list[i];
            if (_obj.id == id) {
                this.list.splice(i, 1);
                break;
            }
        }
    };
    return RecEmailListVO;
}(BaseVO));
__reflect(RecEmailListVO.prototype, "RecEmailListVO");
var EmailListObj = (function (_super) {
    __extends(EmailListObj, _super);
    function EmailListObj(data) {
        var _this = _super.call(this, data) || this;
        _this.type = 0; //邮件类型(0：邮件 1：系统消息)
        _this.goodList = [];
        for (var i in _this.ilist) {
            _this.goodList.push(new EmailGoodObj(_this.ilist[i]));
        }
        if (_this.fname) {
            _this.fname = Base64.getInstance().decode(_this.fname);
        }
        return _this;
        // this.initData();
    }
    EmailListObj.prototype.initData = function () {
        this.id = 1000;
        this.title = "test_" + StaticFun.getRanNum(1000);
        this.content = "content_" + StaticFun.getRanNum(1000);
        this.type = StaticFun.getRanNum(2);
        this.fuid = StaticFun.getRanNum(1000);
        this.fname = "send_" + StaticFun.getRanNum(1000);
        this.stime = StaticFun.getRanNum(1000);
        this.status = StaticFun.getRanNum(2);
        this.goodList = [];
        this.goodList.push(new EmailGoodObj({ "id": 1, "num": 100 }));
    };
    return EmailListObj;
}(BaseVO));
__reflect(EmailListObj.prototype, "EmailListObj");
var EmailGoodObj = (function (_super) {
    __extends(EmailGoodObj, _super);
    function EmailGoodObj(data) {
        return _super.call(this, data) || this;
    }
    return EmailGoodObj;
}(BaseVO));
__reflect(EmailGoodObj.prototype, "EmailGoodObj");
//# sourceMappingURL=RecEmailListVO.js.map