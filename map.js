var user_list_1 = [
{
  name: 'Jane Doe',
  hobbies: ['soccer', 'boxing']
}, {
  name: 'John Doe',
  hobbies: ['soccer', 'boxing']
},
]

var nums = [24, 12, 8.1];

var customMap = function(data, callback){
  var mappedValues = [];
  for(let i = 0; i < data.length; i++){
    var current = data[i];
    var result = callback(current);
    mappedValues.push(result);
  }
  return mappedValues;
}

var doubles = customMap(nums, function(n){
  return n * 2;
});

// or with build it JS array methods which accepts a callback
var countHobbies = function(user){
  return user.hobbies.length;
}
users_list_1.map(countHobbies);
// var countHobbies =function(user){
//   return user.hobbies.length;
// }

// console.log(user_list_1.map(countHobbies));


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

