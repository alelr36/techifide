import React from 'react';
import { Provider } from 'react-redux';
import { render, fireEvent } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import { NewTask } from './NewTask';

const mockStore = configureStore([])({ tasks: { data: [] } });

test('renders new task component', () => {
    const { getByText } = render(
    <Provider store={mockStore}>
        <NewTask />
    </Provider>);

    const buttonElement = getByText(/New Task/i);

    expect(buttonElement).toBeInTheDocument();
});

test('renders new task form when new task button is clicked', () => {
    const { getByText, getByLabelText } = render(
    <Provider store={mockStore}>
        <NewTask />
    </Provider>);

    fireEvent.click(getByText(/New Task/i));
    const titleInput = getByLabelText(/Title/i);
    const descriptionInput = getByLabelText(/Description/i);
    const submitInput = getByText(/Create/i)
    const cancelInput = getByText(/Cancel/i)

    expect(titleInput).toBeInTheDocument();
    expect(descriptionInput).toBeInTheDocument();
    expect(submitInput).toBeInTheDocument();
    expect(cancelInput).toBeInTheDocument();
});

test('renders new task form with empty values and allows to modify them', () => {
    const { getByText, getByLabelText } = render(
    <Provider store={mockStore}>
        <NewTask />
    </Provider>);

    fireEvent.click(getByText(/New Task/i));
    const titleInput = getByLabelText(/Title/i);
    const descriptionInput = getByLabelText(/Description/i);

    expect(titleInput).toBeInTheDocument();
    expect(descriptionInput).toBeInTheDocument();

    fireEvent.change(titleInput, { target: { value: 'Title to test' } });
    fireEvent.change(descriptionInput, { target: { value: 'Description to test' } });

    expect(titleInput.value).toBe('Title to test')
    expect(descriptionInput.value).toBe('Description to test')
});
