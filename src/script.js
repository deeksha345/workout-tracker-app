const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient({
    log: [
      { level: 'warn', emit: 'event' },
      { level: 'info', emit: 'event' },
      { level: 'error', emit: 'event' },
    ],
  })
  
  prisma.$on('warn', (e) => {
    console.log(e)
  })
  
  prisma.$on('info', (e) => {
    console.log(e)
  })
  
  prisma.$on('error', (e) => {
    console.log(e)
  })

async function main() {
    const newWorkout = await prisma.workout.create({
        data: {
            category: 'Push',
            exercises: {
                create: [
                  {
                    name: "pushup",
                    numSets: 5
                  },
                  {
                    name: "headstand",
                    numSets: 3,
                    holdTime: 30
                  }
                ]
            }
        }
    })
    console.log(newWorkout)

    const allWorkouts = await prisma.workout.findMany()
    console.log(allWorkouts.values)
    allWorkouts.forEach(e => {
        console.log(e.exercises)
    })
}

main()
    .catch(e => {
        throw e
    })
    .finally(async () => {
        await prisma.$disconnect()
    })