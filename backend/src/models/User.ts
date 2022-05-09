import Task from './Task.ts';

export default class User {
  id: string;
  providerId: string;
  authProvider: string;
  tasks: Array<Task>;
  categories: Array<string>;
  updatedAt: Date;

  constructor({
    providerId,
    authProvider,
    tasks,
    categories,
    updatedAt
  }: {
    providerId: string,
    authProvider: string,
    tasks?: Array<Task>,
    categories?: Array<string>,
    updatedAt?: Date | string
  }) {
    this.providerId = providerId;
    this.authProvider = authProvider;
    this.id = `${providerId}@${authProvider}`;
    this.tasks = tasks ?? [];
    this.categories = categories ?? [];
    if (updatedAt instanceof Date) {
      this.updatedAt = updatedAt;
    } else if (updatedAt) {
      this.updatedAt = new Date(updatedAt);
    } else {
      this.updatedAt = new Date();
    }
  }

  addTask(task: Task) {
    this.tasks.push(task);
  }

  removeTask(taskName: string) {
    this.tasks = this.tasks.filter((task) => task.name !== taskName);
  }
}