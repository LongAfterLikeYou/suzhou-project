<template>
    <div>
        <h1>404</h1>
        <button @click="goBack">返回上一个页面</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    methods: {
        goBack (){
            this.$router.go(-1)
        }
    },
}
</script>