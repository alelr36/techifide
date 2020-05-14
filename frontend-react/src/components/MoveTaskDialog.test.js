import React from 'react';
import { Provider } from 'react-redux';
import { render, fireEvent } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import { MoveTaskDialog } from './MoveTaskDialog';

const mockStore = configureStore([])({ tasks: { data: [] } });

test('renders move task dialog component', () => {
    const { getByText } = render(
    <Provider store={mockStore}>
        <MoveTaskDialog isTransitioning transitions={{test: 'test'}} status="test" title="My title" />
    </Provider>);

    const buttonCancel = getByText(/Cancel/i);
    const buttonProceed = getByText(/Proceed/i);

    expect(buttonCancel).toBeInTheDocument();
    expect(buttonProceed).toBeInTheDocument();
});

test('renders move task dialog component with expected text', () => {
    const { getByText } = render(
    <Provider store={mockStore}>
        <MoveTaskDialog isTransitioning transitions={{test: 'test'}} status="test" title="My title" />
    </Provider>);

    const titleElement = getByText(/My title/i);
    const statusElement = getByText(/test/i);

    expect(titleElement).toBeInTheDocument();
    expect(statusElement).toBeInTheDocument();
});

test('renders move task dialog component and calls the close function', () => {
    const handleClose = jest.fn();

    const { getByText } = render(
    <Provider store={mockStore}>
        <MoveTaskDialog
            isTransitioning
            transitions={{test: 'test'}} status="test"
            title="My title"
            handleClose={handleClose} />
    </Provider>);

    expect(handleClose).toHaveBeenCalledTimes(0);
    fireEvent.click(getByText(/Cancel/i));

    expect(handleClose).toHaveBeenCalledTimes(1);
});

test('renders move task dialog component and calls the proceed function', () => {
    const handleProceed = jest.fn();

    const { getByText } = render(
    <Provider store={mockStore}>
        <MoveTaskDialog
            isTransitioning
            transitions={{test: 'test'}} status="test"
            title="My title"
            handleProceed={handleProceed} />
    </Provider>);

    expect(handleProceed).toHaveBeenCalledTimes(0);
    fireEvent.click(getByText(/Proceed/i));

    expect(handleProceed).toHaveBeenCalledTimes(1);
});
