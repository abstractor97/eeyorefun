/**
 *
 * @author 
 *
 */
class StaticFun {
    public constructor() {
    }
    public static getDisTexture(dis: egret.DisplayObject): egret.RenderTexture {
        if (!dis) {
            return;
        }
        var renderTexture: egret.RenderTexture = new egret.RenderTexture();
        renderTexture.drawToTexture(dis);
        return renderTexture;
    }
    
    //把点变成线
    public static posCheckLine(_posList: number[]): number[][] {
        _posList.sort(function (a: number, b: number): number {
            if (a > b) {
                return 1;
            } else if (a < b) {
                return -1;
            } else {
                return 0;
            }
        });
        var _tempPointList: number[][] = [];
        for (var m: number = 0; m < _posList.length; m++) {
            var _pos2: number = _posList[m];
            if (_tempPointList.length > 0) {
                var _lastList: number[] = _tempPointList[_tempPointList.length - 1];
                var _lastPos: number = _lastList[_lastList.length - 1];
                var _disNum: number = Math.abs(_pos2 - _lastPos);
                if (_disNum == 1) {
                    _lastList.push(_pos2);
                    _tempPointList[_tempPointList.length - 1] = _lastList;
                } else if (_disNum > 1) {
                    _tempPointList.push([_pos2]);
                }
            } else {
                _tempPointList.push([_pos2]);
            }
        }
        return _tempPointList;
    }
    public static removeDis(dis: egret.DisplayObject) {
        if (dis && dis.parent) {
            dis.parent.removeChild(dis);
        }
    }
    public static getDisByPos(sPos: egret.Point, ePos: egret.Point): number {
        var _disX: number = sPos.x - ePos.x;
        var _disY: number = sPos.y - ePos.y;
        return Math.sqrt(Math.pow(_disX, 2) + Math.pow(_disY, 2));
    }

    public static getAnimationResList(name: string): string[] {
        var _list: string[] = [];
        _list.push(name + "_ske_json");
        _list.push(name + "_tex_json");
        _list.push(name + "_tex_png");
        return _list;
    }
    public static setLabelStr(lb: eui.Label, str: string) {
        lb.text = StaticFun.changeStrByWidth(str, lb.size, lb.width);
    }
    public static changeStrByWidth(str: string, fSize: number, fWidth: number): string {
        if (!str) {
            return "";
        }
        var _tempLb: eui.Label = new eui.Label();
        _tempLb.size = fSize;
        var _tempStr: string;
        for (var i: number = 0; i <= str.length; i++) {
            _tempStr = str.substr(0, i);
            _tempLb.text = _tempStr;
            if (_tempLb.width > fWidth) {
                _tempStr = str.substr(0, i - 1) + ".";
                break;
            }
        }
        return _tempStr;
    }
    public static setBtnEnable(btn: egret.DisplayObject, isEnable: boolean) {
        if (isEnable) {
            // btn.filters = [];
            btn.alpha=1;
            btn.touchEnabled = true;
        } else {
            btn.alpha=0.5;
            // btn.filters = [StaticFun.getNoColorFilter()];
            btn.touchEnabled = false;
        }
    }
    public static getNoColorFilter(): egret.ColorMatrixFilter {
        var colorMatrix = [
            0.3, 0.6, 0, 0, 0,
            0.3, 0.6, 0, 0, 0,
            0.3, 0.6, 0, 0, 0,
            0, 0, 0, 1, 0
        ];
        return new egret.ColorMatrixFilter(colorMatrix);
    }
    /**
		 * 转换时间格式
		 * @param time 时间(秒)
		 * @param type 类型,0:"00:00:00",1:"00小时00分钟00秒"
		 * @return 
		 */
    public static changeTimeStr(time: number, type: number = 0): string {
        if (time <= 0) {
            if (type == 0) {
                return "00:00:00";
            } else if (type == 1) {
                return "0";
            } else if (type == 2) {
                if (time == 0) {
                    return "永久";
                } else if (time == -1) {
                    return "已过期";
                }
            }
        }
        var _num: number = time % (3600 * 24);
        var thisD: number = Math.floor(time / (3600 * 24));
        var thisH: number = Math.floor(_num / 3600);
        var thisM: number = Math.floor((_num % 3600) / 60);
        var thisS: number = Math.floor((_num % 3600) % 60);
        var _str: string = "";
        if (thisD > 0 && type != 2) {
            type = 1;
        }
        if (type == 0) {
            if (thisH < 10) {
                _str += "0" + thisH + ":";
            } else {
                _str += thisH + ":";
            }
            if (thisM < 10) {
                _str += "0" + thisM + ":";
            } else {
                _str += thisM + ":";
            }
            if (thisS < 10) {
                _str += "0" + thisS;
            } else {
                _str += "" + thisS;
            }

        } else if (type == 1) {
            if (thisD > 0) {
                _str = thisD + "天";
            }
            if (thisH > 0) {
                _str += thisH + "小时";
            }
            if (thisM > 0) {
                _str += thisM + "分钟";
            } else if (thisH > 0 && thisS > 0) {
                _str += "零";
            }
            if (thisS > 0) {
                _str += thisS + "秒";
            }
        } else if (type == 2) {
            if (thisD > 0) {
                _str = thisD + "天";
            }
            if (thisH == 0 && thisM > 0) {
                thisH = 1;
            }
            if (thisH > 0) {
                _str += thisH + "小时";
            }
        } else if (type == 3) {
            if (thisM < 10) {
                _str += "0" + thisM + ":";
            } else {
                _str += thisM + ":";
            }
            if (thisS < 10) {
                _str += "0" + thisS;
            } else {
                _str += "" + thisS;
            }

        }
        return _str;

    }
    public static getNumStr(num: number): string {
        if (num < 10000) {
            return num + "";
        } else if (num < 100000000) {
            return Math.floor(10 * num / 10000) / 10 + "万";
        } else {
            return Math.floor(10 * num / 100000000) / 10 + "亿";
        }
    }
    public static addTouchTap(btn: egret.DisplayObject, callBack: Function, target: any) {
        btn.addEventListener(egret.TouchEvent.TOUCH_TAP, callBack.bind(target), target);
    }
    public static removeTouchTap(btn: egret.DisplayObject, callBack: Function, target: any) {
        btn.removeEventListener(egret.TouchEvent.TOUCH_TAP, callBack.bind(target), target);
    }
    public static getObjList(dataObj: Object): Object[] {
        return dataObj["DATA"]["list"];
    }
    public static getListByNum(list: Object[], num: number): Object[] {
        var _tempList: Object[] = [];
        var _rowNum: number = Math.ceil(list.length / num);
        for (var i: number = 0; i < _rowNum; i++) {
            var _startNum: number = i * num;
            var _endNum: number = _startNum + num;
            _tempList.push(list.slice(_startNum, _endNum));
        }
        return _tempList;
    }
    public static getRect(w: number, h: number, color: number = 0xFFFFFF): egret.Sprite {
        var _sp: egret.Sprite = new egret.Sprite();
        _sp.graphics.beginFill(color);
        _sp.graphics.drawRect(0, 0, w, h);
        _sp.graphics.endFill();
        return _sp;
    }
    public static setDisPos(dis: egret.DisplayObject, pos: egret.Point) {
        if (!dis || !pos) {
            return;
        }
        dis.x = pos.x;
        dis.y = pos.y;
    }
    public static setDisCenter(dis: egret.DisplayObject, disBG: egret.DisplayObject) {
        dis.x = (disBG.width - dis.width) / 2;
        dis.y = (disBG.height - dis.height) / 2;
    }

