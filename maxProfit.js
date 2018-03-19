var input = [45, 24, 23, 20, 11, 9, 8];
var resultArr = [];

function maxProfit(arr){
  for(var i = 0; i < arr.length; i++){
    for(var j = i + 1; j < arr.length; j++){
      if((arr[j] - arr[i]) > 0){
        resultArr.push(arr[j] - arr[i]);
      }
    }
  }
  resultArr.sort(function(a, b){
    return b - a;
  });
  if(resultArr[0] > 0){
    return resultArr[0];
  }
  return -1;
}

console.log(maxProfit(input));