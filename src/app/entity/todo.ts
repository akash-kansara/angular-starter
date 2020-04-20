export class Todo {
  id: number;
  title = '';
  complete = false;

  constructor(values: object = {}) {
    Object.assign(this, values);
  }
}