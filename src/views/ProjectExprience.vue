<style scoped>
.container {
    background: #eee;
    padding: 20px;
}

.time {
    font-size: 14px;
    font-weight: bold;
}

.content {
    padding-left: 5px;
}
</style>
<template>
    <div class="container">
        <Card :bordered="false">
            <p slot="title">项目经验</p>
            <Timeline>
                <TimelineItem v-for="(project ,index) in projects" :key="index">
                    <p class="time">
                        <span v-text="project.date"></span>
                        <a href="#" slot="extra" @click.prevent="detailHandle(index)">
                            <Icon type="eye"></Icon>
                            详情
                        </a>
                        <a href="#" slot="extra" @click.prevent="editHandle(index)">
                            <Icon type="edit"></Icon>
                            编辑
                        </a>
                    </p>
                    <div class="content" v-if="!project.isEdit">
                        <p>
                            <span solt="title" v-show="project.isDetail">名称：</span>
                            <span v-text="project.name"></span>
                        </p>
                        <p v-show="project.isDetail">
                            <span solt="title">角色：</span>
                            <span v-text="project.role"></span>
                        </p>
                        <p v-show="project.isDetail">
                            <span slot="title">描述：</span>
                            <span v-text="project.description"></span>
                        </p>
                        <p v-show="project.isDetail">
                            <span slot="title">业绩：</span>
                            <span v-text="project.achievement"></span>
                        </p>
                    </div>
                    <div class="content" v-if="project.isEdit">
                        <Form :model="project" :label-width="80">
                            <FormItem label="名称">
                                <Input v-model="project.name"></Input>
                            </FormItem>
                            <FormItem label="角色">
                                <Select v-model="project.role">
                                    <Option v-for="role in roles" :value="role.value" :key="role.key" :label="role.value">{{ role.value }}</Option>
                                </Select>
                            </FormItem>
                            <FormItem label="描述">
                                <Input v-model="project.description" type='textarea' :autosize="{minRows: 4,maxRows: 6}" placeholder="请详细的描述项目"></Input>
                            </FormItem>
                            <FormItem label="业绩">
                                <Input v-model="project.achievement" type="textarea" :autosize="{minRows: 4,maxRows: 6}" placeholder="请说说这个项目为公司带来的收益"></Input>
                            </FormItem>
                            <FormItem label="时间段">
                                <Input v-model="project.date" placeholder="eg：2017年10月至2018年12月"></Input>
                            </FormItem>
                            <FormItem>
                                <Button type="primary" @click="saveEditInfoHandle(index)">保存</Button>
                                <Button type="ghost" style="margin-left: 8px" @click="cancleEditHandle(index)">取消</Button>
                            </FormItem>
                        </Form>
                    </div>
                </TimelineItem>
            </Timeline>
        </Card>
    </div>
</template>
<script>
export default {
    data: function() {
        return {
            cacheKey: 'projectsExprience',
            roles: [
                {
                    key: 1,
                    value: '开发'
                }, {
                    key: 4,
                    value: '测试'
                }, {
                    key: 2,
                    value: '项目经理'
                }, {
                    key: 3,
                    value: '技术经理'
                }, {
                    key: 5,
                    value: '产品经理'
                }
            ],
            projects: [{
                isEdit: false,
                isDetail: false,
                name: '亚马逊客服管理系统',
                url: 'www.acs.aukeyit.com',
                role: '开发',
                description: '亚马逊客服管理系统是一个管理系统',
                achievement: '为公司节省了大量的人力资源和软件成本',
                beginDate: '2017年10月',
                endDate: '2017年12月',
                date: '2017年10月至2017年12月'
            }, {
                isEdit: false,
                isDetail: false,
                name: '亚马逊客服管理系统',
                url: 'www.acs.aukeyit.com',
                role: '开发',
                description: '亚马逊客服管理系统是一个管理系统',
                achievement: '为公司节省了大量的人力资源和软件成本',
                beginDate: '2017年10月',
                endDate: '2017年12月',
                date: '2017年10月至2017年12月'
            }]
        };
    },
    // 创建完成之后
    created: function() {
        if (this.getInfo()) {
            this.projects = this.getInfo();
        }
    },
    methods: {
        // 存到缓存中去
        setInfo: function() {
            window.localStorage.setItem(this.cacheKey, JSON.stringify(this.projects));
        },
        // 从缓存中取数据
        getInfo: function() {
            return JSON.parse(window.localStorage.getItem(this.cacheKey));
        },
        // 设置所有的项目经验都不能编辑
        setAllDisabledEdit:function(){
             this.projects  = this.projects.map(function(item){
                 item.isEdit = false;
                 return item;
             });
        },
        // 详情
        detailHandle: function(index) {
            this.projects[index].isDetail = !this.projects[index].isDetail;
        },
        // 编辑
        editHandle: function(index) {
            this.setAllDisabledEdit();
            this.projects[index].isEdit = !this.projects[index].isEdit;
        },
        // 保存
        saveEditInfoHandle: function(index) {
            this.projects[index].isEdit = false;
            this.projects[index].isDetail = true;
            this.setInfo();
        },
        // 取消
        cancleEditHandle: function(index) {
            this.projects[index].isEdit = false;
            this.projects = this.getInfo();
        }
    }

}
</script>
