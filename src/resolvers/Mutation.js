const { workoutList } = require('../database.js')

function createWorkout (parent, args, context, info) {
    let idCount = workoutList.length

    const workout = {
        id: `${idCount++}`,
        category: args.category,
        exercises: args.exercises
    }
    workoutList.push(workout)
    return workout
}

function updateWorkout (parent, args, context, info) {
    let retVal = null;
    workoutList.forEach(element => {
        if (element.id == args.id) {
            if (args.category != null) element.category = args.category
            if (args.exercises != null && args.exercises.length != 0) element.exercises = args.exercises
            retVal = element
        }
    });
    return retVal
}

function deleteWorkout (parent, args, context, info) {
    let retVal = null;
    let index = 0
    workoutList.forEach(element => {
        if (element.id == args.id) {
            retVal = element
            workoutList.splice(index, 1)
        }
        index++;
    });
    return retVal
}

module.exports = {
    createWorkout,
    updateWorkout,
    deleteWorkout
}