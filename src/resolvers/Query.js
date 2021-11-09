const { workoutList } = require('../database.js')

function getWorkout (parent, args, context, info) {
    return context.prisma.workout.findUnique({
        where: {
            id: parseInt(args.id)
        }
    })
}

function listWorkouts () {
    return context.prisma.workout.findMany()
}

module.exports = {
    getWorkout,
    listWorkouts
}