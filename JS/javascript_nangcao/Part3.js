// 'use strict';
// 1. This in JS

// const me = function(){
//     this.firstName = "Minh";
//     this.lastName = "Thu";
// }

// const students = {
//     firstName: "Minh",
//     lastName: "Thao",
//     getFullName: function(){
//         return `${this.firstName} ${this.lastName}`
//     }
// }

// console.log(students.getFullName());

// const getStudentName = students.getFullName.bind(me);
// console.log(getStudentName());


// call() ---------------------------------------------------

// Gọi hàm với call method
// const teacher = {
//     firstName: "Minh",
//     lastName: "Thao",
// }

// const me = {
//     firstName: "Son",
//     lastName: "Dang",
//     showFullName: function(){
//         console.log(this.firstName);
//         console.log(this.lastName);
//     }
// }
// call thực hiện bind this rồi gọi luôn hàm
// me.showFullName.call(teacher);
// teacher có thể mượn hàm của me vs call() (function borrowing = mượn hàm)

// this trong strict mode
// console.log(this) // vẫn đưa về giá trị là window
// nhưng trong strict mode thì this là phạm vi global this => undefined

// this.firstName = "Son"
// this.lastName = "Dang"

// const showFullName = function(){
//     console.log(this.firstName);
//     console.log(this.lastName);
// }    

// showFullName();

// Thể hiện tính kế thừa
// function Animal(name, height){
//     this.name = name
//     this.height = height
// }

// function Chicken(name, height, legs){
//     Animal.call(this, name, height);
//     this.legs = legs
// }

// const sonDang = new Chicken('Son Dang', 66, 2);
// console.log(sonDang)


// apply() -------------------------------------------------
// function Animal(name, weight) {
//     this.name = name;
//     this.weight = weight
// }

// function Parrot(){
//     Animal.apply(this, arguments);
//     this.speak = function(){
//         console.log("Nha co khach");
//     }
// }

// const conVet = new Parrot('Vet', 300);
// console.log(conVet);

// console.log(1);
// setTimeout(() => console.log(2),3000);
// setTimeout(() => console.log(3),1000);
// setTimeout(() => console.log(4),2000);
// setTimeout(() => console.log(5),4000);
// console.log(6);

// let x ={};
// x.__proto__.hi = 10;
// Object.prototype.hi = ++x.hi;
// console.log(x.hi + Object.keys(x).length);
// console.log(x);


console.log(x);
var x = 10;