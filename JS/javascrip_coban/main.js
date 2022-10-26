
/*function writeLog () {
    var str = '';
    for (var param of arguments) {
        str += `${param} - `;
        
    }
    console.log(str);
}
writeLog('Log 1', 'Log 2', 'Log 3');*/

// var myString = "   Hoc    JS tai F8   ";

// // console.log(myString.slice(4,6))
// // console.log(myString.toUpperCase());

// function isNumber(value) {
//     if (isNaN(value)) {
//         return false;
//     }
//     else return typeof value === 'number';
// }

// console.log(isNumber(999));
// console.log(isNumber('abc')); 
// console.log(isNumber(NaN));

// Làm bài tại đây


// console.log(Math.floor(Math.random(10)*10));

// function run(object) {
//     var arr = [];
//     for(var key in object){
//         arr.push(`Thuộc tính ${key} có giá trị ${object[key]}`)
//     }
//     return arr;
// }

// console.log(run({ name: 'Nguyen Van A', age: 16 }));

/*
const courses = [
    {
        id: 1,
        name: 'HTML & CSS',
        coin: 0
    },
    {
        id: 2,
        name: 'JS',
        coin: 200
    },
    {
        id: 3,
        name: 'Pythons',
        coin: 350
    },
    {
        id: 4,
        name: 'Java',
        coin: 350
    },
    {
        id: 5,
        name: 'Ruby',
        coin: 300
    },
];

var i = 0;

function coinHandler(accumulator, currentValue, currentIndex, originalArray) {
    i++;
    console.log(i, accumulator, currentValue);
    return accumulator+currentValue.coin;
}

var totalCoin = courses.reduce(coinHandler);
console.log(totalCoin);*/


// const sports = [
//     {
//         name: 'Bóng rổ',
//         like: 6
//     },
//     {
//         name: 'Bơi lội',
//         like: 5
//     },
//     {
//         name: 'Bóng đá',
//         like: 10
//     },
// ]

// function getMostFavoriteSport (arr) {
//     var list = arr.filter(function (course, index) {        return course.name });
//     return list;
// }

// console.log(getMostFavoriteSport(sports));


var arr = [1,2,3,4,5,6,7,8,9,10];


var func = function (callback, arr){
    var arr2 = [];

    for(var i = 0; i < arr.length; i++) {
        arr2.push(callback(arr[i]));
    }
    return arr2;
};

var html = func((element) =>{
    return element;
}, arr)

console.log(html);




