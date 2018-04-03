<template>
    <Affix>
        <Menu mode="horizontal" :theme="theme" active-name="home" @on-select='menuItemSelectHandle'>
            <MenuItem name="home">
            <Icon type="home"></Icon>
            主页
            </MenuItem>
            <MenuItem name="baseinfo">
            <Icon type="person"></Icon>
            基础信息
            </MenuItem>
            <MenuItem name="skills">
            <Icon type="wand"></Icon>
            职业技能
            </MenuItem>
            <MenuItem name="workexperience">
            <Icon type="cube"></Icon>
            工作经历
            </MenuItem>
            <MenuItem name="projectexprience">
            <Icon type="trophy"></Icon>
            项目经验
            </MenuItem>
            <MenuItem name="educationalbackground">
            <Icon type="university"></Icon>
            教育背景
            </MenuItem>
            <MenuItem name="personalevaluation">
            <Icon type="eye"></Icon>
            个人评价
            </MenuItem>
            <Submenu name="download">
                <template slot="title">
                    <Icon type="archive"></Icon>
                    下载简历为
                </template>
                <MenuGroup title="文档">
                    <MenuItem name="8-1">DOC</MenuItem>
                    <MenuItem name="8-2">PDF</MenuItem>
                </MenuGroup>
                <MenuGroup title="图片">
                    <MenuItem name="8-3">PNG</MenuItem>
                    <MenuItem name="8-4">JPG</MenuItem>
                </MenuGroup>
            </Submenu>
            <UserInfo></UserInfo>
        </Menu>
    </Affix>
</template>
<script>
import UserInfo from './UserInfo.vue';
export default {
    data() {
        return {
            theme: 'primary'
        }
    },
    methods: {
        menuItemSelectHandle: function(menuItemName) {
            this.$router.push('/' + menuItemName);
        }
    },
    components:{
        UserInfo
    }
}
</script>


<style scoped>
a {
    color: #fff;
}

a:hover {
    color: #fff;
}
</style>
