import React from 'react';
import { Provider } from 'react-redux';
import { render, fireEvent } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import { TaskItem } from './TaskItem';

const mockStore = configureStore([])({ tasks: { data: [] } });

const pendingTask = {id: 1, title: 'Title 1', description: 'descrip', status: 'pending'};
const progressTask = {id: 2, title: 'Title 1', description: 'descrip', status: 'progress'};
const doneTask = {id: 3, title: 'Title 1', description: 'descrip', status: 'done'};

test('renders task item component with pending data', () => {
    const { getByText } = render(
    <Provider store={mockStore}>
        <TaskItem {...pendingTask} />
    </Provider>);

    const buttonElement = getByText(/move to progress/i);

    expect(buttonElement).toBeInTheDocument();
});

test('renders task item component with progress data', () => {
    const { getByText } = render(
    <Provider store={mockStore}>
        <TaskItem {...progressTask} />
    </Provider>);

    const buttonElement = getByText(/move to done/i);

    expect(buttonElement).toBeInTheDocument();
});

test('renders task item component with done data', () => {
    const { getByText } = render(
    <Provider store={mockStore}>
        <TaskItem {...doneTask} />
    </Provider>);

    const buttonElement = getByText(/can\'t move task/i);

    expect(buttonElement).toBeInTheDocument();
});
