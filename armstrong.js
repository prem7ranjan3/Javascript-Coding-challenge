//153 = (1*1*1)+(5*5*5)+(3*3*3)

let armstrong = (a) => {
    let hold = a + '';
    let power = hold.length;
    let sum = 0;
    for (let i = 0; i< hold.length; i++){
        sum += Math.pow(Number(hold[i]),power);
        console.log(sum);
        //console.log(a);
    }
    return sum == a;

}


console.log(armstrong(153));