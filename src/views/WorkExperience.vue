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
        <Card :bordered="false" v-if="!isEdit">
            <p slot="title">工作经历</p>
            <a href="#" slot="extra" @click.prevent.stop="editSkillsHandle">
                <Icon type="edit"></Icon>
                编辑
            </a>
            <Timeline>
                <TimelineItem>
                    <p class="time">1976年</p>
                    <p class="content">Apple I 问世</p>
                </TimelineItem>
                <TimelineItem>
                    <p class="time">1984年</p>
                    <p class="content">发布 Macintosh</p>
                </TimelineItem>
                <TimelineItem>
                    <p class="time">2007年</p>
                    <p class="content">发布 iPhone</p>
                </TimelineItem>
                <TimelineItem>
                    <p class="time">2010年</p>
                    <p class="content">发布 iPad</p>
                </TimelineItem>
                <TimelineItem>
                    <p class="time">2011年10月5日</p>
                    <p class="content">史蒂夫·乔布斯去世</p>
                </TimelineItem>
            </Timeline>
        </Card>
        <Card v-if="isEdit">

        </Card>
    </div>
</template>
<script>
export default {
    data: function() {
        return {
            isEdit: false
        };
    },
    methods: {
        editSkillsHandle: function() {

        }
    }
}
</script>
