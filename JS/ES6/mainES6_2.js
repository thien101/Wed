// 6. Destructuring & Rest(...) (Phân rã phần tử)

// var arr = ['Javascrips', 'PHP', 'Java', 'ruby'];
// var [a,b,c] = arr; console.log(a,b,c) 
// var [a,,c] = arr; console.log(a,c);
//Rest parameters
//Rest dùng trong Destructuring or khai báo tham sô hàm
// var [a, b,  ...rest] = arr; console.log(a, b, rest);

// var obj = {
//     name: 'Javascrips',
//     price: 1200,
//     getName(){
//         return this.name;
//     },
//     a: true
// };
// var {name, price, ...getName} = obj;
// console.log(name, price);
// console.log(getName);
// console.log(obj.getName());

// var course = {
//     name: 'Javascrips',
//     price: 500,
//     descreption: "OK Fine!",
//     children: {
//         name: "PHP"
//     }
// }
// console.log(course);
// // muon lay cai ji thi phai them cai do (giong nhu tren khai bao)
// var {name, price, price2} = course; console.log(name, price, price2); 
// var {name, price, descreption} = course; console.log(name, price, descreption); 

// function logger({name, descreption, ...rest}){
//     console.log(name);
//     console.log(descreption);
//     console.log(rest);
// }

// logger ( {
//     name: 'Javascrips',
//     price: 500,
//     descreption: "OK Fine!",
//     children: {
//         name: "PHP"
//     }
// })

// function logger([a, b, ...rest]){
//     console.log(a);
//     console.log(b);
//     console.log(rest);
// }

// logger ( [1,2,3,4,5])

// rest chi la ten goi co the thay the 
// var {name, ...rest} = course; console.log(name, rest); 

// de name thi con sau se de len truoc -> in ra PHP 
// doi ten 1 trong 2
// var {name: ParentName, children:{name/*: childrenName*/}} = course;
// console.log(ParentName,name);

// function logger (...parems){
//     console.log(parems); //params-> trả về array
// }

// console.log(logger(1,2,3,4,5,6))
//---------------------------------------------------
//---------------------------------------------------

// 7. Spread (...)
// len mạng tìm hiểu
// var arr1 = [1,2,3,4,5];
// var arr2 = [6,7,8,9,10];
// var arr3 = [...arr2, ...arr1]
// var arr4 = [1,2,3,4,5,...arr2];
// var arr5 = [...arr1, 6,7,8];
// console.log(arr4);
// console.log(arr5);
// console.log(arr1);
// console.log(arr2);
// console.log(arr3);

// function func(a,b,...c){
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// func(...arr1);

// var obj = {
//     name: "John",
//     age: 18,
// }

// var obj2 = {
//     gender: "male",
// }

// var obj3 = {
//     ...obj,
//     ...obj2,
// }

// console.log(obj3);

// var array = [1,2,3,4,5];
// function logger(...rest){//Rest
//     for(i = 0; i<rest.length; i++){
//         console.log(rest[i]);
//     }
// }
// logger(...array);//Spread;

// Bai tap Spread
// const person1 = {
//     name: 'Son',
//     age: 21,
// }

// const person2 = {
//     ...person1,
// };

// Expected results
// console.log(person2.name) // Output: 'Son'
// console.log(person2.age) // Output: 21
// console.log(person1 === person2) // Output: false
//---------------------------------------------------
//---------------------------------------------------

// 8 Tagged template literals
// function highlight([first, ...strings], ...values){
    // console.log(first);
    // console.log(strings);
    // console.log(values);
    // return values.reduce((acc, curr) => [
    //     ...acc, `<span style="color: red">${curr}</span>`, strings.shift()
    // ]
    // , [first]).join('');
    // var arr = [first];
    // values.forEach((value) => {
    //     arr = [...arr, `<span style="color: red">${value}</span>`, strings.shift()]
    // })
    // console.log(arr);
    // return arr.join('');

    // return [first,...values.map((value) => {
    //     return [`<span style="color: red">${value}</span>`, strings.shift()]
    // })].join('');
    
    
    // return values.reduce(
    //     (acc, curr) => [...acc, `<span style="color: red">${curr}</span>`, strings.shift()],
    //     [first]
    // ).join('');

    // values.reduce((), [firt]) -> trả về 1 arr.join -> trả về string

// }
// var course = "Javascrips"
// var brand = "F8";
// var html = highlight`Học lập trình tại ${course} tại ${brand}!`
// var box = document.querySelector('.box');
// box.innerHTML = html;
// console.log(html);
//---------------------------------------------------
//---------------------------------------------------

// 12. Modules Import / Export (Nap vao / Xuat ra)

// import logger from './mainES6_1.js';

// import {
//     TYPE_LOG,
//     TYPE_ERROR,
//     TYPE_WARNING
// } from './module.js';

// import * as module from './module.js';
// console.log(module);
// logger('OK', 'error');
// logger('OK', TYPE_ERROR) // lỗi
// logger('OK', module.TYPE_ERROR);
//---------------------------------------------------
//---------------------------------------------------

// 13 Optional chaining (Tu hoc)
// const obj = {
//     name: 'Alice',
//     cat: {
//         name: 'Bob',
//         cat2: {
//             name: 'Bob2',
//             cat3: {
//                 name: 'Bob3',
//             //     getName: function () {
//             //         return this.name;
//             //     }
//             }
//         }
//     }
// }

// if(obj?.name){
//     console.log(obj.name);
// }
// if(obj.cat?.name){
//     console.log(obj.cat.name);

// }
// if(obj.cat.cat2?.name){
//     console.log(obj.cat.cat2.name);
// }
// if(obj.cat.cat2?.cat3?.name){
//     console.log(obj.cat.cat2.cat3.name);
// }
// if(obj.cat.cat2?.cat3?.getName){
//     console.log(obj.cat.cat2.cat3.getName());
// }