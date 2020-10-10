<template>
<div>
    <div>这是组件A</div>
    <router-link to="/b">跳转到b链接</router-link>
    <button @click="btnToBCom">跳转到b链接</button>
    <button @click="getArg">获取参数</button>
    <a-child :toChild="test"></a-child>
</div>
</template>

<script>
import AChild from './a-child.vue'
export default {
    components: {
        AChild
    },
    data() {
        return {
             test:'传入组件内部的参数'
        }
    },
    methods: {
        btnToBCom(){
            this.$router.push({path: "/b"})

    },
    getArg (){
         console.log(this.$route);
        // console.log(this.$route.query);
        console.log(this.$route.params)
    }
}
}
</script>