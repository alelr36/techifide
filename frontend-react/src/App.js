import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './redux/configureStore';

import { NewTask } from './components/NewTask';
import { TaskList } from './components/TasksList';
import './App.css';

const store = configureStore();

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<h1>
					APP TITLE
				</h1>
				<NewTask />
				<TaskList />
			</div>
		</Provider>
	);
}

export default App;
