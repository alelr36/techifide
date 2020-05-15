<template>
  <div id="app">
    <!-- <HelloWorld tasks={{ this.$store.state.tasks }} /> -->
      <ul>
        <li v-for="task in this.$store.state.tasks"
            v-bind:key="task.id"
            v-bind:class="task.status">
            <div class="tooltip">{{ task.title }} - {{ task.status }}
              <span class="tooltiptext">{{ task.description }}</span>
            </div>
            <button v-bind:disabled="task.status === 'done'" @click="handleStatusChange(task)">Move state</button>
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
  },
  methods: {
    handleStatusChange(task) {
      this.$store.dispatch('changeStatus', task);
    }
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

.tooltip {
  position: relative;
  display: inline-block;
  border-bottom: 1px dotted black;
}

.tooltip .tooltiptext {
  visibility: hidden;
  width: 120px;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;

  /* Position the tooltip */
  position: absolute;
  z-index: 1;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
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
