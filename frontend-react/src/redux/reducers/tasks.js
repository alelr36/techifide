import { handleActions } from 'redux-actions'
import { get } from 'lodash';

const initialState = {
  data: [],
  loading: true,
  error: null
};

//TODO: use lodash get
export default handleActions({
  'fetch_tasks_FULFILLED': (state, action) => ({
    ...state,
    data: get(action, 'payload.data.tasks', [])
  }),
  'create_task_FULFILLED': (state, action) => ({
    ...state,
    data: state.data.concat(get(action, 'payload.data.task'))
  }),
  'update_task_status_FULFILLED': (state, action) => ({
    ...state,
    data: state.data.map(task =>
      task.id !== get(action, 'payload.data.task.id', '')
        ? task
        : {...task, status: get(action, 'payload.data.task.status')})
  }),
}, initialState);
