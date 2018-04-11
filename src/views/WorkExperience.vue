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
            <p slot="title">工作经历</p>
            <a href="#" slot="extra" @click.prevent.stop="addInfoHandle">
                <Icon type="plus-circled"></Icon>
                添加
            </a>
            <Timeline>
                <TimelineItem v-for="(work ,index) in works" :key="index">
                    <p class="time">
                        <span v-text="work.date"></span>
                        <a href="#" slot="extra" @click.prevent="detailHandle(index)">
                            <Icon type="eye"></Icon>
                            详情
                        </a>
                        <a href="#" slot="extra" @click.prevent="editHandle(index)">
                            <Icon type="edit"></Icon>
                            编辑
                        </a>
                    </p>
                    <div class="content" v-if="!work.isEdit">
                        <p v-show="!work.isDetail">
                            {{work.companyName+'（'+work.jobName+'）'}}
                        </p>
                        <p v-show="work.isDetail">
                            <span solt="title">职位：</span>
                            <span v-text="work.jobName"></span>
                        </p>
                        <p v-show="work.isDetail">
                            <span solt="title">公司名称：</span>
                            <span v-text="work.companyName"></span>
                        </p>
                        <p v-show="work.isDetail">
                            <span solt="title">公司类型：</span>
                            <span v-text="work.companyType"></span>
                        </p>
                        <p v-show="work.isDetail">
                            <span slot="title">工作内容：</span>
                            <span v-text="work.content"></span>
                        </p>
                        <p v-show="work.isDetail">
                            <span slot="title">业绩：</span>
                            <span v-text="work.achievement"></span>
                        </p>
                    </div>
                    <div class="content" v-if="work.isEdit">
                        <Form :model="work" :label-width="80">
                            <FormItem label="职位">
                                <Input v-model="work.jobName"></Input>
                            </FormItem>
                            <FormItem label="公司名称">
                                <Input v-model="work.companyName"></Input>
                            </FormItem>
                            <FormItem label="公司类型">
                                <Input v-model="work.companyType" placeholder="eg:电子商务"></Input>
                            </FormItem>
                            <FormItem label="业绩">
                                <Input v-model="work.achievement" type="textarea" :autosize="{minRows: 4,maxRows: 6}" placeholder="选填，请说说你在就职期间为公司作出的贡献"></Input>
                            </FormItem>
                            <FormItem label="时间段">
                                <Input v-model="work.date" placeholder="eg：2017年10月至2018年12月"></Input>
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
        <Modal v-model="addModal" title="添加工作经历" @on-ok="saveAddInfoHandle" @on-cancel="cancleAddHandle">
            <Form :model="formItem" :label-width="80">
                <FormItem label="职位">
                    <Input v-model="formItem.jobName"></Input>
                </FormItem>
                <FormItem label="公司名称">
                    <Input v-model="formItem.companyName"></Input>
                </FormItem>
                <FormItem label="公司类型">
                    <Input v-model="formItem.companyType" placeholder="eg:电子商务"></Input>
                </FormItem>
                <FormItem label="业绩">
                    <Input v-model="formItem.achievement" type="textarea" :autosize="{minRows: 4,maxRows: 6}" placeholder="选填，请说说你在就职期间为公司作出的贡献"></Input>
                </FormItem>
                <FormItem label="时间段">
                    <Input v-model="formItem.date" placeholder="eg：2017年10月至2018年12月"></Input>
                </FormItem>
            </Form>
        </Modal>
    </div>
</template>
<script>
export default {
    data: function() {
        return {
            validRules: {
                jobName: '工作名称不能为空',
                companyName: '公司名称不能为空',
                companyType: '公司类型不能为空',
                content: '工作内容不能为空',
                date: '工作时间段不能为空'
            },
            cacheKey: 'workExprience',
            addModal: false,
            formItem: {
                isDetail: true,
                isEdit: false,
                jobName: '',
                companyName: '',
                companyType: '',
                skills: '',
                content: '',
                achievement: '',
                date: ''
            },
            works: [{
                isDetail: false,
                isEdit: false,
                jobName: 'web前端开发',
                companyName: '深圳市傲基电子商务股份有限公司',
                companyType: '电子商务',
                skills: ['js/html/css', 'jQeruy', 'bootstrap', 'node.js'],
                content: '开发供应链系统',
                achievement: '公司的整条供应链系统被打通',
                date: '2016年3月至现在'
            }]
        };
    },
    // 创建完成之后
    created: function() {
        this.works = this.getInfo();
    },
    methods: {
        // 存到缓存中去
        setInfo: function() {
            window.localStorage.setItem(this.cacheKey, JSON.stringify(this.works));
        },
        // 从缓存中取数据
        getInfo: function() {
            return JSON.parse(window.localStorage.getItem(this.cacheKey)) || this.works;
        },
        // 设置所有的项目经验都不能编辑
        setAllDisabledEdit: function() {
            this.works = this.works.map(function(item) {
                item.isEdit = false;
                return item;
            });
        },
        // 添加
        addInfoHandle: function() {
            this.addModal = true;
        },
        // 验证表单添加的信息
        validateForm: function(formData, callback) {
            let isPass = true;
            for (var key in formData) {
                if (formData.hasOwnProperty(key)) {
                    var val = formData[key];
                    if (typeof val === 'string' && !val.replace(/^\s+|\s+$/, '')) {
                        isPass = false;
                        callback(this.validRules[key]);
                        break;
                    }
                }
            }
            if (isPass) {
                callback();
            }
        },
        // 保存添加的信息
        saveAddInfoHandle: function() {
            var that = this;
            this.validateForm.call(this, this.formItem, function(err) {
                if (err) {
                    this.$Notice.error({
                        title: err
                    });
                    return;
                }
                this.works.push(thatformItem);
            });
            // this.validateForm(this.formItem, function(err) {
            //     if (err) {
            //         that.$Notice.error({
            //             title: err
            //         });
            //         return;
            //     }
            //     that.works.push(thatformItem);
            // });
        },
        // 取消添加
        cancleAddHandle: function() {
            this.addModal = false;
        },
        // 详情
        detailHandle: function(index) {
            this.works[index].isDetail = !this.works[index].isDetail;
        },
        // 编辑
        editHandle: function(index) {
            this.setAllDisabledEdit();
            this.works[index].isEdit = !this.works[index].isEdit;
        },
        // 保存
        saveEditInfoHandle: function(index) {
            this.works[index].isEdit = false;
            this.works[index].isDetail = true;
            this.setInfo();
        },
        // 取消
        cancleEditHandle: function(index) {
            this.works[index].isEdit = false;
            this.works = this.getInfo();
        }
    }
}
</script>
