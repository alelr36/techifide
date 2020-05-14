import React from 'react';
import { Provider } from 'react-redux';
import { Grid, Typography} from '@material-ui/core';
import configureStore from './redux/configureStore';

import { NewTask } from './components/NewTask';
import { TasksList } from './components/TasksList';
import './App.css';

const store = configureStore();

function App() {
	return (
		<Provider store={store}>
			<Grid className="App">
				<Typography variant="h2" gutterBottom>
					APP TITLE
				</Typography>
				<NewTask />
				<TasksList />
			</Grid>
		</Provider>
	);
}

export default App;
