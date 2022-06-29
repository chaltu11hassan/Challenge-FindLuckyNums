//Given a number, n, return an array containing n unique random numbers between 1-10, 
// inclusive. (That is, do not repeat any numbers in the returned list.)

//You can trust that this function will never be called with n < 0 or n > 10.

// build a function that accepts 1 argument of n

function luckyNumbers(n){
// create an array with values 1-10
  let numsArr = [1,2,3,4,5,6,7,8,9,10];
  let luckyNums = [];

  for(let i=0; i<n; i++){
// get a random number between 0-10
    let x = Math.floor(Math.random() * numsArr.length);
    // console.log(x)
// use the random number to access the postion in the range array and get unique value at that position
    luckyNums.push(numsArr[x])
// use splice to remove number from possibleNums array
    numsArr.splice(x,1)
  }
return luckyNums
}
console.log(luckyNumbers(7))
