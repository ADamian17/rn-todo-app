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
        const items = itemsObject ? Object.keys(itemsObject) : []

        const mapItems = items.map(itemId => {
            return new TaskModel(
                parseDate(itemsObject[itemId].startDate),
                parseDate(itemsObject[itemId].endDate),
                itemsObject[itemId].description,
                itemId
            )
        })

        console.log("Holaitems ", mapItems)
        return callback(mapItems)
    })
}
