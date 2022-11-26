// INSTRUCTIONS: All tasks needs to be done as regular function and after that as anonymous function!!!
   
//    6. Write a function that replaces the elements of the given array between two positions with their doubled values. 
// Input: [3, 5, 1, 8, 90, -4, 23, 1, 67], 2, 6 
// Output: [3, 5, 2, 16, 180, -8, 46, 1, 67]
function replElem(arr,index1,index2) {
    arr[index1]=arr[index1]*2;
    arr[index2]=arr[index2]*2;
    return '6. '+ arr;
}
console.log(replElem([3, 5, 1, 8, 90, -4, 23, 1, 67], 2, 6));

////////////////////////////////2. varijanta
// (function (arr,index1,index2) {
//     arr[index1]=arr[index1]*2;
//     arr[index2]=arr[index2]*2;
//     console.log('6. ' + arr);
// })([3, 5, 1, 8, 90, -4, 23, 1, 67], 2, 6);
/////////////////////////////////////////////////////////////////////////////////////

//     7. Write a function that checks if every element of the first array is contained in the second array. Be careful with repetitions! 
// Input: [3, 4, 1, 3], [8, 9, 3, 1, 11, 4, 3]
// Output: true
function containedEl(arr1,arr2) {
    var result = true;
for (let i = 0; i < arr1.length; i++) {
    var brojac=0;
    for (let j = 0; j < arr2.length; j++) {
        if (arr1[i]==arr2[j]) {
            brojac++;
        }
    }
    if(brojac==0){
        result=false;
    break;
    }
}
    return '7. '+result;
}
console.log(containedEl([3, 4, 1, 3], [8, 9, 3, 1, 11, 4, 3]));

////////////////////////////////2. varijanta
// (function (arr1,arr2) {
//     var result = true;
// for (let i = 0; i < arr1.length; i++) {
//     var brojac=0;
//     for (let j = 0; j < arr2.length; j++) {
//         if (arr1[i]==arr2[j]) {
//             brojac++;
//         }
//     }
//     if(brojac==0){
//         result=false;
//     break;
//     }
// }
// console.log('7. ' + result);
// })([3, 4, 1, 3], [8, 9, 3, 1, 11, 4, 3]);

///////////////////////////////////////////////////////////////////////////
//     8. Write a function that sorts an array of strings by the number of appearances of the letter ‘a’ or ‘A’. 
// Input: [‘apple’, ‘tea’,  ‘amazing’, ‘morning’, ‘JavaScript’]
// Output: [‘morning’, ‘apple’, ‘tea’, ‘JavaScript’, ‘amazing’]
function sortsByA(arr) {
    var h=0;
    var z=0;
    var x=0;
    var y=0;
    var niz1=[];
    var niz2=[];
    var niz3=[];
    var niz4=[];

    for (let i = 0; i < arr.length; i++) {
        var brojac = 0;
        for (let j = 0; j < arr[i].length; j++) {
            if(arr[i][j]=="A"||arr[i][j]=="a")
            brojac++;
        }
        if (brojac==0) {
            niz1[h]=arr[i];
            h++;
        }
        if (brojac==1) {
            niz2[z]=arr[i];
            z++;
        }
        if (brojac==2) {    //////sortira samo do 2 pojavljivanja a, nisam znao kako da ide do beskonacno
            niz3[x]=arr[i];
            x++;
        }
        if (brojac>2) {
            niz4[y]=arr[i];
            y++;
        }
    }
    var result= niz1.concat(niz2, niz3,niz4);
    return '8. ' +result;
}
console.log(sortsByA(['apple', 'tea',  'amazing', 'morning', 'JavaScript']));
////////////////////////////////2. varijanta
// (function (arr) {
//     var h=0;
//     var z=0;
//     var x=0;
//     var y=0;
//     var niz1=[];
//     var niz2=[];
//     var niz3=[];
//     var niz4=[];
//     for (let i = 0; i < arr.length; i++) {
//         var brojac = 0;
//         for (let j = 0; j < arr[i].length; j++) {
//             if(arr[i][j]=="A"||arr[i][j]=="a")
//             brojac++;
//         }
//         if (brojac==0) {
//             niz1[h]=arr[i];
//             h++;
//         }
//         if (brojac==1) {
//             niz2[z]=arr[i];
//             z++;
//         }
//         if (brojac==2) {    
//             niz3[x]=arr[i];
//             x++;
//         }
//         if (brojac>2) {
//             niz4[y]=arr[i];
//             y++;
//         }
//     }
//     var result= niz1.concat(niz2, niz3,niz4);
// console.log('8. ' +result);
// })(['apple', 'tea',  'amazing', 'morning', 'JavaScript']);
////////////////////////////////////////////////////////////////////////////////////////
//     9. Write a function that prints out the date of the next day. 
// Output:  25. 10. 2018.
function dateNextDay() {
    const today=new Date();
    const tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate() + 1)

    return '9. ' + tomorrow.toDateString();
}
console.log(dateNextDay()); 
////////////////////////////////2. varijanta
// (function () {
//     const today=new Date();
//     const tomorrow = new Date(today)
//     tomorrow.setDate(tomorrow.getDate() + 1)

// console.log('9. ' + tomorrow.toDateString());
// })();
/////////////////////////////////////////////////////////////////////////////////////

//     10. Write a function that prints out the date of the previous day. 
// Output:  23. 10. 2018. 
function previousDay() {
    const today=new Date();
    const yesterday = new Date(today)
    yesterday.setDate(yesterday.getDate() - 1)

    return '10. ' + yesterday.toDateString();
}
console.log(previousDay()); 
////////////////////////////////2. varijanta
// (function () {
//     const today=new Date();
//     const yesterday = new Date(today)
//     yesterday.setDate(yesterday.getDate() - 1)

// console.log('10. ' + yesterday.toDateString());
// })();
/////////////////////////////////////////////////////////////////////////////////////
//     11. Write a function that prints out an array of the numbers aligned from the right side.
// Input: [78, 111, 4, 4321]
// Output: 
//   78
//  111 
//    4
// 4321
function inverseSide(arr) {
    var str=arr.join().split(',');
    var maxlen = 0;
        for (i=0; i<str.length; i++) {
            if (str[i].length>maxlen) {
                maxlen = str[i].length;
            }
        }
    var print=[];
        for (let i = 0; i < str.length; i++) {
            print[i]=' '.repeat(maxlen-str[i].length)+str[i]+' \n';
        }
    var result= print.join('');

    return '11. '+'\n' + result;
}
console.log(inverseSide([78, 111, 4, 4321]));
////////////////////////////////2. varijanta
// (function (arr) {
//     var str=arr.join().split(',');
//     var maxlen = 0;
//         for (i=0; i<str.length; i++) {
//             if (str[i].length>maxlen) {
//                 maxlen = str[i].length;
//             }
//         }
//     var print=[];
//         for (let i = 0; i < str.length; i++) {
//             print[i]=' '.repeat(maxlen-str[i].length)+str[i]+' \n';
//         }
//     var result= print.join('');

//     console.log( '11. '+'\n' + result);
// })([78, 111, 4, 4321]);