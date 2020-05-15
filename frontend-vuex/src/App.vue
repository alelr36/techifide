<template>
  <div id="app">
    <!-- <HelloWorld tasks={{ this.$store.state.tasks }} /> -->
    <ul id="example-2">
      <li v-for="task in this.$store.state.tasks" v-bind:key="task.id" v-bind:class="task.status">
        {{ task.title }} - {{ task.id }}
      </li>
    </ul>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  mounted() {
    this.$store.dispatch('fetchTasks');
  },
  components: {
    // HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

li {
  margin: 10px;
}

li.pending {
    border: 1px solid orange;
    background-color: darksalmon;
}
li.progress {
    border: 1px solid green;
    background-color: rgb(146, 199, 154);
}
li.done {
    border: 1px solid black;
    text-decoration: line-through;
}
</style>
