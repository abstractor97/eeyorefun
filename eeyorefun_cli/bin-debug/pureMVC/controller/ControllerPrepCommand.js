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
var game;
(function (game) {
    var ControllerPrepCommand = (function (_super) {
        __extends(ControllerPrepCommand, _super);
        function ControllerPrepCommand() {
            return _super.call(this) || this;
        }
        ControllerPrepCommand.prototype.execute = function (notification) {
            //核心逻辑
            this.facade.registerCommand(StaticEvent.N_C_LOAD_FIRST, LoadingFirstCommand);
            this.facade.registerCommand(StaticEvent.N_C_LOAD_RESOURCE_GROUP, LoadResourceGroupCommand);
            this.facade.registerCommand(StaticEvent.N_C_LOAD_TITLE_SCENE, LoadTitleSceneCommand);
            this.facade.registerCommand(StaticEvent.N_C_LOAD_GAME_SERVER, LoadGameServerCommand);
            this.facade.registerCommand(StaticEvent.N_C_LOAD_MAIN_SCENE, LoadMainSceneCommand);
            this.facade.registerCommand(StaticEvent.N_C_LOAD_PLAY_SCENE, LoadPlaySceneCommand);
            this.facade.registerCommand(StaticEvent.N_C_HTTP_SEND_DATA, HttpResponseCommand);
            //辅助模块
            this.facade.registerCommand(StaticEvent.N_C_LOAD_MALL_RES, LoadMallCommand);
            this.facade.registerCommand(StaticEvent.N_C_LOAD_EMAIL_RES, LoadEmailCommand);
            this.facade.registerCommand(StaticEvent.N_C_LOAD_GUIDE_RES, LoadGuideCommand);
            //其他
            this.facade.registerCommand(StaticEvent.N_C_LOAD_BASE_INFO, LoadBaseInfoCommand);
            this.facade.registerCommand(StaticEvent.SOCKET_REC + StaticEvent.SOCKET_MSGID_1002 + StaticEvent.SOCKET_CMD_10403, OffLineCommand);
            //            (new GameCommand()).register();
            //            (new SceneCommand()).register();
            //socket
            this.facade.registerCommand(StaticEvent.N_C_SOCKET_COMMAND, SocketCommand);
            this.facade.registerCommand(StaticEvent.N_C_SOCKET_RECEIVE_DATA, SocketRecDataCommand);
            this.facade.registerCommand(StaticEvent.N_C_SOCKET_SEND_DATA, SocketSendDataCommand);
        };
        return ControllerPrepCommand;
    }(puremvc.SimpleCommand));
    game.ControllerPrepCommand = ControllerPrepCommand;
    __reflect(ControllerPrepCommand.prototype, "game.ControllerPrepCommand", ["puremvc.ICommand", "puremvc.INotifier"]);
})(game || (game = {}));
//# sourceMappingURL=ControllerPrepCommand.js.map