var words = ["ground", "control", "to", "major", "tom"];


var customMap = function(data, callback){
  var mappedValues = [];
  for (var i = 0; i < data.length; i++){
    var current = data[i];
    var result = callback(current);
    mappedValues.push(result);
  }
  return mappedValues
}

var stringLength = customMap(words, function(n){
  return n.length
})

console.log(stringLength);

// map(words, function(word) {
//   return word.length;
// });
// [6, 7, 2, 5, 3]
