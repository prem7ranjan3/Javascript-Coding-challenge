
let check = function (arr,target){
    let hold = [];
    for(let i = 0; i<arr.length;i++){
        for(let j = 1; j<i; j++){
            if(arr[i] == target-arr[j]){
                hold.push(arr[i]);
                hold.push(arr[j]);
            }
        }
    }
    return hold;
}
console.log(check([14,13,6,7,8,10,1,2],8));

// O(n)