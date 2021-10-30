// dummy data
let workoutList = [
    {
        id: "0",
        category: "Push",
        exercises: [
            {
                name:"pushup",
                numSets: 5
            },
            {
                name:"headstand",
                numSets: 3,
                holdTime: 30 // { duration: 30, unit: "seconds"}
            }
        ]
    },
    {
        id: "1",
        category: "Pull",
        exercises: [
            {
                name:"pullup",
                numSets: 5
            }
        ]
    },
    {
        id: "2",
        category: "Legs",
        exercises: [
            {
                name:"squats",
                numSets: 5
            },
            {
                name:"deadlifts",
                numSets: 5
            }
        ]
    }
]

module.exports = {
    workoutList
}