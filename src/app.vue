<template>
    <div>
        <Header></Header>
        <router-view></router-view>
        <Footer></Footer>
    </div>
</template>
<script>
import Header from './views/Header';
import Footer from './views/Footer';
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
        components:{
            Header,
            Footer
        }
    };
</script>

<style scoped>
a{
    color: #fff;
}
</style>
