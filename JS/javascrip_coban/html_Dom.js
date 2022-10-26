// var heading = document.getElementById('heading');
/*
//                  ôn tập DOM lấy elmente ra

console.log({
    elmente: heading
});*/
//  var headings = document.getElementsByClassName("heading");
// var headings = document.querySelector('.box .heading:nth-child(3)');

/*var headings = document.querySelectorAll('.box .heading');
console.log(headings[1]);*/


/**
 * Sử dụng các biến đã cho sẵn dưới đây
 */

//  var productsListElement = document.getElementsByClassName('products-list')[0];
//  var firstProductElement = document.querySelector('.products-list .product:first-child')
//  var buttonElements = document.querySelectorAll(".product button")
 
// console.log(productsListElement);
// console.log(firstProductElement);
// console.log(buttonElements);
/*
//                          On tap element methods

var box = document.querySelector(".box-1");
console.log(box);
var list = box[0].getElementsByTagName("li");
console.log(list);
*/

/*
//                          DOM attributes

var heading = document.querySelector("h1");
// heading.title = "Heading";
// heading.className = "heading-container";
// heading.classList.add("heading-container");
heading.setAttribute("data", "date-text");
console.log(heading.getAttribute("data", "data-text"));
console.log(heading.getAttribute("class", "heading"));
console.log(heading.className);
// Nếu attribute được tạo từ method setAttribute sẽ ko dc tính 
// là một attribute ảo ko hợp lệ
*/

/*
//                         innerText & textcontent

var heading = document.querySelector('h1');
console.log(heading.textContent);
// console.log(heading.innerText);
heading.textContent = "Heading-Text";
console.log(heading.innerText);
*/


/*
//                          innerHTML & outerHTML

var boxEle = document.querySelector('.box');
// console.log(boxEle);
boxEle.innerHTML ='<h1>New heading</h1>';
document.querySelector('h1').className = 'heading';
console.log(document.querySelector('h1'));
console.log(boxEle.innerHTML);
*/

/*
                            // bt về innerHTML

function render(html) {
    document.querySelector('ul').innerHTML = html;
}

render(`
    <li>Khóa học HTML</li>
    <li>Khóa học JS</li>
    <li>Khóa học PHP</li>
`)
*/

/*
//                  BT innerHTML 2
var courses = ['HTML & CSS', 'Javascript', 'PHP', 'Java']

function render(courses) {
    
    //              dung reduce
    var str =  courses.reduce(function (acc, course) {
        return acc + `<li>${course}</li>`;
    }, "");
    document.querySelector('.courses-list').innerHTML = str;
    
    /*
    //              dung map
    var strList =  courses.map(function (course) {
        return `<li>${course}</li>`;
    });
    document.querySelector('.courses-list').innerHTML = strList.join('');
    */
    /*
    //              dung for
    var str = "";
    for(var i = 0; i < courses.length; i++) {
        str += `<li>${courses[i]}</li>`;
    }
    document.querySelector('.courses-list').innerHTML = str;
    
}
// render(courses);
// console.log(render(courses));
// document.querySelector('.courses-list').innerHTML = render(courses);
*/

/*                 //Dom properties attributes
var box = document.querySelector('.box');
console.log([box]);
console.log(box.attributes);
*/

/*
//                          DOM style
var box = document.querySelector('.box');
box.style.width = '200px';
box.style.height = '100px';
box.style.backgroundColor = 'red';

Object.assign(box.style, {
    width: '200px',
    height: '100px',
    backgroundColor: 'blue',
});
console.log(box.style.cssText);
*/

/*
var box = document.querySelector('.box');

box.classList.add('red', 'green', 'blue');//them class
//kiểm tra class có tồn tại hay ko
//console.log(box.classList.contains('white'));//false
//console.log(box.classList.contains('red'));//true
// xóa class trong element
// box.classList.remove('red');
box.className = 'white';
*/

// var heading = document.querySelector("h1");
// console.log({heading});
// console.log(heading.getAttribute('class'));

// var box = document.querySelector('.box');
// console.log({box});
// console.log(box.lastChild);
// console.log(box.nextSibling);
// console.log(box.nextElementSibling);

// let arr2 = [8,9,10]
// let newArr = arr1.splice(2, 3, ...arr2);
// console.log(arr1);
// console.log(newArr);

// console.log(1 == '1');

