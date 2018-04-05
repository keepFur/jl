<template>
    <div class="container">
        <Card :bordered="false" v-if="!status.isEdit">
            <p slot="title">基础信息</p>
            <a href="#" slot="extra" @click.prevent.stop="editInfoHandle">
                <Icon type="edit"></Icon>
                编辑
            </a>
            <p>
                <label class="info-label">姓名：</label>
                <span v-text="formItem.name"></span>
            </p>
            <p>
                <label class="info-label"> 联系方式：</label>
                <span v-text="formItem.contactMethods"></span>
            </p>
            <p>
                <label class="info-label"> 求职意向：</label>
                <span v-text="formItem.jobWant"></span>
            </p>
            <p>
                <label class="info-label">期望薪资：</label>
                <span v-text="computedSalaryExpectation"></span>
            </p>
            <p>
                <label class="info-label">工作状态：</label>
                <span v-text="computedWorkStatus"></span>
            </p>
            <p>
                <label class="info-label">工作年限：</label>
                <span v-text="computedWorkLife"></span>
            </p>
        </Card>
        <Card :bordered='false' v-if="status.isEdit">
            <p slot="title">基础信息</p>
            <Form :model="formItem" :label-width="80">
                <FormItem label="姓名">
                    <Input v-model="formItem.name"></Input>
                </FormItem>
                <FormItem label="联系方式">
                    <Input v-model="formItem.contactMethods"></Input>
                </FormItem>
                <FormItem label="求职意向">
                    <Input v-model="formItem.jobWant"></Input>
                </FormItem>
                <FormItem label="期望薪资">
                    <Slider v-model="formItem.salaryExpectation" :step='1' range :tip-format='salaryExpectationFormat' @on-change="salaryChangeHandle"></Slider>
                </FormItem>
                <FormItem label="工作状态">
                    <RadioGroup v-model="formItem.workStatus" size="large" @on-change="workStatusChangeHandle">
                        <Radio label="0">离职-随时到岗</Radio>
                        <Radio label="1">在职-月内到岗</Radio>
                        <Radio label="2">在职-考虑机会</Radio>
                        <Radio label="3">在职-暂不考虑</Radio>
                    </RadioGroup>
                </FormItem>
                <FormItem label="工作年限">
                    <Slider v-model="formItem.workingLife" @on-change="workLifeChangeHandle"></Slider>
                </FormItem>
                <FormItem>
                    <Button type="primary" @click="saveEditInfoHandle">保存</Button>
                    <Button type="ghost" style="margin-left: 8px" @click="cancleEditHandle">取消</Button>
                </FormItem>
            </Form>
        </Card>
    </div>
</template>
<script>
import skills from '../libs/skills.json';
export default {
    // 组件挂载完成之后，初始化数据
    created: function() {
        this.formItem = this.getInfo();
    },
    data: () => {
        return {
            cacheKey: 'baseUserInfo',
            status: {
                isEdit: false
            },
            formItem: {
                name: '',
                contactMethods: '',
                jobWant: '',
                salaryExpectation: [6, 30],
                workStatus: '1',
                workingLife: 3
            }
        };
    },
    methods: {
        // 工作状态发生改变
        workStatusChangeHandle: function(val) {
            // this.formItem.workStatus = val;
        },
        // 期望薪资格式化
        salaryExpectationFormat: function(val) {
            return val + 'k';
        },
        // 期望薪资发生改变
        salaryChangeHandle: function(val) {
            // this.formItem.salaryExpectation = val;
        },
        // 工作年限发生改变
        workLifeChangeHandle: function(val) {

        },
        // 编辑信息按钮点击事件
        editInfoHandle: function() {
            this.status.isEdit = true;
        },
        // 取消编辑信息
        cancleEditHandle: function() {
            this.$Modal.confirm({
                title: '提示框',
                content: '<p>取消操作将会丢失编辑的信息</p>',
                onOk: () => {
                    this.status.isEdit = false;
                    this.$Message.info('已取消编辑');
                }
            });
        },
        // 保存信息
        saveEditInfoHandle: function() {
            this.status.isEdit = false;
            this.$Notice.success({
                title: '基础信息保存成功'
            });
            this.setInfo();
        },
        // 保存到缓存中
        setInfo: function() {
            window.localStorage.setItem(this.cacheKey, JSON.stringify(this.formItem));
        },
        // 取缓存中的数据
        getInfo: function() {
            return JSON.parse(window.localStorage.getItem(this.cacheKey));
        }
    },
    computed: {
        // 工作状态
        computedWorkStatus: function() {
            const status = ['离职-随时到岗', '在职-月内到岗', '在职-考虑机会', '在职-暂不考虑'];
            return status[this.formItem.workStatus];
        },
        // 期望薪资
        computedSalaryExpectation: function() {
            return this.formItem.salaryExpectation[0] + '-' + this.formItem.salaryExpectation[1] + 'k';
        },
        // 工作年限
        computedWorkLife: function() {
            return this.formItem.workingLife + '年';
        }
    }
}
</script>


<style scoped lang="sass">
.container {
    background: #eee;
    padding: 20px;
    .info-label{
       width:80px;
       text-align:right;
       display:inline-block;
    }
}
</style>
