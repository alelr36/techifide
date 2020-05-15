<template>
  <div class="hello">
    <h1>Testing</h1>
    <div v-for="item in tasks" :key="item.id">
      {{ item.id }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    tasks: Array
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  border: 1px solid red;
}
</style>
