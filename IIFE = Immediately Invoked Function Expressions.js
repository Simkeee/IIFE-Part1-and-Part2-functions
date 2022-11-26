// 1. Write IIFE that replaces the first and the last element of the given array and prints out its
// elements.
// Input array: [4, 5, 11, 9]
// Output array: [ 9, 5, 11, 4]
var arr=[4, 5, 11, 9];
(function (arr) {
    var a = arr[0];
    arr[0] = arr[arr.length-1];
    arr[arr.length-1] = a;
    console.log("1. " + arr);
})(arr);

// 2. Write IIFE that calculates the surface area of the given rectangle with sides a and b.
// Input: 4 5
// Output: 20
var a=5;
var b=4;
(function (a,b) {
    var result = a*b;
    console.log("1. " + result);
})("2. " + a,b);


// 3. Write IIFE that replaces all appearances of the letters m or M with * and returns the
// number of replacements.
// Input: prograMming
// Output: progra**ing, 2
var input1="prograMming";
(function () {
    var niz = input1;
    var niz2 = [];
    var niz3 = [];
    var brojac = 0;
    for (let i = 0; i < niz.length; i++) {
        if(niz[i] ==='M'|| niz[i] ==='m'){
        brojac++;
    }
    niz2=niz.replaceAll('M','*');
    niz3=niz2.replaceAll('m','*');
    }
     console.log("3. "+niz3,brojac);
})(input1);


// 4. Write a function with parameters name and surname that returns a function that
// suggests an email in the form name.surname@gmail.com.
// Input: pera peric
// Output: pera.peric@gmail.com
(function (name,surname) {
    var email1=name+'.'+surname+'@gmail.com.';
    console.log("4. " + email1);
})('pera', 'peric');

// 5. Write a function that returns a function that calculates a decimal value of the given octal
// number.
// Input: 034
// Output: 28
(function (numbOk) {
   var numbOk1=numbOk.toString().split('').reverse().join('')
    var numbDec=0;
    var niz=[];
for (let i = 0; i < numbOk1.length; i++) {
    parseInt (numbOk1[i]);
    numbDec+=numbOk1[i]*Math.pow(8,i);
}
console.log("5. " + numbDec);
})(34);// ukoliko stavimo '0' kao prvi broj nekog broja program zna da je u pitanju oktalni i sam ga prevede u decimalni
//drugi nacin bi bio sa parseInt(broj,8)

// 6. Write a function that checks if a given string is valid password. The password is valid if it
// is at least 6 characters long and contains at least one digit. The function should receive
// two callbacks named successCallback and errorCallback that should be called in case
// password is correct or invalid.
// Input: JSGuru
// Output: Your password is invalid!
// Input: JSGuru123
// Output: Your password is cool!
(function (password) {
    var brojac = 0;
    var message = "Your password is cool!";
    for (let i = 0; i < password.length; i++) {
        if(!isNaN(password[i])){
            brojac++;
        }
    }
    if(password.length<6||brojac==0){
    message = 'Your password is invalid!';
    }
    console.log('6. '+message);
})('popo');


// 7. Write a function that filters elements of the given array so that they satisfy a condition
// given by the callback function.
// Input: [2, 8, 11, 4, 9, 3], callback function checks if the number is odd
// Output: [11, 9, 3]
function callBack(arr) {
var arr1=[];
var h=0;
for (let i = 0; i < arr.length; i++) {
    if(arr[i]%2){
            arr1[h]=arr[i];
            h++;
    }
}
    return  arr1;
}

(function (arr) {
   var result = callBack(arr);
   
    console.log('7. '+result);
})([2, 8, 11, 4, 9, 3]);