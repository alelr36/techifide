import Vue from 'vue';
import vuex from 'vuex';
import axios from 'axios';
import qs from 'qs';
import { get } from 'lodash';

Vue.use(vuex, axios);

export default new vuex.Store({
    state: {
        tasks: []
    },
    actions: {
        fetchTasks() {
            axios
                .get('http://localhost:8000/tasks')
                .then(result => this.commit('SET_TASKS', result.data.tasks))
                .catch(error => {throw error});
        },
        changeStatus({state: {tasks}}, {id, title, description, status}) {
            axios
                .post(`http://localhost:8000/tasks/${id}/status`, qs.stringify({id, title, description, status}))
                .then(result => this.commit('SET_TASKS', tasks.map(task =>
                    task.id !== get(result, 'data.task.id', '')
                    ? task
                    : {...task, status: get(result, 'data.task.status')}
                )))
                .catch(error => {throw error});
        }
    },
    mutations: {
        SET_TASKS(state, tasks) {
            state.tasks = tasks;
        }
    }
});
//    data: state.data.concat(get(action, 'payload.data.task'))
