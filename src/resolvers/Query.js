const { workoutList } = require('../database.js')

function getWorkout (parent, args, context, info) {
    return context.prisma.workout.findUnique({
        where: {
            id: parseInt(args.id)
        },
        include: {
            exercises: true
        }
    })
}

function listWorkouts (prisma, args, context, info) {
    return context.prisma.workout.findMany({
        include: {
            exercises: true
        }
    })
}

module.exports = {
    getWorkout,
    listWorkouts
}