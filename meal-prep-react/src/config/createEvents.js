//This is required because apparently neither moment.js nor the native JS date object allow for the adding of variable amounts of days. Will reformat time input to be correct at a later date.
// import moment from 'moment'

/*eslint no-extend-native: ["error", { "exceptions": ["Date"] }]*/
Date.prototype.addDays = function (days) {
    let date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}

export const createEvents = (data, recipes) => {
    let events = []
    let recipeTitles = recipes.map(recipe => { return recipe.recipe_title })
    // let recipeTimes = recipes.map(recipe => { return recipe.recipe_total_time })

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

                        let currentRecipe = recipeTitles.length > 0 ?  recipeTitles.pop() : 'No recipe for this time slot';

                        //TODO: add logic to place events more accurately
                        //required logic: 
                        //find diff between start and end of timeslot. 
                        //loop through recipetimes and grab first one that fits within slot
                        //slice recipetitles index at same spot as times (should be same)
                        //include time and title in description

                        // let momentStart = moment(startTime)
                        // let momentEnd = moment(endTime)

                        // let totalTime = momentEnd.diff(momentStart, 'minutes')

                        // console.log('this is the total time of first slot: ', totalTime)
                        // console.log('this is the total cook time of first recipe: ', recipeTimes.shift())
                        // console.log('our current recipes: ', recipeTitles)
                        // console.log('recipes title length: ', recipeTitles.length)

                        let event = {
                            title: currentRecipe,
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

                        let currentRecipe = recipeTitles.length > 0 ?  recipeTitles.pop() : 'No recipe for this time slot';
                        
                        let event = {
                            title: currentRecipe,
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

                        let currentRecipe = recipeTitles.length > 0 ?  recipeTitles.pop() : 'No recipe for this time slot';

                        let event = {
                            title: currentRecipe,
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

                        let currentRecipe = recipeTitles.length > 0 ?  recipeTitles.pop() : 'No recipe for this time slot';

                        let event = {
                            title: currentRecipe,
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

                        let currentRecipe = recipeTitles.length > 0 ?  recipeTitles.pop() : 'No recipe for this time slot';

                        let event = {
                            title: currentRecipe,
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

                        let currentRecipe = recipeTitles.length > 0 ?  recipeTitles.pop() : 'No recipe for this time slot';

                        let event = {
                            title: currentRecipe,
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

                        let currentRecipe = recipeTitles.length > 0 ?  recipeTitles.pop() : 'No recipe for this time slot';

                        let event = {
                            title: currentRecipe,
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

                        let currentRecipe = recipeTitles.length > 0 ?  recipeTitles.pop() : 'No recipe for this time slot';

                        let event = {
                            title: currentRecipe,
                            start: startTime,
                            end: endTime
                        }
                        events.push(event)
                    }
                }
                break
            default:
                return
        }
    }
    return events
}
