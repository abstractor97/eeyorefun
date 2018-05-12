var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 *
 * @author
 *
 */
var StaticEvent = (function () {
    function StaticEvent() {
    }
    StaticEvent.N_C_LOAD_RESOURCE_GROUP = "n_c_load_resource_group"; //加载资源组
    StaticEvent.N_C_LOAD_FIRST = "n_c_load_first"; //刚进游戏加载loading素材
    StaticEvent.N_M_POPUP_LAYER_ADD = "n_m_popup_layer_add"; //添加动态层.
    StaticEvent.N_M_POPUP_LAYER_DEL = "n_m_popup_layer_del"; //删除动态层
    StaticEvent.N_M_SCENE_LAYER_CHANGE = "n_m_change_scene"; //替换scene对象;
    StaticEvent.N_M_SCENE_LAYER_DEL = "n_m_del_scene"; //向scene删除对象
    StaticEvent.N_M_TIP_LAYER_ADD = "n_m_add_tip"; //向tip添加对象
    StaticEvent.N_M_TIP_LAYER_DEL = "n_m_del_tip"; //向tip删除对象
    StaticEvent.N_M_UI_SHOW = "n_m_ui_show"; //显示主UI
    StaticEvent.N_M_UI_DEL = "n_m_ui_del"; //删除主UI
    StaticEvent.N_M_LOADING_SHOW = "n_m_loading_show"; //显示加载界面
    StaticEvent.N_M_LOADING_DEL = "n_m_loading_del"; //显示加载界面
    StaticEvent.N_M_LOADING_PROGRESS = "n_m_loading_progress"; //加载资源进度
    //标题场景
    StaticEvent.N_C_LOAD_TITLE_SCENE = "n_c_load_title_scene"; //加载title素材
    StaticEvent.N_M_TITLE_SCENE_SHOW = "n_m_title_scene_show"; //显示开始场景
    //主场景
    StaticEvent.N_C_LOAD_MAIN_SCENE = "n_c_load_main_scene"; //加载mainScene素材
    StaticEvent.N_M_MAIN_SCENE_SHOW = "n_m_main_scene_show"; //显示主界面场景
    //玩牌场景
    StaticEvent.N_C_LOAD_PLAY_SCENE = "n_c_load_play_scene"; //加载玩牌界面素材
    StaticEvent.N_M_PLAY_SCENE_SHOW = "n_m_play_scene_show"; //显示玩牌界面
    //玩牌场景
    StaticEvent.N_C_LOAD_ROLE_INFO = "n_c_load_role_info"; //加载角色详情界面
    StaticEvent.N_M_SHOW_ROLE_INFO = "n_m_show_role_info"; //显示角色详情界面
    //其他
    StaticEvent.N_C_LOAD_GAME_SERVER = "n_c_load_game_server"; //请求游戏服务器
    StaticEvent.N_C_LOAD_GAME_REGISTER_UID = "n_c_load_game_register_uid"; //请求注册uid
    StaticEvent.N_C_LOAD_MALL_RES = "n_c_load_mall_res"; //加载商城界面
    StaticEvent.N_M_MALL_SHOW = "n_m_mall_show"; //显示商城界面
    StaticEvent.N_C_LOAD_GET_NEW_ROLE = "n_c_load_get_new_role"; //显示新解锁角色界面
    StaticEvent.N_M_GET_NEW_ROLE_SHOW = "n_m_get_new_role_show"; //显示新解锁角色界面
    StaticEvent.N_C_LOAD_IS_NEW_ROLE = "n_m_load_is_new_rolew"; //查询是否有新解锁角色
    StaticEvent.N_C_LOAD_EMAIL_RES = "n_c_load_email_res"; //加载邮件界面
    StaticEvent.N_M_EMAIL_SHOW = "n_m_email_show"; //显示邮件界面
    StaticEvent.N_M_RANK_SHOW = "n_m_rank_show"; //显示排行榜
    StaticEvent.N_C_LOAD_TASK_RES = "n_c_load_task_res"; //加载任务界面
    StaticEvent.N_M_TASK_VIEW_SHOW = "n_m_task_view_show"; //显示任务界面
    StaticEvent.N_C_LOAD_SIGN_RES = "n_c_load_sign_res"; //加载签到界面
    StaticEvent.N_M_SIGN_VIEW_SHOW = "n_m_sign_view_show"; //显示签到界面
    StaticEvent.N_M_SHARE_VIEW_SHOW = "n_m_share_view_show"; //显示分享界面
    StaticEvent.N_M_PAY_VIEW_SHOW = "n_m_pay_view_show"; //显示充值界面
    StaticEvent.N_M_SETTING_VIEW_SHOW = "n_m_setting_view_show"; //显示设置界面
    StaticEvent.N_M_MY_FRIEND_VIEW_SHOW = "n_m_my_friend_view_show"; //显示好友界面
    StaticEvent.N_M_USER_INFO_VIEW_SHOW = "n_m_user_info_view_show"; //显示用户信息界面
    StaticEvent.N_M_SET_USER_INFO_VIEW_SHOW = "n_m_set_user_info_view_show"; //显示设置用户信息界面
    StaticEvent.N_C_LOAD_BASE_INFO = "n_c_load_base_info"; //加载自己基础信息
    StaticEvent.N_C_LOAD_USER_INFO = "n_c_load_user_info"; //加载用户信息
    StaticEvent.N_C_LOAD_HEAD_LIST = "n_c_load_head_list"; //加载头像信息
    StaticEvent.N_M_HEAD_LIST_VIEW_SHOW = "n_m_head_list_show"; //显示头像列表
    StaticEvent.N_C_LOAD_GET_GOOD_VIEW = "n_c_load_get_good_view"; //加载获取物品界面
    StaticEvent.N_M_TEMP_SCENE_SHOW = "n_m_temp_scene_show"; //显示过场界面
    StaticEvent.N_M_GUIDE_SHOW = "n_m_guide_show"; //显示新手引导界面
    StaticEvent.N_C_LOAD_GUIDE_RES = "n_c_load_guide_res"; //加载新手引导资源
    StaticEvent.N_M_SET_MAIN_TASK_ICON = "n_m_set_main_task_icon"; //设置主界面任务按钮红点
    StaticEvent.N_M_SET_MAIN_EMAIL_ICON = "n_m_set_main_email_icon"; //设置主界面邮件按钮红点
    StaticEvent.N_C_SOCKET_COMMAND = "n_c_socket_connect"; //连接socket;
    StaticEvent.N_C_SOCKET_RECEIVE_DATA = "n_c_socket_receive_data"; //socket收到数据;
    StaticEvent.N_C_SOCKET_SEND_DATA = "n_c_socket_send_data"; //socket发送数据;
    StaticEvent.N_C_HTTP_SEND_DATA = "n_c_http_send_data"; //http发送数据;
    StaticEvent.SOCKET_CONNECT = "socket_connect"; //连接socket;
    StaticEvent.SOCKET_STATE = "socket_state"; //socket状态发生改变;
    StaticEvent.SOCKET_REC = "socket_rec"; //socket收到数据
    StaticEvent.SOCKET_MSGID_1002 = 1002;
    StaticEvent.SOCKET_CMD_10103 = 10103; //推送收到新邮件
    StaticEvent.SOCKET_CMD_10202 = 10202; //推送用户退出房间(好友模式下才有)
    StaticEvent.SOCKET_CMD_10207 = 10207; //广播进入房间（将刚进入的玩家信息发送给房间里的玩家）
    StaticEvent.SOCKET_CMD_10209 = 10209; //好友模式下广播开始游戏
    StaticEvent.SOCKET_CMD_10211 = 10211; //好友模式下广播玩家数据
    StaticEvent.SOCKET_CMD_10214 = 10214; //好友模式下推送一局结束
    StaticEvent.SOCKET_CMD_10321 = 10321; //好友模式下房主解散房间
    StaticEvent.SOCKET_CMD_10401 = 10401; //扣款成功
    StaticEvent.SOCKET_CMD_10403 = 10403; //帐号重复登录
    StaticEvent.SOCKET_CMD_10313 = 10313; //有新完成任务
    return StaticEvent;
}());
__reflect(StaticEvent.prototype, "StaticEvent");
//# sourceMappingURL=StaticEvent.js.map