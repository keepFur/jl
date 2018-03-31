const routers = [{
    path: '/',
    meta: {
        title: ' 综合信息'
    },
    component: (resolve) => require(['./views/index.vue'], resolve)
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
}];
export default routers;