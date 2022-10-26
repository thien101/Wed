//1. LET, CONST ----> OK
// var & let & const điểm khác nhau:
//scope(phạm vi truy cập) - hosting(LET, CONST ko hỗ trợ)

// const / var, let: Assignment(gán lại giá trị)

// code block: if else, loop, {},...
// const a = {
//     name: "JS",
// }

// a = {
//     name: "PHP",
// }
// a.name = "PHP";
// console.log(a) 


//--------------------------------------------------
//---------------------------------------------------

//2. Template Literals & Multi-line String
// Template Literals
// const courseName = "Javascrips";
// const description = "Course name:" +courseName;
// console.log(`Template String noi suy voi: \${}, \\`)

//Multi-line String
// console.log(`Line 1
// Line 2
// Line 3
// Line 4`)

//---------------------------------------------------
//---------------------------------------------------

// 3. Arrow functions
// --Arrow functions ko cos this
// --Arrow functions ko the xay dung contructer function

// const testFunc = (log) => {
//     console.log(log);
// }

// const testFunc = log => console.log(log);

// testFunc("Ok Fine!");

// cach viet don gian hon
// const sum = (a, b) => ({a:a,b:b})
// console.log(sum(2,4));

//
// const course = {
//     name: "Javascrips",
//     getName: function(){
//         return this.name;//this goi la context
//     }
// }

// const funcSum = (a,b) => a+b; // {return a+b}
// console.log(funcSum(2,4));

// const funcA = a => console.log(a);
// funcA(2);
// function Dogs(...){...} = Dogs = function(...){...}
// 2 cách khai báo 1 contructer func
// const Dogs = function(name, color, weight) {
//     this.name = name;
//     this.color = color;
//     this.weight = weight;
//     this.getName = () => {
//         return this.name;
//     }
// }

// var myDog = new Dogs("Ki", "yellow", "8kg");
// console.log(myDog.getName());

// const course = {
//     name: "Javascrips",
//     getName: (name) => {// Arrow functions ko co context(this)
//         return name;
//         // console.log(name);
//     }
// }
// // console.log(course.getName());
// console.log(course.getName(course.name))

// const obj = { // does not create a new scope
//     i: 10,
//     b: () => console.log(this.i, this),
//     c() {
//       console.log(this.i, this);
//     },
//   }
//   obj.b(); // prints undefined, Window { /* … */ } (or the global object)
//   obj.c(); // prints 10, Object { /* … */ }

//---------------------------------------------------
//---------------------------------------------------

//4. Classes 

// function Contructer
// rất lộn xộn khi khai báo biến hay phương thức
// function Course(name, price){
//     this.name = name;
//     this.price = price;

//     this.getCourseName = function(){
//         return this.name;
//     }

//     var isSuccess;
// }



// sử dụng Classes
// class Course {
//     constructor(name, price) {
//         this.name = name;
//         this.price = price;
//    }

//    getName() {
//     return this.name;
//    }

//    getPrice() {
//     return this.price;
//    }
// }

// const CoursePHP = new Course("PHP", 1000);
// const CourseJS = new Course("Javascrips", 1200);

// console.log(CoursePHP.getName());
// console.log(CourseJS.getPrice());

// BT classes
// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
// }

// const person = new Person('Long', 22);
// console.log(`Tên: ${person.name}, tuổi: ${person.age}`);
//---------------------------------------------------
//---------------------------------------------------

// Default parameter values (định nghĩa giá trị mặc định cho tham số)
// tham sô của function
// với tham số bắt buộc thi ko cần đặt default
// với tham số ko bắt buộc thì có thể đặt (log: bắt buộc, type: ko)
// function logger(log, type = 'log'){ // cách làm trong ES6
//     if(typeof log === 'undefined'){ // cách làm trong ES5
//         log = 'Gia tri mac dinh';
//     }
//  console.log  .log === [type]
//     console[type](log); 
// }
// logger('Message: ...', 'error');
// // logger(undefined);
// console.error('Message: ...');

//---------------------------------------------------
//---------------------------------------------------

// 5. Enhanced object literals

// 1. định nghĩ key: value cho obj
// 2. Định nghĩa method cho obj
// 3. Định nghĩa key obj dưới dáng biến

// var name = "Javascrips";
// var price  = 1000;

// var getName = () =>  this.name;

// // var course  = {
// //     name: name,
// //     price: price,
// // }
// // 1. định nghĩ key: value cho obj
// var course  = {
//     name,
//     price,
//     // 2. Định nghĩa method cho obj
//     getName
// }
// console.log(course);
// console.log(course.getName());

// 3. Định nghĩa key obj dưới dáng biến

// var fieldName = 'new-name';
// var fieldPrice = 'price';
// const course2 = {
//     [fieldName]: 'PHP',
//     [fieldPrice]: 1200,
// }
// console.log(course2);
//---------------------------------------------------
//---------------------------------------------------

// import { TYPE_LOG } from "./module.js";
// export default logger;


// function logger(log, type = TYPE_LOG){
//     console[type](log);
// }

