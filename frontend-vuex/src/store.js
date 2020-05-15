import Vue from 'vue';
import vuex from 'vuex';
import axios from 'axios';

Vue.use(vuex, axios);

export default new vuex.Store({
    state: {
        tasks: [{id: 1, title: 'a'}, {id: 2, title: 'b'}]
    },
    actions: {
        fetchTasks() {
            axios
                .get('http://localhost:8000/tasks')
                .then(result => this.commit('SET_TASKS', result.data.tasks))
                .catch(error => {throw error});
        } 
    },
    mutations: {
        SET_TASKS(state, tasks) {
            state.tasks = tasks;
        }
    }
});