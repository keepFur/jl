<template>
    <div class="container">
        <Card :bordered="false" v-if="!isEdit">
            <p slot="title">职业技能</p>
            <a href="#" slot="extra" @click.prevent.stop="editSkillsHandle">
                <Icon type="edit"></Icon>
                编辑
            </a>
            <CheckboxGroup v-model="checkedSkills">
                <Checkbox v-for="(skill,index) in checkedSkills" :key="index" :label="skill" disabled>
                    <span>{{skill}}</span>
                </Checkbox>
            </CheckboxGroup>
        </Card>
        <Card v-if="isEdit">
            <p slot="title">职业技能</p>
            <Form :label-width="80">
                <FormItem label="技能标签">
                    <CheckboxGroup v-model="checkedSkills" @on-change="handleChange">
                        <Checkbox v-for="skill in skills" :key="skill.key" :label="skill.value">
                            <span>{{skill.value}}</span>
                        </Checkbox>
                    </CheckboxGroup>
                    <Button icon="ios-plus-empty" type="dashed" size="small" @click="handleAdd">自定义</Button>
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
export default {
    // 维护一个数组，当用户编辑信息的时候，监听change事件，如果是选中的话，则
    created: function() {
        this.checkedSkills = this.getSkills();
    },
    data: function() {
        return {
            isEdit: false,
            cacheKey: 'skillsUser',
            checkedSkills: [],
            skills: [{
                key: 0,
                value: 'js/html/css',
                checked: true,
                checkabled: true
            }, {
                key: 1,
                value: 'bootstrap',
                checked: true,
                checkabled: true
            }, {
                key: 2,
                value: 'angular',
                checked: false,
                checkabled: true
            }, {
                key: 3,
                value: 'vue.js',
                checked: false,
                checkabled: true
            }, {
                key: 4,
                value: 'react.js',
                checked: false,
                checkabled: true
            }, {
                key: 5,
                value: 'node.js',
                checked: false,
                checkabled: true
            }, {
                key: 6,
                value: 'java',
                checked: false,
                checkabled: true
            }, {
                key: 7,
                value: 'php',
                checked: false,
                checkabled: true
            }, {
                key: 8,
                value: 'less',
                checked: false,
                checkabled: true
            }, {
                key: 9,
                value: 'sass',
                checked: false,
                checkabled: true
            }, {
                key: 10,
                value: 'webapck/gulp/grunt',
                checked: false,
                checkabled: true
            }, {
                key: 11,
                value: 'backbone.js',
                checked: false,
                checkabled: true
            }, {
                key: 12,
                value: 'jquery.js',
                checked: false,
                checkabled: true
            }, {
                key: 14,
                value: 'require.js',
                checked: false,
                checkabled: true
            }]
        };
    },
    methods: {
        editSkillsHandle: function() {
            this.isEdit = true;
        },
        getSkills: function() {
            return JSON.parse(window.localStorage.getItem(this.cacheKey));
        },
        setSkills: function() {
            window.localStorage.setItem(this.cacheKey, JSON.stringify(this.checkedSkills));
        },
        // 自定义添加
        handleAdd: function() {
            this.$Modal.confirm({
                render: (h) => {
                    return h('Input', {
                        props: {
                            value: this.value,
                            autofocus: true,
                            placeholder: '技能名称'
                        },
                        on: {
                            input: (val) => {
                                this.value = val;
                            }
                        }
                    });
                },
                onOk:function(){

                },
                onCancel:function(){
                    
                }
            });
        },
        // 按钮发生变化，返回选中的按钮数组
        handleChange: function(checkedSkills) {
            this.checkedSkills = checkedSkills;
        },
        // 保存操作
        saveEditInfoHandle: function() {
            this.isEdit = false;
            this.$Notice.success({
                title: '职业技能保存成功'
            });
            this.setSkills();
        },
        // 取消编辑
        cancleEditHandle: function() {
            this.$Modal.confirm({
                title: '提示框',
                content: '<p>取消操作将会丢失编辑的信息</p>',
                onOk: () => {
                    this.isEdit = false;
                    this.$Message.info('已取消编辑');
                }
            });
        }
    }
}
</script>
<style scoped>
.container {
    background: #eee;
    padding: 20px;
    /* margin-top: 60px; */
}
</style>