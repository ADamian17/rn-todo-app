export class TaskModel {
  constructor (date, time, description) {
    this.id = this.generateId()
    this.date = date;
    this.time = time;
    this.description = description;
  }


  generateId() {
    return `${Date.now()}`;
  }
}