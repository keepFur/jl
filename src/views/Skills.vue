<template>
    <div class="container">
        <Card :bordered="false">
            <p slot="title">职业技能</p>
            <Tag checkable color="blue">html/css/js</Tag>
            <Tag checkable color="green">java</Tag>
            <Tag checkable color="red">node</Tag>
            <Tag checkable color="yellow">php</Tag>
        </Card>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
.container {
    background: #eee;
    padding: 20px;
    /* margin-top: 60px; */
}
</style>