// Code your solution here
// drivers = [
//     'Bobby', 
//     'Sammy', 
//     'Sally',
//     'Annette', 
//     'Sarah', 
//     'Bobby'
// ]

const driversCity = [
    {
        name: 'Sammy',
        hometown: 'New York' } ,
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

function findMatching(arr, query) {
    return arr.filter(function(name) {
        return name.toLowerCase().indexOf(query.toLowerCase()) !== -1
    })
}

// console.log(findMatching(drivers, 'Bobby'))

function fuzzyMatch(arr, query) {
    return arr.filter(function(name) {
        return name.startsWith(query)
    })
}

// console.log(fuzzyMatch(drivers, 'Sa'))
// console.log(fuzzyMatch(drivers, 'Sal')) 

//this works but won't pass the test
let matchName = (arr, query) => arr.filter(e => e.name === query)
matchName(driversCity, 'Bobby')

console.log(matchName(driversCity, 'Bobby'))