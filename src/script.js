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
          category: 'Pull',
          exercises: {
            create: [
              {
                name: "pullup",
                numSets: 5
              },
              {
                name: "row",
                numSets: 5
              }
            ]
          }
        },
        include: {
          exercises: true
        }
    })
    console.log(newWorkout)

    const workouts = await prisma.workout.findMany({
      include: {
        exercises: true
      }
    })
    workouts.forEach(element => {
      console.log(element)
  });
}

main()
    .catch(e => {
        throw e
    })
    .finally(async () => {
        await prisma.$disconnect()
    })