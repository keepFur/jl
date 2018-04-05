<template>
    <div class="container">
        <Card :bordered="false" v-if="!isEdit">
            <p slot="title">教育背景</p>
            <a href="#" slot="extra" @click.prevent.stop="editInfoHandle">
                <Icon type="edit"></Icon>
                编辑
            </a>
            <p>
                <label class="info-label">学校：</label>
                <span v-text="formItem.school"></span>
            </p>
            <p>
                <label class="info-label"> 学历：</label>
                <span v-text="formItem.education"></span>
            </p>
            <p>
                <label class="info-label"> 时间：</label>
                <span v-text="formItem.date"></span>
            </p>
            <p>
                <label class="info-label"> 专业：</label>
                <span v-text="formItem.major"></span>
            </p>
            <p>
                <label class="info-label"> 在校经历：</label>
                <span v-text="formItem.associationActivity"></span>
            </p>
        </Card>
        <Card v-if="isEdit">
            <p slot="title">教育背景</p>
            <Form :model="formItem" :label-width="80">
                <FormItem label="学校">
                    <Input v-model="formItem.school"></Input>
                </FormItem>
                <FormItem label="学历">
                    <Select v-model="formItem.education">
                        <Option v-for="education in educations" :value="education.value" :key="education.key" :label="education.value">{{ education.value }}</Option>
                    </Select>
                </FormItem>
                <FormItem label="时间">
                   <Input v-model="formItem.date" placeholder="2014-2018"></Input>
                </FormItem>
                <FormItem label="专业">
                    <Input v-model="formItem.major"></Input>
                </FormItem>
                <FormItem label="在校经历">
                    <Input v-model="formItem.associationActivity" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="尽情的吹吧你就～～～"></Input>
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
    data: function() {
        return {
            isEdit: false,
            cacheKey: 'backgroundInfo',
            educations: [{
                key: 0,
                value: '大专'
            }, {
                key: 1,
                value: '本科'
            }, {
                key: 2,
                value: '研究生'
            }, {
                key: 3,
                value: '博士'
            }, {
                key: 4,
                value: '无限高学历'
            }],
            formItem: {
                school: '',
                education: '大专',
                beginDate: '1990',
                endDate: '2080',
                date:'',
                associationActivity: '尽情地发挥你的想象力吧，欢迎各种风花雪月的故事～～～'
            }
        };
    },
    created: function() {
        if(this.hasCache())
        this.formItem = this.getInfo();
    },
    methods: {
        hasCache: function() {
            return this.getInfo()!=null;
        },
        setInfo: function() {
            window.localStorage.setItem(this.cacheKey, JSON.stringify(this.formItem));
        },
        getInfo: function() {
            return JSON.parse(window.localStorage.getItem(this.cacheKey));
        },
        editInfoHandle: function() {
            this.isEdit = true;
        },
        saveEditInfoHandle: function() {
            this.setInfo();
            this.isEdit = false;
            this.$Notice.success({
                title: '教育背景保存成功'
            });
        },
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
    },
    computed: {
        computedEducation: function() {
            debugger
            return this.educations[this.formItem.education].value;
        }
    }
}
</script>


<style scoped lang="sass">
.container {
    background: #eee;
    padding: 20px;
    .info-label{
        text-align:right;
        display:inline-block;
        width:80px;
    }
}
</style>
