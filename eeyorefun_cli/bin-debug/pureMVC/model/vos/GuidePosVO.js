var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var GuidePosVO = (function () {
    function GuidePosVO(str, dType, align) {
        this.status = 0;
        if (String(str) == "0") {
            this.status = 0;
            return;
        }
        var _list = str.split(":");
        this.status = 1;
        if (dType == 0) {
            //女性角色
            this.scaleX = Number(_list[0]);
            this.x = Number(_list[1]);
            this.y = Number(_list[2]);
        }
        else if (dType == 1) {
            //镂空
            this.type = Number(_list[0]);
            this.x = Number(_list[1]);
            this.y = Number(_list[2]);
            this.w = Number(_list[3]);
            this.h = Number(_list[4]);
            if (!align) {
                return;
            }
            var _tempPos = new egret.Point(this.x, this.y);
            var _tempList = align.split(":");
            this.x = _tempPos.x;
            this.y = _tempPos.y;
        }
        else if (dType == 2) {
            //箭头
            this.x = Number(_list[0]);
            this.y = Number(_list[1]);
            this.nameStr = _list[2];
        }
        else if (dType == 3) {
            //描述
            this.x = Number(_list[0]);
            this.y = Number(_list[1]);
        }
        else if (dType == 4) {
            //描述
            this.nameStr = _list[0];
            this.x = Number(_list[1]);
            this.y = Number(_list[2]);
        }
    }
    return GuidePosVO;
}());
__reflect(GuidePosVO.prototype, "GuidePosVO");
//# sourceMappingURL=GuidePosVO.js.map