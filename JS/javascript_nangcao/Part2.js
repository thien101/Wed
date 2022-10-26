'use strict';

// const student = {}

// Object.defineProperty(student, 'name', {
//     value: 'Thien',
//     writable: true,
// });

// student.name = 'Hoang';
// console.log(student);

const app = (function () {
    const cars = [];
    return {
        add(car){
            cars.push(car);
        },
        show(){
            console.log(cars);
        }
    }
})();

app.add('BMW')
app.add('Ferari')
app.show();



