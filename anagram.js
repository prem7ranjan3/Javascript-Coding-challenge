let checkAG = function (str1,str2){
    if(str1.split('').reverse().join('') == str1){
        console.log("yes its palindrome");
    }
    let str1sort = str1.split('').sort().join('');
    let str2sort = str2.split('').sort().join('');

    if((str1sort.length == str2sort.length)&&(str1sort == str2sort)){
        return true;
    } else {
        return false;
    }
}

console.log(checkAG("levels","elvel"));