    /**
		 * 获得随机数
		 *@param num:随机值
		 *@param type:范围,0:0-(num-1),-1:(-num+1)-(num-1);
		 **/
    public static getRanNum(num: number, type: number = 0): number {
        var _num: number = 0;
        if (type == 0) {
            _num = Math.random() * num >> 0;
        } else if (type == -1) {
            _num = (Math.random() * num >> 0) - (Math.random() * num >> 0);
        }
        return _num;
    }
    public static getRandObj(obj: Object): any {
        var _len: number = Object.keys(obj).length;
        var _start: number = 0;
        var _end: number = StaticFun.getRanNum(_len);
        for (var i in obj) {
            if (_start == _end) {
                return obj[i];
            }
            _start++;
        }
    }
    public static getRanList(list: any[], count: number = 1): any[] {
        if (list.length < count) {
            return list;
        }
        var _tempList: any[] = list.concat();
        var _getList: any[] = [];
        for (var i = 0; i < count; i++) {
            _getList.push(_tempList.splice(StaticFun.getRanNum(_tempList.length), 1)[0]);
        }
        return _getList;
    }
    public static printObj(obj: Object, isList: boolean = true): void {
        if (isList == true) {
            var list: any[] = obj as any[];
            for (var i = 0; i < list.length; i++) {
                console.log(list[i]);
            }
        } else {
            for (var key in obj) {
                if (obj.hasOwnProperty(key)) {
                    console.log("printObj", obj[key]);
                }
            }
        }
    }
    public static printResListName(groupName: string): void {
        var _tempList: RES.ResourceItem[] = RES.getGroupByName(groupName);
        for (var i in _tempList) {
            console.log("RES:", groupName, i, _tempList[i].name);
        }
    }
    public static createBitmapByName(name: string): egret.Bitmap {
        var result: egret.Bitmap = new egret.Bitmap();
        result.texture = RES.getRes(name);
        return result;
    }
    public static checkHave(list: any[], id: number, typeStr?: string): Boolean {
        for (var i = 0; i < list.length; i++) {
            var _id: number;
            if (typeStr == null) {
                _id = list[i] as number;
            } else {
                _id = list[i][typeStr];
            }
            if (_id == id) {
                return true;
            }
        }
        return false;
    }
    public static getListPoint(i: number, rowNum: number, disX: number, disY: number): Point {
        var n: number = 0;
        var point: Point = new Point();
        if (i != 0 && rowNum != 0) {
            n = Math.floor(i / rowNum);
        }
        point.x = disX * (i - rowNum * n);
        point.y = disY * n;
        return point;
    }

}
