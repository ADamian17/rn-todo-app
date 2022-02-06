import { DataBaseReference } from "../google-services/firebase-connect"
import { TaskModel } from "../Models/TaskModel"
import { parseDate } from "../utils/helper"

export const save = (task) => {
    const db = new DataBaseReference(`tasks/${task.id}`)
    db.save(
      {
        startDate: task.startdate.toString(),
        endDate: task.enddate.toString(),
        description: task.description
      },
      () => console.log('Data set.')
    )
}

export const setupListListener = (callback) => {
    const db = new DataBaseReference(`tasks`)
    db.getListener(itemsObject => {
        const items = itemsObject ? Object.entries(itemsObject) : []

        const mapItems = items.map(item => {
            return new TaskModel(
                parseDate(item[1].startDate),
                parseDate(item[1].endDate),
                item[1].description,
                item[0]
            )
        })

        console.log("Holaitems ", mapItems)
        return callback(mapItems)
    })
}