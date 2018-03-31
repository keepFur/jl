<template>
    <Menu mode="horizontal" :theme="theme1" active-name="1">
        <MenuItem name="1">
        <Icon type="ios-paper"></Icon>
        <router-link :to="{path:'/'}"> 综合信息 </router-link>
        </MenuItem>
        <MenuItem name="2">
        <Icon type="ios-people"></Icon>
        <router-link :to='{path:"/baseinfo"}'> 基础信息</router-link>
        </MenuItem>
        <MenuItem name="3">
        <Icon type="settings"></Icon>
        <router-link to="/skills"> 职业技能</router-link>
        </MenuItem>
        <MenuItem name="4">
        <Icon type="settings"></Icon>
        工作经历
        </MenuItem>
        <Submenu name="4">
            <template slot="title">
                <Icon type="stats-bars"></Icon>
                <router-link to="/workexperience">工作经历</router-link>
            </template>
            <MenuGroup title="主要">
                <MenuItem name="4-1">工作经历1</MenuItem>
                <MenuItem name="4-2">工作经历2</MenuItem>
                <MenuItem name="4-3">工作经历3</MenuItem>
            </MenuGroup>
            <MenuGroup title="次要">
                <MenuItem name="4-4">工作经历3</MenuItem>
                <MenuItem name="4-5">工作经历4</MenuItem>
            </MenuGroup>
        </Submenu>
        <Submenu name="5">
            <template slot="title">
                <Icon type="stats-bars"></Icon>
                项目经验
            </template>
            <MenuGroup title="主要">
                <MenuItem name="5-1">项目1</MenuItem>
                <MenuItem name="5-2">项目2</MenuItem>
                <MenuItem name="5-3">项目3</MenuItem>
            </MenuGroup>
            <MenuGroup title="次要">
                <MenuItem name="5-4">项目4</MenuItem>
                <MenuItem name="5-5">项目5</MenuItem>
            </MenuGroup>
        </Submenu>
        <Submenu name="6">
            <template slot="title">
                <Icon type="stats-bars"></Icon>
                教育背景
            </template>
            <MenuGroup title="主要">
                <MenuItem name="6-1">教育经历1</MenuItem>
                <MenuItem name="6-2">教育经历2</MenuItem>
            </MenuGroup>
            <MenuGroup title="次要">
                <MenuItem name="6-3">教育经历3</MenuItem>
            </MenuGroup>
        </Submenu>
        <MenuItem name="7">
        <Icon type="settings"></Icon>
        个人评价
        </MenuItem>
    </Menu>
</template>
<script>
export default {
    data() {
        return {
            theme1: 'primary'
        }
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
