const routers = [{
    path: '/',
    meta: {
        title: '主页'
    },
    component: (resolve) => require(['./views/Index.vue'], resolve)
}, {
    path: '/home',
    meta: {
        title: '主页'
    },
    component: (resolve) => require(['./views/Index.vue'], resolve)
}, {
    path: '/admin',
    meta: {
        title: '编辑简历'
    },
    component: (resolve) => require(['./views/Admin.vue'], resolve)
}, {
    path: '/baseinfo',
    meta: {
        title: '基础信息'
    },
    component: (resolve) => require(['./views/BaseInfo.vue'], resolve)
}, {
    path: '/skills',
    meta: {
        title: '职业技能'
    },
    component: (resolve) => require(['./views/Skills.vue'], resolve)
}, {
    path: '/workexperience',
    meta: {
        title: '工作经历'
    },
    component: (resolve) => require(['./views/WorkExperience.vue'], resolve)
}, {
    path: '/projectexprience',
    meta: {
        title: '项目经验'
    },
    component: (resolve) => require(['./views/Projectexprience.vue'], resolve)
}, {
    path: '/educationalbackground',
    meta: {
        title: '教育背景'
    },
    component: (resolve) => require(['./views/EducationalBackground.vue'], resolve)
}, {
    path: '/personalevaluation',
    meta: {
        title: '个人评价'
    },
    component: (resolve) => require(['./views/PersonalEvaluation.vue'], resolve)
}];
export default routers;