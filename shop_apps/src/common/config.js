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
}
