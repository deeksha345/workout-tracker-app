const { workoutList } = require('../database.js')

function getWorkout (parent, args, context, info) {
    let retVal = null;
    workoutList.forEach(e => {
        if (e.id == args.id) {
            retVal = e
        }
    });
    return retVal
}

function listWorkouts () {
    return workoutList
}

module.exports = {
    getWorkout,
    listWorkouts
}