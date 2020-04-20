import { Todo } from './todo';

describe('Todo', () => {
  it('should create an instance', () => {
    expect(new Todo()).toBeTruthy();
  });

  it('should accept values in the constructor', () => {
    const title = 'Hello';
    const complete = true;
    const todo = new Todo({
      title,
      complete
    });
    expect(todo.title).toEqual(title);
    expect(todo.complete).toEqual(complete);
  });
});
