import { Todo } from './todo';

describe('Todo', () => {
  it('should create an instance', () => {
    expect(new Todo()).toBeTruthy();
  });

  it('should accept values in the constructor', () => {
    let title = 'Hello', complete = true;
    let todo = new Todo({
      title: title,
      complete: complete
    });
    expect(todo.title).toEqual(title);
    expect(todo.complete).toEqual(complete);
  });
});
