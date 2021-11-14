const { workoutList } = require('../database.js')

function createWorkout (parent, args, context, info) {
    let createdWorkout = context.prisma.workout.create({
        data: {
            category: args.category,
            exercises: {
                create: args.exercises
            }
        },
        include: {
            exercises: true
        }
    })
    return createdWorkout
}

function updateWorkout (parent, args, context, info) {
    let updatedWorkout = context.prisma.workout.update({
        where: {
            id: parseInt(args.id)
        },
        data: {
            category: args.category,
            exercises: {
                updateMany: args.exercises
            }
        },
        include: {
            exercises: true
        }
    })
    return updatedWorkout
}

function deleteWorkout (parent, args, context, info) {
    let deletedWorkout = context.prisma.workout.delete({
        where: {
            id: parseInt(args.id)
        }
    })
    return deletedWorkout
}

module.exports = {
    createWorkout,
    updateWorkout,
    deleteWorkout
}