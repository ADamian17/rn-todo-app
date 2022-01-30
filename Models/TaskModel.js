export class TaskModel {
  constructor (startdate, enddate, description) {
    this.id = this.generateId()
    this.startdate = startdate;
    this.enddate = enddate;
    this.description = description;
  }


  generateId() {
    return `${Date.now()}`;
  }
}