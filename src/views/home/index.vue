<template>
  <div>
    <h1>{{info}}</h1>
    <router-link to="/about">About</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      info: "My name is barry allen, and i'm the faster man alive!"
    };
  }
};
</script>
<style scoped>
</style>