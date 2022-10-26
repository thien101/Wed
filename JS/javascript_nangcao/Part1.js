// I. IIFE (Immediately Invoked Function Expression)
// 1. IIFE trông như thế nào
// (function(value) {
//     console.log('Testing:', value);
// })(123);

// 2. Dùng dấu ; trước IIFE
// let name = 'Hoang'// thêm dấu trc IIFE
// (function(){// or như này

// })()

// 1.3 IIFE là hàm private
// let i=0;
// ;(function myFunc(){
//     i++;
//     console.log('Testing:');
//     if(i<10)
//         myFunc();
        
// })();

// myFunc();// lỗi myFunc is not defined(không gọi dc ở phạm vị bên ngoài or ngang cấp)


// 4 Khi nào sử dụng IIFE
// 5 Ví dụ về IIFE

// const app = {
//     cars: [],
//     add(car){
//         return this.cars.push(car);
//     },
//     edit(index, car){
//         this.cars[index] = car;
//     },
//     delete(index){
//         return this.cars.splice(index, 1);
//     }
// };
// chỉ cần sử app.cars = null thì car sẽ mất data => ko bảo quản đc dữ liệu

// const app2 = (function() {
//     // private
//     const cars = [];

//     return {
//         add(car){
//             cars.push(car);
//         },
//         edit(index, car){
//             this.cars[index] = car;
//         },
//         delete(index){
//             cars.splice(index, 1);
//         },
//         show(){
//             cars.forEach((car) => {
//                 console.log(car);
//             });
//         }
//     }
// })()
// biến cars thành private (cars nằm trong IIFE nên ko thể sử dụng ở bên ngoài)


// bài tập IIFE
// const number = (function(a, b) {
//     return a + b;
// })(1, 2);

// console.log(number);

// (function js(x) {
//     const y = (j) => j * x;

//     console.log(y(s()));

//     function s() {
//         return j();
//     }

//     function j() {
//         return x ** x;// ** là tính mũ (3**3 === 3^3)
//     }
// })(3)

// ---------------------------------------------------------------------

// II. Scope (Phạm vi)

/*
    * Các loại phạm vi:
        -Global: toàn cầu
        -Code block - khối mã: (let const)
        -local scope - hàm: var, function

    * Khi gọi mỗi hàm luôn có 1 phạm vi mới được tạo ra
    VD:
    function logger(){} // có 1 phạm vị là global

    logger(); // khi gọi sẽ có 2 phạm vị là global và logger()
    logger(); // khi gọi sẽ có 3 phạm vị là global và logger() và logger()
    ==> mỗi khi gọi hàm (hàm dc gọi lại nhiều lần) đều tạo ra 1 phạm vi
    riêng biệt vs đối số riêng biệt
    
    * Các hàm có thể truy cập cái biến đước khai báo trong phạm vi của nó
    và bên ngoài nó
    VD:
    const fullname = "Long Nguyễn"
    const age = 13;
    function logger(value){
        const age = 20;
        console.log(age, fullname);
        console.log(value);
        function logger2(){
            console.log(age); =20  ==> truy cập phạm vị gần nhất
        }
    }
    console.log(value) ==> lỗi
*/
// Global: khai báo ở phạm vị toàn cục nên có thể sử dụng bất kì đâu
// let message = "Học về scope";

// function logger(){
//     console.log(message);
// }
// logger();

// ----------------------------------------------
// Code block: khai báo trong code block
// phạm vi khối mã: cặp ngoặc {...}
// VD: if, else, function(){},...
// {
//     const a =1;
// }
// console.log(a); // lỗi a is not defined

// ----------------------------------------------
// Local scope
// -   Chỉ sử dụng trong phạm vi khai báo hàm bên ngoài sẽ không truy cập dc ở bên ngoài
//logger2();// lỗi logger2 is not defined

//console.log(fullname); // lỗi fullname is not defined


// function makecounter(){
//     let counter = 0;
//     function increase(){
//         return ++counter;
//     }
//     return increase;
// }

// const value = makecounter();
// console.log(value)
// console.log(value());
// console.log(value());
// console.log(value());

// ---------------------------------------------------------------------
// Closure 
/*
Closure: là một hàm có thể ghi nhớ nơi nó được tạo ra và truy cập
biến ở phạm vi bên ngoài của nó

Ứng dụng
-- Viết code ngắn gọn hơn
-- Biểu diễn, ứng dụng tính Private trong OOP

*/

// function createCounter(){
//     let counter = 0;
//     function increase(){
//         return ++counter;
//     }
//     return increase
// }

// const counter1 = createCounter();
// console.log(counter1());//1
// console.log(counter1());
// console.log(counter1());
// console.log(counter1());

// function createApp(){
//     const cars = [];
//     return {
//         add(car){
//             cars.push(car);
//         },
//         show(){
//             console.log(cars);
//         }
//     }
// }


// const app = createApp();
// console.log(app);
// app.add("BWM")
// app.add("Ferari")
// app.add("Lamborgini")

// app.show();
// app.cars = null;
// app.show();

// var a=100;
// (function tt(){
//     console.log(a);
//     var a = 10;
// })()
