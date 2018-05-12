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
/**
 *
 * @author
 *
 */
var LoadResourceGroupCommand = (function (_super) {
    __extends(LoadResourceGroupCommand, _super);
    function LoadResourceGroupCommand() {
        return _super.call(this) || this;
    }
    LoadResourceGroupCommand.prototype.execute = function (notification) {
        var _loadResVO = notification.getBody();
        this.facade.retrieveProxy(LoadResProxy.NAME).addLoadRes(_loadResVO);
    };
    return LoadResourceGroupCommand;
}(puremvc.SimpleCommand));
__reflect(LoadResourceGroupCommand.prototype, "LoadResourceGroupCommand", ["puremvc.ICommand", "puremvc.INotifier"]);
//# sourceMappingURL=LoadResourceGroupCommand.js.map