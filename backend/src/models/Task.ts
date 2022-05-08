export default class Task {
  name: string;
  startedAt?: Date;
  running: boolean;

  constructor({ 
    name,
    startedAt,
    totalTime,
    category
  }: { 
    name: string,
    startedAt?: Date,
    totalTime: number,
    category: string | null
  }) {
    this.name = name;
    this.startedAt = startedAt;
    this.running = false
  }
}
