<template>
  <div>
    <content-component />
  </div>
</template>

<script>
  import ContentComponent from './index.md'
  console.log(ContentComponent);

  export default {
    name: "index",

    components: {
      ContentComponent
    }
  }
</script>

<style scoped>

</style>
