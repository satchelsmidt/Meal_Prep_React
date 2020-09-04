//This is required because apparently neither moment.js nor the native JS date object allow for the adding of variable amounts of days. Will reformat time input to be correct at a later date.

Date.prototype.addDays = function (days) {
    let date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}

export const createEvents=(data, recipes)=> {
    let events = []
    let recipeTitles = recipes.map(recipe => {return recipe.recipe_title})

        for (let i = 0; i < Object.keys(data).length; i++) {

            let currentDay = data[i]

            switch (i) {
                case 0:
                    for (let timeSlot in currentDay) {
                        if (timeSlot !== currentDay[timeSlot]) {
                            let startTimeDate = new Date(timeSlot)
                            let endTimeDate = new Date(currentDay[timeSlot])

                            let copyStart = startTimeDate.addDays(0)
                            let copyEnd = endTimeDate.addDays(0)

                            let startTime = copyStart
                            let endTime = copyEnd
                            let event = {
                                title: 'Time to cook: ' + recipeTitles.shift() || 'No recipe for this time slot',
                                start: startTime,
                                end: endTime
                            }

                            events.push(event)
                        }
                    }
                    break
                case 1:
                    for (let timeSlot in currentDay) {
                        if (timeSlot !== currentDay[timeSlot]) {
                            let startTimeDate = new Date(timeSlot)
                            let endTimeDate = new Date(currentDay[timeSlot])

                            let copyStart = startTimeDate.addDays(1)
                            let copyEnd = endTimeDate.addDays(1)

                            let startTime = copyStart
                            let endTime = copyEnd
                            let event = {
                                title: recipeTitles.shift(),
                                start: startTime,
                                end: endTime
                            }
                            events.push(event)
                        }
                    }
                    break
                case 2:
                    for (let timeSlot in currentDay) {
                        if (timeSlot !== currentDay[timeSlot]) {
                            let startTimeDate = new Date(timeSlot)
                            let endTimeDate = new Date(currentDay[timeSlot])

                            let copyStart = startTimeDate.addDays(2)
                            let copyEnd = endTimeDate.addDays(2)

                            let startTime = copyStart
                            let endTime = copyEnd
                            let event = {
                                title: recipeTitles.shift(),
                                start: startTime,
                                end: endTime
                            }
                            events.push(event)
                        }
                    }
                    break
                case 3:
                    for (let timeSlot in currentDay) {
                        if (timeSlot !== currentDay[timeSlot]) {
                            let startTimeDate = new Date(timeSlot)
                            let endTimeDate = new Date(currentDay[timeSlot])

                            let copyStart = startTimeDate.addDays(3)
                            let copyEnd = endTimeDate.addDays(3)

                            let startTime = copyStart
                            let endTime = copyEnd
                            let event = {
                                title: recipeTitles.shift(),
                                start: startTime,
                                end: endTime
                            }
                            events.push(event)
                        }
                    }
                    break
                case 4:
                    for (let timeSlot in currentDay) {
                        if (timeSlot !== currentDay[timeSlot]) {
                            let startTimeDate = new Date(timeSlot)
                            let endTimeDate = new Date(currentDay[timeSlot])

                            let copyStart = startTimeDate.addDays(4)
                            let copyEnd = endTimeDate.addDays(4)

                            let startTime = copyStart
                            let endTime = copyEnd
                            let event = {
                                title: recipeTitles.shift(),
                                start: startTime,
                                end: endTime
                            }
                            events.push(event)
                        }
                    }
                    break
                case 5:
                    for (let timeSlot in currentDay) {
                        if (timeSlot !== currentDay[timeSlot]) {
                            let startTimeDate = new Date(timeSlot)
                            let endTimeDate = new Date(currentDay[timeSlot])

                            let copyStart = startTimeDate.addDays(5)
                            let copyEnd = endTimeDate.addDays(5)

                            let startTime = copyStart
                            let endTime = copyEnd
                            let event = {
                                title: recipeTitles.shift(),
                                start: startTime,
                                end: endTime
                            }
                            events.push(event)
                        }
                    }
                    break
                case 6:
                    for (let timeSlot in currentDay) {
                        if (timeSlot !== currentDay[timeSlot]) {
                            let startTimeDate = new Date(timeSlot)
                            let endTimeDate = new Date(currentDay[timeSlot])

                            let copyStart = startTimeDate.addDays(6)
                            let copyEnd = endTimeDate.addDays(6)

                            let startTime = copyStart
                            let endTime = copyEnd
                            let event = {
                                title: recipeTitles.shift(),
                                start: startTime,
                                end: endTime
                            }
                            events.push(event)
                        }
                    }
                    break
                case 7:
                    for (let timeSlot in currentDay) {
                        if (timeSlot !== currentDay[timeSlot]) {
                            let startTimeDate = new Date(timeSlot)
                            let endTimeDate = new Date(currentDay[timeSlot])

                            let copyStart = startTimeDate.addDays(7)
                            let copyEnd = endTimeDate.addDays(7)

                            let startTime = copyStart
                            let endTime = copyEnd
                            let event = {
                                title: recipeTitles.shift(),
                                start: startTime,
                                end: endTime
                            }
                            events.push(event)
                        }
                    }
                    break
            }
        }
        return events
}
