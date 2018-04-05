<template>
    <div class="container">
        <Card :bordered="false" v-if="!isEdit">
            <p slot="title">个人评价</p>
            <a href="#" slot="extra" @click.prevent.stop="editSkillsHandle">
                <Icon type="edit"></Icon>
                编辑
            </a>
            <p v-text="formItem.eval"></p>
        </Card>
        <Card v-if="isEdit">
            <p slot="title">个人评价</p>
            <Form :model="formItem" :label-width="80">
                <FormItem label="个人评价">
                    <Input v-model="formItem.eval" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="尽情的吹吧你就～～～"></Input>
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
            cacheKey: 'evalUser',
            isEdit: false,
            formItem: {
                eval: '还是沙发，快来占座吧～～～'
            }
        };
    },
    created: function() {
        this.formItem = this.getInfo();
    },
    methods: {
        setInfo: function() {
            window.localStorage.setItem(this.cacheKey, JSON.stringify(this.formItem));
        },
        getInfo: function() {
            return JSON.parse(window.localStorage.getItem(this.cacheKey));
        },
        editSkillsHandle: function() {
            this.isEdit = true;
        },
        saveEditInfoHandle: function() {
            this.setInfo();
            this.isEdit = false;
            this.$Notice.success({
                title: '骚年，你的个人评价已被载入史册'
            });
        },
        cancleEditHandle: function() {
            this.isEdit = false;
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
