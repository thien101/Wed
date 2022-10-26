var courses = [
    {
        id: 1,
        name: 'JavaScript',
        coin: 1,
    },
    {
        id: 2,
        name: 'HTML & CSS',
        coin: 0,
    },
    {
        id: 3,
        name: 'Java',
        coin: 100,
    },
    {
        id: 4,
        name: 'Python',
        coin: 200,
    },
    {
        id: 5,
        name: 'JRuby',
        coin: 300,
    },
];

var a = "men's clothing";

console.log(a.search(""));

/* //MAP METHOD
Array.prototype.map2 = function(callback) {
    var arrlength = this.length, arr = [];
    for( var i in this){
        if(this.hasOwnProperty(i)) arr.push(callback(this[i], i));
    }
    return arr;
}


var newCousers = courses.map2(function(counser, index){
    // console.log(counser);
    return {
        id: counser.id,
        name: counser.name,
        coin: counser.coin,
        coinText: `Gia: ${counser.coin}`,
        index: index,
    };
});

console.log(newCousers);*/

/* //Filter Methods
Array.prototype.filter2 = function(callback) {
    var arrlength = this.length, arr = [];
    for(var i in this) {
        if(this.hasOwnProperty(i)){
            if(callback(this[i]))arr.push(this[i]); 
        }
    }
    return arr;
};

var newCousers = courses.filter2(function(course) {
    // console.log(course);
    return course.coin > 100;
});
console.log(newCousers);

// Bai Tap Filter Methods
Array.prototype.myFilter = function(cb) {
    var arr = [];
    for(var i in this){
        if(this.hasOwnProperty(i)){
            if(cb(this[i], i, this))arr.push(this[i])
        }
    }
    return arr;
}

const numbers = [1, 2, 3, 4];

console.log(numbers.myFilter(function (number) {
    return number % 2 === 0;
})); Output: [2, 4]

console.log(numbers.myFilter(function (number, index) {
    return index % 2 === 0;
})); Output: [1, 3]

console.log(numbers.myFilter(function (number, index, array) {
    return array.length % 2 === 0;
})); Output: [1, 2, 3, 4]

*/

/*//Some() methods
Array.prototype.some2 = function(callback){
    for(var i in this) {
        if(this.hasOwnProperty(i)){
            if(callback(this[i]))return this[i];
        }
    }
    return callback(this[i]);
}


var newCousers = courses.some2(function (course) {
    return course.coin >0;
});
console.log(newCousers);*/

/*//Every Methods
Array.prototype.every2 = function(callback) {
    for (var i in this) {
        if(this.hasOwnProperty(i)){
            if(!callback(this[i])){
                // console.log(this[i]);
                return false;
            }
        }
    }
    return true;
};

var newCousers = courses.every2(function(course){
    return course.coin > 400;
});
console.log(newCousers);

//BT Every methods
Array.prototype.myEvery = function(cb) {
    for(var i in this){
        if(this.hasOwnProperty(i)){
            if(!cb(this[i], i, this))return false;
        }
    }
    return true
}


// Expected results

const numbers = [1, 3, 3, 5];

console.log(numbers.myEvery(function (number) {
    return number % 2 !== 0;
})); // Output: true

console.log(numbers.myEvery(function (number, index) {
    return index % 2 === 0;
})); // Output: false

console.log(numbers.myEvery(function (number, index, array) {
    return array.length % 2 === 0;
})); // Output: true

*/

// var arr = [1, 2, 3, 4, [5, 6, 7, 8, [9, 10]]];
// // console.log(arr.join());
// var arr2 = arr.join().split(",");
// var arrN = arr2.map((course)=>{
//     return Number(course)
// });
// // console.log(typeof arr.join(','));
// console.log((arrN));

// var names = ['Thien', 'Hanh', 'Duc', 'Trung', 'Anh'];
// var html = '';
// names.forEach((index, ten) => {
//     html += (`${index}: ${ten}` + "<br>");
// });
// document.getElementById('text').innerHTML = html;

// Array.prototype.forEach2 = function(callback) {
//     for(var index in this){
//         if(this.hasOwnProperty(index)) callback(this[index]);
//     }
// }

// names.forEach2((value) =>{
//     console.log(value)
// })
// console.log(html);

// ----------------------------- Ôn tập Array ----------------------------- //
// let arr1 = [1,2,3,4,5,6,7];

// Array.prototype.every2 = function (callback){
//     let results;
//     for (var i in this){
//         if (this.hasOwnProperty(i)){
//             console.log(this[i]);
//             results = callback(this[i], i);
//             if(!results)break;
//         }
//     }
//     return results;
// }

// let result = arr1.every2(callback = function(curr, index){
//     return curr < 7;
// })
// console.log(result);

// Array.prototype.filter2 = function (callback){
//     let newArr = [];
//     for (var i in this){
//         if(this.hasOwnProperty(i)){
//             if(callback(this[i], i, this))newArr.push(this[i])
//         } 
//     }
//     return newArr;
// };

// console.log(arr1.filter2((curr, index, arr1) => curr > 3))

/*let arr2 = [1,2,3,4,5,6,7];
Array.prototype.reduce2 = function (callback, acc){
    for(let i in this){
        if(this.hasOwnProperty(i)){
            acc = callback(acc, this[i], i,);
        }
    }
    return acc;
}


var result =  arr2.reduce2((acc, curr, index) => {
    if(index == 0){
        acc.push(curr)
        return acc;
    };
    if(index > 0){
        acc.push(curr + acc[index-1])
        return acc;
    }
},[])

console.log(result);*/

