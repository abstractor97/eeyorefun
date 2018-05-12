/**
 *
 * @author 
 *
 */
class StaticEvent {


    public static N_C_LOAD_RESOURCE_GROUP: string = "n_c_load_resource_group";//加载资源组
    public static N_C_LOAD_FIRST: string = "n_c_load_first";//刚进游戏加载loading素材

    public static N_M_POPUP_LAYER_ADD: string = "n_m_popup_layer_add";//添加动态层.
    public static N_M_POPUP_LAYER_DEL: string = "n_m_popup_layer_del";//删除动态层

    public static N_M_SCENE_LAYER_CHANGE: string = "n_m_change_scene";//替换scene对象;
    public static N_M_SCENE_LAYER_DEL: string = "n_m_del_scene";//向scene删除对象

    public static N_M_TIP_LAYER_ADD: string = "n_m_add_tip";//向tip添加对象
    public static N_M_TIP_LAYER_DEL: string = "n_m_del_tip";//向tip删除对象

    public static N_M_UI_SHOW: string = "n_m_ui_show";//显示主UI
    public static N_M_UI_DEL: string = "n_m_ui_del";//删除主UI

    public static N_M_LOADING_SHOW: string = "n_m_loading_show";//显示加载界面
    public static N_M_LOADING_DEL: string = "n_m_loading_del";//显示加载界面
    public static N_M_LOADING_PROGRESS: string = "n_m_loading_progress";//加载资源进度

    //标题场景
    public static N_C_LOAD_TITLE_SCENE: string = "n_c_load_title_scene";//加载title素材
    public static N_M_TITLE_SCENE_SHOW: string = "n_m_title_scene_show";//显示开始场景

    //主场景
    public static N_C_LOAD_MAIN_SCENE: string = "n_c_load_main_scene";//加载mainScene素材
    public static N_M_MAIN_SCENE_SHOW: string = "n_m_main_scene_show";//显示主界面场景

    //玩牌场景
    public static N_C_LOAD_PLAY_SCENE: string = "n_c_load_play_scene";//加载玩牌界面素材
    public static N_M_PLAY_SCENE_SHOW: string = "n_m_play_scene_show";//显示玩牌界面

    //玩牌场景
    public static N_C_LOAD_ROLE_INFO: string = "n_c_load_role_info";//加载角色详情界面
    public static N_M_SHOW_ROLE_INFO: string = "n_m_show_role_info";//显示角色详情界面

    //其他
    public static N_C_LOAD_GAME_SERVER: string = "n_c_load_game_server";//请求游戏服务器
    public static N_C_LOAD_GAME_REGISTER_UID: string = "n_c_load_game_register_uid";//请求注册uid
    public static N_C_LOAD_MALL_RES: string = "n_c_load_mall_res";//加载商城界面
    public static N_M_MALL_SHOW: string = "n_m_mall_show";//显示商城界面
    public static N_C_LOAD_GET_NEW_ROLE: string = "n_c_load_get_new_role";//显示新解锁角色界面
    public static N_M_GET_NEW_ROLE_SHOW: string = "n_m_get_new_role_show";//显示新解锁角色界面
    public static N_C_LOAD_IS_NEW_ROLE: string = "n_m_load_is_new_rolew";//查询是否有新解锁角色
    public static N_C_LOAD_EMAIL_RES: string = "n_c_load_email_res";//加载邮件界面
    public static N_M_EMAIL_SHOW: string = "n_m_email_show";//显示邮件界面
    public static N_M_RANK_SHOW: string = "n_m_rank_show";//显示排行榜
    public static N_C_LOAD_TASK_RES: string = "n_c_load_task_res";//加载任务界面
    public static N_M_TASK_VIEW_SHOW: string = "n_m_task_view_show";//显示任务界面
    public static N_C_LOAD_SIGN_RES: string = "n_c_load_sign_res";//加载签到界面
    public static N_M_SIGN_VIEW_SHOW: string = "n_m_sign_view_show";//显示签到界面

    public static N_M_SHARE_VIEW_SHOW: string = "n_m_share_view_show";//显示分享界面
    public static N_M_PAY_VIEW_SHOW: string = "n_m_pay_view_show";//显示充值界面

    public static N_M_SETTING_VIEW_SHOW: string = "n_m_setting_view_show";//显示设置界面

    public static N_M_MY_FRIEND_VIEW_SHOW: string = "n_m_my_friend_view_show";//显示好友界面
    public static N_M_USER_INFO_VIEW_SHOW: string = "n_m_user_info_view_show";//显示用户信息界面

    public static N_M_SET_USER_INFO_VIEW_SHOW: string = "n_m_set_user_info_view_show";//显示设置用户信息界面

    public static N_C_LOAD_BASE_INFO: string = "n_c_load_base_info";//加载自己基础信息
    public static N_C_LOAD_USER_INFO: string = "n_c_load_user_info";//加载用户信息

    public static N_C_LOAD_HEAD_LIST: string = "n_c_load_head_list";//加载头像信息
    public static N_M_HEAD_LIST_VIEW_SHOW: string = "n_m_head_list_show";//显示头像列表
    public static N_C_LOAD_GET_GOOD_VIEW: string = "n_c_load_get_good_view";//加载获取物品界面
    public static N_M_TEMP_SCENE_SHOW: string = "n_m_temp_scene_show";//显示过场界面

    public static N_M_GUIDE_SHOW: string = "n_m_guide_show";//显示新手引导界面
    public static N_C_LOAD_GUIDE_RES: string = "n_c_load_guide_res";//加载新手引导资源

    public static N_M_SET_MAIN_TASK_ICON:string="n_m_set_main_task_icon";//设置主界面任务按钮红点
    public static N_M_SET_MAIN_EMAIL_ICON:string="n_m_set_main_email_icon";//设置主界面邮件按钮红点



    public static N_C_SOCKET_COMMAND: string = "n_c_socket_connect";//连接socket;
    public static N_C_SOCKET_RECEIVE_DATA: string = "n_c_socket_receive_data";//socket收到数据;
    public static N_C_SOCKET_SEND_DATA: string = "n_c_socket_send_data";//socket发送数据;
    public static N_C_HTTP_SEND_DATA: string = "n_c_http_send_data";//http发送数据;
    public static SOCKET_CONNECT: string = "socket_connect";//连接socket;
    public static SOCKET_STATE: string = "socket_state";//socket状态发生改变;
    public static SOCKET_REC: string = "socket_rec";//socket收到数据

    public static SOCKET_MSGID_1002: number = 1002;
    public static SOCKET_CMD_10103: number = 10103;//推送收到新邮件
    public static SOCKET_CMD_10202: number = 10202;//推送用户退出房间(好友模式下才有)
    public static SOCKET_CMD_10207: number = 10207;//广播进入房间（将刚进入的玩家信息发送给房间里的玩家）
    public static SOCKET_CMD_10209: number = 10209;//好友模式下广播开始游戏
    public static SOCKET_CMD_10211: number = 10211;//好友模式下广播玩家数据
    public static SOCKET_CMD_10214: number = 10214;//好友模式下推送一局结束
    public static SOCKET_CMD_10321: number = 10321;//好友模式下房主解散房间
    public static SOCKET_CMD_10401: number = 10401;//扣款成功
    public static SOCKET_CMD_10403: number = 10403;//帐号重复登录
    public static SOCKET_CMD_10313: number = 10313;//有新完成任务
    
    
}

