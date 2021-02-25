let bit = "11111101011111111011111111111101";
let  count = 0;
let countOne = bit.split('');
countOne.forEach(function (val,index){
    if(val == 1)
    {
        //console.log("search element found at this position",index)
        count++;
    }
});
console.log("actual input bit is ->",bit)
console.log("number of 1 Bits in the input is ->",count);
let reverseBit = countOne.reverse().join('');
console.log("reverse bit is ->",reverseBit)


