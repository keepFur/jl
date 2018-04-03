<template>
    <div>
        <Header></Header>
        <div class="content">
            <router-view></router-view>
        </div>
        <Footer></Footer>
<BackToTop></BackToTop>
    </div>
</template>
<script>
import Header from './views/Header';
import Footer from './views/Footer';
import BackToTop from './views/BackToTop';
export default {
    data() {
        return {

        };
    },
    mounted() {

    },
    beforeDestroy() {

    },
    methods: {

    },
    components: {
        Header,
        Footer,
        BackToTop
    }
};
</script>

<style scoped>
a {
    color: #fff;
}

.content {
    /* margin-top: 60px; */
     margin-bottom: 60px; 
}
</style>
