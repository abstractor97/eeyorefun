var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 *
 * @author
 *
 */
var StaticFun = (function () {
    function StaticFun() {
    }
    StaticFun.getDisTexture = function (dis) {
        if (!dis) {
            return;
        }
        var renderTexture = new egret.RenderTexture();
        renderTexture.drawToTexture(dis);
        return renderTexture;
    };
    //把点变成线
    StaticFun.posCheckLine = function (_posList) {
        _posList.sort(function (a, b) {
            if (a > b) {
                return 1;
            }
            else if (a < b) {
                return -1;
            }
            else {
                return 0;
            }
        });
        var _tempPointList = [];
        for (var m = 0; m < _posList.length; m++) {
            var _pos2 = _posList[m];
            if (_tempPointList.length > 0) {
                var _lastList = _tempPointList[_tempPointList.length - 1];
                var _lastPos = _lastList[_lastList.length - 1];
                var _disNum = Math.abs(_pos2 - _lastPos);
                if (_disNum == 1) {
                    _lastList.push(_pos2);
                    _tempPointList[_tempPointList.length - 1] = _lastList;
                }
                else if (_disNum > 1) {
                    _tempPointList.push([_pos2]);
                }
            }
            else {
                _tempPointList.push([_pos2]);
            }
        }
        return _tempPointList;
    };
    StaticFun.removeDis = function (dis) {
        if (dis && dis.parent) {
            dis.parent.removeChild(dis);
        }
    };
    StaticFun.getDisByPos = function (sPos, ePos) {
        var _disX = sPos.x - ePos.x;
        var _disY = sPos.y - ePos.y;
        return Math.sqrt(Math.pow(_disX, 2) + Math.pow(_disY, 2));
    };
    StaticFun.getAnimationResList = function (name) {
        var _list = [];
        _list.push(name + "_ske_json");
        _list.push(name + "_tex_json");
        _list.push(name + "_tex_png");
        return _list;
    };
    StaticFun.setLabelStr = function (lb, str) {
        lb.text = StaticFun.changeStrByWidth(str, lb.size, lb.width);
    };
    StaticFun.changeStrByWidth = function (str, fSize, fWidth) {
        if (!str) {
            return "";
        }
        var _tempLb = new eui.Label();
        _tempLb.size = fSize;
        var _tempStr;
        for (var i = 0; i <= str.length; i++) {
            _tempStr = str.substr(0, i);
            _tempLb.text = _tempStr;
            if (_tempLb.width > fWidth) {
                _tempStr = str.substr(0, i - 1) + ".";
                break;
            }
        }
        return _tempStr;
    };
    StaticFun.setBtnEnable = function (btn, isEnable) {
        if (isEnable) {
            // btn.filters = [];
            btn.alpha = 1;
            btn.touchEnabled = true;
        }
        else {
            btn.alpha = 0.5;
            // btn.filters = [StaticFun.getNoColorFilter()];
            btn.touchEnabled = false;
        }
    };
    StaticFun.getNoColorFilter = function () {
        var colorMatrix = [
            0.3, 0.6, 0, 0, 0,
            0.3, 0.6, 0, 0, 0,
            0.3, 0.6, 0, 0, 0,
            0, 0, 0, 1, 0
        ];
        return new egret.ColorMatrixFilter(colorMatrix);
    };
    /**
         * 转换时间格式
         * @param time 时间(秒)
         * @param type 类型,0:"00:00:00",1:"00小时00分钟00秒"
         * @return
         */
    StaticFun.changeTimeStr = function (time, type) {
        if (type === void 0) { type = 0; }
        if (time <= 0) {
            if (type == 0) {
                return "00:00:00";
            }
            else if (type == 1) {
                return "0";
            }
            else if (type == 2) {
                if (time == 0) {
                    return "永久";
                }
                else if (time == -1) {
                    return "已过期";
                }
            }
        }
        var _num = time % (3600 * 24);
        var thisD = Math.floor(time / (3600 * 24));
        var thisH = Math.floor(_num / 3600);
        var thisM = Math.floor((_num % 3600) / 60);
        var thisS = Math.floor((_num % 3600) % 60);
        var _str = "";
        if (thisD > 0 && type != 2) {
            type = 1;
        }
        if (type == 0) {
            if (thisH < 10) {
                _str += "0" + thisH + ":";
            }
            else {
                _str += thisH + ":";
            }
            if (thisM < 10) {
                _str += "0" + thisM + ":";
            }
            else {
                _str += thisM + ":";
            }
            if (thisS < 10) {
                _str += "0" + thisS;
            }
            else {
                _str += "" + thisS;
            }
        }
        else if (type == 1) {
            if (thisD > 0) {
                _str = thisD + "天";
            }
            if (thisH > 0) {
                _str += thisH + "小时";
            }
            if (thisM > 0) {
                _str += thisM + "分钟";
            }
            else if (thisH > 0 && thisS > 0) {
                _str += "零";
            }
            if (thisS > 0) {
                _str += thisS + "秒";
            }
        }
        else if (type == 2) {
            if (thisD > 0) {
                _str = thisD + "天";
            }
            if (thisH == 0 && thisM > 0) {
                thisH = 1;
            }
            if (thisH > 0) {
                _str += thisH + "小时";
            }
        }
        else if (type == 3) {
            if (thisM < 10) {
                _str += "0" + thisM + ":";
            }
            else {
                _str += thisM + ":";
            }
            if (thisS < 10) {
                _str += "0" + thisS;
            }
            else {
                _str += "" + thisS;
            }
        }
        return _str;
    };
    StaticFun.getNumStr = function (num) {
        if (num < 10000) {
            return num + "";
        }
        else if (num < 100000000) {
            return Math.floor(10 * num / 10000) / 10 + "万";
        }
        else {
            return Math.floor(10 * num / 100000000) / 10 + "亿";
        }
    };
    StaticFun.addTouchTap = function (btn, callBack, target) {
        btn.addEventListener(egret.TouchEvent.TOUCH_TAP, callBack.bind(target), target);
    };
    StaticFun.removeTouchTap = function (btn, callBack, target) {
        btn.removeEventListener(egret.TouchEvent.TOUCH_TAP, callBack.bind(target), target);
    };
    StaticFun.getObjList = function (dataObj) {
        return dataObj["DATA"]["list"];
    };
    StaticFun.getListByNum = function (list, num) {
        var _tempList = [];
        var _rowNum = Math.ceil(list.length / num);
        for (var i = 0; i < _rowNum; i++) {
            var _startNum = i * num;
            var _endNum = _startNum + num;
            _tempList.push(list.slice(_startNum, _endNum));
        }
        return _tempList;
    };
    StaticFun.getRect = function (w, h, color) {
        if (color === void 0) { color = 0xFFFFFF; }
        var _sp = new egret.Sprite();
        _sp.graphics.beginFill(color);
        _sp.graphics.drawRect(0, 0, w, h);
        _sp.graphics.endFill();
        return _sp;
    };
    StaticFun.setDisPos = function (dis, pos) {
        if (!dis || !pos) {
            return;
        }
        dis.x = pos.x;
        dis.y = pos.y;
    };
    StaticFun.setDisCenter = function (dis, disBG) {
        dis.x = (disBG.width - dis.width) / 2;
        dis.y = (disBG.height - dis.height) / 2;
    };
    /**
         * 获得随机数
         *@param num:随机值
         *@param type:范围,0:0-(num-1),-1:(-num+1)-(num-1);
         **/
    StaticFun.getRanNum = function (num, type) {
        if (type === void 0) { type = 0; }
        var _num = 0;
        if (type == 0) {
            _num = Math.random() * num >> 0;
        }
        else if (type == -1) {
            _num = (Math.random() * num >> 0) - (Math.random() * num >> 0);
        }
        return _num;
    };
    StaticFun.getRandObj = function (obj) {
        var _len = Object.keys(obj).length;
        var _start = 0;
        var _end = StaticFun.getRanNum(_len);
        for (var i in obj) {
            if (_start == _end) {
                return obj[i];
            }
            _start++;
        }
    };
    StaticFun.getRanList = function (list, count) {
        if (count === void 0) { count = 1; }
        if (list.length < count) {
            return list;
        }
        var _tempList = list.concat();
        var _getList = [];
        for (var i = 0; i < count; i++) {
            _getList.push(_tempList.splice(StaticFun.getRanNum(_tempList.length), 1)[0]);
        }
        return _getList;
    };
    StaticFun.printObj = function (obj, isList) {
        if (isList === void 0) { isList = true; }
        if (isList == true) {
            var list = obj;
            for (var i = 0; i < list.length; i++) {
                console.log(list[i]);
            }
        }
        else {
            for (var key in obj) {
                if (obj.hasOwnProperty(key)) {
                    console.log("printObj", obj[key]);
                }
            }
        }
    };
    StaticFun.printResListName = function (groupName) {
        var _tempList = RES.getGroupByName(groupName);
        for (var i in _tempList) {
            console.log("RES:", groupName, i, _tempList[i].name);
        }
    };
    StaticFun.createBitmapByName = function (name) {
        var result = new egret.Bitmap();
        result.texture = RES.getRes(name);
        return result;
    };
    StaticFun.checkHave = function (list, id, typeStr) {
        for (var i = 0; i < list.length; i++) {
            var _id;
            if (typeStr == null) {
                _id = list[i];
            }
            else {
                _id = list[i][typeStr];
            }
            if (_id == id) {
                return true;
            }
        }
        return false;
    };
    StaticFun.getListPoint = function (i, rowNum, disX, disY) {
        var n = 0;
        var point = new Point();
        if (i != 0 && rowNum != 0) {
            n = Math.floor(i / rowNum);
        }
        point.x = disX * (i - rowNum * n);
        point.y = disY * n;
        return point;
    };
    return StaticFun;
}());
__reflect(StaticFun.prototype, "StaticFun");
//# sourceMappingURL=StaticFun.js.map