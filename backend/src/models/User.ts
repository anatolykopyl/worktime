import Task from './Task.ts';

export default class User {
  userId: string;
  authProvider: string;
  tasks: Array<Task>;
  categories: Array<string>;
  updatedAt: Date;

  constructor({
    userId,
    authProvider
  }: {
    userId: string,
    authProvider: string
  }) {
    this.userId = userId;
    this.authProvider = authProvider;
    this.tasks = [];
    this.categories = [];
    this.updatedAt = new Date();
  }

  addTask(task: Task) {
    this.tasks.push(task);
  }

  removeTask(taskName: string) {
    this.tasks = this.tasks.filter((task) => task.name !== taskName);
  }
}
