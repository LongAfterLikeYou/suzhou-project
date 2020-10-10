<template>
    <div>
        <div class="box">
            这是子组件
            {{toChild}}
        </div>
    </div>
</template>

<script>
export default {
    props:['toChild'],
    data () {
        return {
            
        }
    },
    mounted () {
        
    }
}
</script>

<style scoped>
    .box{
        width: 100px;
        height: 100px;
        font-size: 10px;
        background: red;
        color: pink;
    }
</style>