/*
Write a function called doubleValues which accepts an array and returns a new array 
with all the values in the array passed to the function doubled
Examples:
    doubleValues([1,2,3]) // [2,4,6]
    doubleValues([5,1,2,3,10]) // [10,2,4,6,20]
*/
/*
function doubleValues(arr){
    const newArr = [];
    arr.forEach((val) => {
        newArr.push(val * 2);
    });
    return newArr;
}
console.log(doubleValues([1,2,3,4]));
console.log(doubleValues([5,1,2,3,10]));
*/

/*
Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function
Examples:
    onlyEvenValues([1,2,3]) // [2]
    onlyEvenValues([5,1,2,3,10]) // [2,10]
*/
/*
function onlyEvenValues(arr){
    var newArr = [];
    arr.forEach((val) => {
        if(val % 2 === 0){
            newArr.push(val);          
        }
        
    });
    return newArr;

}
console.log(onlyEvenValues([1,2,3]));
console.log(onlyEvenValues([5,1,2,3,10]));

*/
/*

Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.

Examples:

    showFirstAndLast(['colt','matt', 'tim', 'udemy']) // ["ct", "mt", "tm", "uy"]

    showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']

*/

function showFirstAndLast(arr) {
    let newArr = [];
    arr.forEach(function(val) {newArr.push(val[0] + val[val.length - 1]);
    });
    return newArr;
}
console.log(showFirstAndLast(['colt','matt', 'tim', 'udemy']))
console.log(showFirstAndLast(['hi', 'goodbye', 'smile']))

/*
Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed to the function with the new key and value added for each object 

Examples:

    addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor') 

 // [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]

*/
/*
function addKeyAndValue(arr,key,value){
    arr.forEach(function(val){
        val[key] = value;
    });
    return arr;
}
console.log(addKeyAndValue(['colt','matt', 'tim', 'udemy']))
*/
/*
const names = [
    {name: 'Elie'},
    {name: 'Tim'},
    {name: 'Matt'},
    {name: 'Colt'}
    ]
    const addKeyAndValue = (arr, key, value) => {
    arr.forEach(object => {
    object[key] = value
    })
    console.log(arr)
    return arr
    }
    addKeyAndValue(names, 'title', 'instructor')

*/

/*
const initialArr = [
    {name: 'eve'},
    {name: 'john'},
    {name: 'jane'}
  ]

const newArr1 = initialArr.map(v => ({...v, isActive: true}))
const newArr2 = initialArr.map(v => Object.assign(v, {isActive: true}))
console.log(newArr1)*/


/*

Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and 
the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase
 letter and uppercase letter should count
Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};

*/

function vowelCount(str){
    var splitArr = str.split("");
    var obj = {};
    var vowels= "aeiou";
    splitArr.forEach(function(letter){
        if(vowels.indexOf(letter.toLowerCase()) !== -1){
            if(letter in obj){
                obj[letter] ++
            }
            else {
                obj[letter] = 1;
            }}
        });
        return obj;
    }
console.log(vowelCount('Elie'))
console.log(vowelCount('Tim'))