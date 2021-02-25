
let findMax =  function (arr) {
    let maxr = arr[0].length;
    let hold = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length < maxr) {
            maxr = arr[i].length;
            hold = arr[i];
        }
    }return hold;
}
console.log(findMax(["prem","vicky","fg","premran","pre"]));