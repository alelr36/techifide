import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import App from './App';

const mockStore = configureStore([])({ tasks: { data: [] } });

// jest.mock('./redux/configureStore', () => () => ({
//     configureStore: () => ({
//         getState: ({ tasks: { data: [] } }),
//     })
// }));

test('renders title, new task component and list of tasks component', () => {    
    // const { getByText } = render(<Provider store={mockStore}><App /></Provider>);
    // const titleElement = getByText(/APP TITLE/i);
    // expect(titleElement).toBeInTheDocument();
});
  
  