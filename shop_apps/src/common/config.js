export default {
    uploadHostUrl:'http://up.qiniup.com?token=',//图片上传的url
    type:4,//门店助手的type都是4
    page:20,
    report:1,//是否回执
    genderZn:{
        1:'男',
        2:'女'
    },
    gender:{
        'man':1,
        'women':2
    },
    //文章
    article:{
        sale:1,//销售公告
        display:2,//陈列公告
    },
    articleZn:{
        display:'陈列公告',//陈列公告
        sale:'销售公告'//销售公告
    },

    //消息类型
    noticeZn:{
        1:'待办通知',
        2:'动态通知',
        3:'公司公告'
    },
    notice:{
        todo:1,
        info:2,
        company:3
    },
    //用户状态
    userStatus:{
        'normal':1,
        'free':2,
        'inviting':3,
        'applying':4,
        'quit':5,
        'refuse':6
    },
    userStatusZn:{
        1:'在职',
        2:'未邀请',
        3:'邀请中待确认',
        4:'申请加入中',
        5:'离职',
        6:'被拒绝',
    },
    userStatusColor:{
        1:'#13BB83',
        2:'#F2735B',
        3:'#9B01D4',
        4:'#FEA536',
        5:'#ff0000',
        6:'#EC3636'
    },
//    门店状态
    //门店状态
    shopStatusZn:{
        1:'筹备中',
        2:'施工中',
        3:'营业中',
        4:'撤柜关闭',
        5:'重装关闭',
        6:'移位关闭',
    },
    shopStatus:{
        ready:1,
        processing:2,
        businessing:3,
        canceled:4,
        renovated:5,
        moved:6
    },
    //门店保修状态
    repairStatus:{
        'submit':1,
        'executing':2,
        'finished':3,
        'commented':4,
    },
    repairStatusZn:{
        1:'未处理',
        2:'执行中',
        3:'被拒绝',
        4:'已完成'
    },

    repairTypeZn: {
        2:'灯具照明',
        3:'电器设备',
        4:'道具货架',
        5:'商场设施',
        6:'灯箱标识',
        7:'其它类别',
    },
    repairTypeArray:[
        {name:'灯具照明',id:2},
        {name:'电器设备',id:3},
        {name:'道具货架',id:4},
        {name:'商场设施',id:5},
        {name:'灯箱标识',id:6},
        {name:'其它类别',id:7},
    ],
    repairType:{
        'light':'灯具照明',
        'elect':'电器设备',
        'building':'道具货架',
        'square':'商场设施',
        'lightBox':'灯箱标识',
        'other':'其它类别',
    },
    repairStatusColor:{
      1:'#1ED4E6',
      2:'#13C16A',
      3:'#F25643',
      4:'#9B01D4'
    },
    //审批颜色
    approveStatusColor:{
        0:'#00474f',
        1:'#1ED4E6',
        2:'#52c41a',
        3:'#f5222d'
    },
    /**
     * 审批
     */
    approvalStatus:{
        wait:0,
        applied:1,
        accepted:2,
        rejected:3,
    },
    approvalStatusZn:{
        0:'待审批',
        1:'审批中',
        2:'已通过',
        3:'被驳回',
    },
    //上传的附件
    doc: {
        withoutTarget : 0,		//Without target
        contract : 1,		//Project files
        flow : 2, 		//Process Node files流程
        task : 3, 			//Task files任务
        log : 4,		//Work Report Daily日志
        attendance : 5,		//Attendance Daily
        expense : 6,		//Expense
        license : 7,		//营业执照
        commonForm : 8,		//新建审批附件
        message : 9,		//Docs sending in IM
        approval : 10,		//Approval
        headCover : 11,		//User head picture头像
        contractCover : 12,      //Contract Cover Picture项目
        carousel : 13,		//App Slide show pictures
        share : 14,			//App Slide show pictures
        quotaCover : 15, 	//Quota Cover Picture定额
        modelCover : 16, 	//Material Model Cover Picture物料
        acceptReport : 17, 	//验收
        serviceorder:18,//维修
        projectorvendor:19,//需求
        project:20,//需求附件
        cusHeadImg:21,//公司头像
        routineApp:22,//常见审批附件,
        outstockApp:23,//领料审批附件,
        vehicleApp:24,//用车审批附件,
        bizTripApp:25,//出差审批附件,
        shop:26,//门店附件
        purchase:27,//采购
        projectverimg:28,//业主端项目
        shopCover:29,//门店头像
        article:31,
        articleCover:32,
        messages:33,//公司公告
        workReportShop:34,
        agreementComment:35,
        trainingArticle:36,
        shopSetupApp:37,
        serviceOrderCatalog:38,//维修类别
        taskRecept:39,//验收同意或者拒绝
        wfapproval:40,//审批同意或者拒绝
        displayCheck:41,//陈列巡检附件
        brandLogo:42,//品牌封面
        paymentApp:43,//付款审批
        complaint :44,//物流申诉附件
    },
    //审批模板类型
    approvalMode: {
        common:1,//通用
        change:2,//变更
        expense:3,//费用报销
        material:4,//物料
        worktime:5,//工时
        overtime:6,//加班
        wtappeal:7,//工时申诉 补记
        bizztrip:8,//出差
        absence:9,//请假
        outside:10,//外出
        vehicle:11,//用车
        license:12,//证书
        stamp:13,//印章
        resign:14,//离职
        regular:15,//转正
        payment:16,//其他付款
        imprest:17,//备用金
        deposit:18,//押金
        purchase:19,//采购
        agreement:20,//报价
        article_sales:21,//销售技巧
        message:22,//公司公告
        article_cases:23,//陈列案例
        shop_setup:24,//开店申请
        shop_renew:25,//重装申请
        shop_shift:26,//移位申请
        shop_close:27,//门店撤柜
        repair_service:28,//报修
        payment2:29,//装修付款
        payment3:30//其他付款
    },
    //设备
    derviceStatus:{
        unsign:2,//未签收不显示
        unactive:3,//未激活不显示
        binding:4,//(cpe)已绑定/(摄像头)已激活显示
        unbind:5,//(cpe)已解绑/(摄像头)已停机不显示
        payment:6,//已欠费显示,去充值
        wrong:7,//已报废不显示
    },
    derviceStatusZn:{
        2:'未签收',
        3:'未激活',
        4:'已绑定',
        5:'已解绑',
        6:'已欠费',
        7:'已报废'
    },
    deviceStatusColor:{
        1:'#FFA01E',
        2:'#FFA01E',
        3:'#FFA01E',
        4:'#42B0ED',
        5:'#FFA01E',
        6:'#FFA01E',
        7:'#FFA01E'

    }
}
