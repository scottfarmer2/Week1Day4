const user_list_1 = [
{
  name: 'Jane Doe',
  hobbies: ['soccer', 'boxing']
}, {
  name: 'John Doe',
  hobbies: ['soccer', 'boxing']
},
]

const countHobbies =function(user){
  return user.hobbies.length;
}

console.log(user_list_1.map(countHobbies));


//==> [2,1]



// const users_list_2 = [
// {
//   name: 'Jane Do',
//   hobbies: ['soccer', 'boxing']
// },
// {
//   name: 'John Do',
//   hobbies: ['soccer', 'boxing']
// },
// ]

// const printUserHobbies = function(user){
//     console.log(user.name + "'s hobbies are: " + user.hobbies);
// }

//   users_list_1.forEach(printUserHobbies);
//   users_list_2.forEach(printUserHobbies);

