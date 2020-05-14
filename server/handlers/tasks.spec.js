const { queries, transitions, fetchTasks, createTask, updateTaskStatus } = require('./tasks');

const mockedPool = {
    query: jest.fn()
};

const mockedAnonymousFunction = expect.any(Function);

describe('tasks', () => {
    beforeEach(() => {
        mockedPool.query.mockClear();
    });

    describe('fetchTasks', () => {        
        it('call query', () => {
            expect(mockedPool.query).toHaveBeenCalledTimes(0);

            const fetchTasksTest = fetchTasks(mockedPool);

            fetchTasksTest();
            expect(mockedPool.query).toHaveBeenCalledTimes(1);
            expect(mockedPool.query).toHaveBeenCalledWith(queries.fetchTasks, mockedAnonymousFunction);
        });
    });

    describe('createTask', () => {
        it('should return 3 tasks when', () => {
            expect(mockedPool.query).toHaveBeenCalledTimes(0);

            const expectedNewTask = {test: 'task'};
            const createTaskTest = createTask(mockedPool);

            createTaskTest({body: expectedNewTask});
            expect(mockedPool.query).toHaveBeenCalledTimes(1);
            expect(mockedPool.query).toHaveBeenCalledWith(queries.createTask, expectedNewTask, mockedAnonymousFunction);
        });
    });

    describe('updateTaskStatus', () => {
        it('should return 3 tasks when', () => {
            expect(mockedPool.query).toHaveBeenCalledTimes(0);

            const mockedTask = { status: 'pending' };
            const mockedParams = { task_id: 1 };
            const expectedParams = [transitions[mockedTask.status], mockedParams.task_id];
            const updateTaskStatusTest = updateTaskStatus(mockedPool);

            updateTaskStatusTest({params: mockedParams, body: mockedTask});
            expect(mockedPool.query).toHaveBeenCalledTimes(1);
            expect(mockedPool.query).toHaveBeenCalledWith(queries.updateTaskStatus, expectedParams, mockedAnonymousFunction);
        });
    });
});
  