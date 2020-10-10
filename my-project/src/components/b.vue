<template>
  <div>
    <div>这是组件b</div>
    <router-link to="/a">跳转到A链接</router-link>
    <button @click="btnToAcom">跳转到A链接</button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    btnToAcom() {
        // this.$router.push({path: "/a",query:{name: 'james',age: '18',sex: '男'}})
        this.$router.push({name:"a",params:{newName:"july",newAge:"20"}})

    },
  },
};
</script>
