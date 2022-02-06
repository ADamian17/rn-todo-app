
export class TaskModel {
  constructor (startdate, enddate, description, id) {
    this.id = id ? id : this.generateId()
    this.startdate = startdate;
    this.enddate = enddate;
    this.description = description;
  }


  generateId() {
    return `${Date.now()}`;
  }
}