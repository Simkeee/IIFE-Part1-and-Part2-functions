// INSTRUCTIONS: All tasks needs to be done as regular function and after that as anonymous function!!!
    
// 1. Write a function that checks if a given string contains 5 digits.
// Input: “1b8952abd” 
// Output: true
// 1A. Modify previous task to check if it contains char or number "5". 
// Input: “1bser9re”
// Output: false
function digitsCh(input1) {
    var brojac = 0;
    var message = false;
    for (let i = 0; i < input1.length; i++) {
        if(!isNaN(input1[i])){
            brojac++;
        }
    }
    if(brojac>4){
    message = true;
    }
  return '1. '+ message;
}
console.log(digitsCh('12300iijbg277'));
////////////////////////////////2. varijanta
// (function (input1) {
//     var brojac = 0;
//     var message = false;
//     for (let i = 0; i < input1.length; i++) {
//         if(!isNaN(input1[i])){
//             brojac++;
//         }
//     }
//     if(brojac>4){
//     message = true;
//     }
//     console.log('1. ' + message);
// })('popo1234');
///////////////////////////////////////////////////////////////////////////////////////////////////
// 2. Write a function that in a given string replaces all the appearances of the string ‘JS’ with ‘**’. 
// Input: “Programming in JS is super interesting!”
// Output: “Programming in ** is super interesting!”
function replacesStr(input1) {
    var niz = input1;
    var niz2 = [];
    niz2=niz.replaceAll('JS','**');
    return ("2. " + niz2);
}
console.log(replacesStr("Programming in JS is super interesting!"));
////////////////////////////////2. varijanta
// (function (input1) {
//     var niz = input1;
//     var niz2 = [];
//     niz2=niz.replaceAll('JS','**');
//     console.log("2. " + niz2);
// })("Programming in JS is super interesting!");
///////////////////////////////////////////////////////////////////////////////////////////////////
// 3. Write a function that inserts a given character on a given position in the string.
// Input: “Goo morning”, 4, ‘d’ 
// Output: “Good morning” 
function insertNumb(string1,position,car) {
    var niz1=[];
    var niz2=[];
for (let i = 0; i < position-1; i++) {
    niz1.push(string1[i]);
}
var niz11=niz1.join('');
for (let j = position-1; j < string1.length; j++) {
    niz2.push(string1[j]);
}
var niz22=niz2.join('');

var result=niz11+car+niz22;

return '3. ' + result;
}
console.log(insertNumb('Goo morning', 4,'d'));
////////////////////////////////2. varijanta
// (function (string1,position,car) {
//     var niz1=[];
//     var niz2=[];
//     for (let i = 0; i < position-1; i++) {
//         niz1.push(string1[i]);
//     }
//     var niz11=niz1.join('');
//     for (let j = position-1; j < string1.length; j++) {
//         niz2.push(string1[j]);
//     }
//     var niz22 = niz2.join('');
    
//     var result = niz11+car+niz22;

//     console.log('3. ' +result);
// })('Goo morning', 4,'d');
///////////////////////////////////////////////////////////////////////////////////////////////////
// 4. Write a function that deletes a character from the given position in the string. 
// Input: “Goodd morning!”, 3 
// Output: “Good morning!” 
function deletesNumb(str, pos) {
    var str1=str.split('');
    str1.splice(pos, 1);
    var str2=str1.join('');
    return '4. ' +str2;
}
console.log(deletesNumb('Goodd morning!', 3 ));
////////////////////////////////2. varijanta
// (function (str, pos) {
//     var str1=str.split('');
//     str1.splice(pos, 1);
//     var str2=str1.join('');
//    console.log('4. ' + str2);
// })('Goodd morning!', 3);
///////////////////////////////////////////////////////////////////////////////////////////////////
// 5. Write a function that deletes every second element of the given array.
// Input: [3, 5, 1, 8, 90, -4, 23, 1, 67]
// Output: [3, 1, 90, 23, 67]
function deletesSecond(arr){
    var niz=[];
    var h=0;
    for (let i = 0; i < arr.length; i++) {
        if(i%2==0){
            niz[h]=arr[i];
            h++;
        }
    }
return '5. ' + niz;
}
console.log(deletesSecond([3, 5, 1, 8, 90, -4, 23, 1, 67]));
////////////////////////////////2. varijanta
// (function (arr) {
//     var niz=[];
//     var h=0;
//     for (let i = 0; i < arr.length; i++) {
//         if(i%2==0){
//             niz[h]=arr[i];
//             h++;
//         }
//     }
// console.log('5. ' + niz);
// })([3, 5, 1, 8, 90, -4, 23, 1, 67]);