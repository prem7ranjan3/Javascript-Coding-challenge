let arr = [[1, 2],[3, 4, 5], [6, 7, 8, 9],10,11];
// let hold = [].concat.apply([],arr);
//let hold = [].concat(...arr);
let hold = [];

for (let i = 0; i<arr.length; i++){
    for (let j=i; j<i; j++){
      hold.push(arr[i]);
       hold.push(arr[j]);
        console.log(hold);

    }
 }
