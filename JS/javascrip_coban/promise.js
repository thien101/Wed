//3 trang thai cua promise
//1 pending: cho doi
//2 fulfilled: thanh cong
//3 rejected: that bai

// Promise sinh ra để xử lý callback hell

// {
// var promise = new Promise(
//     // Executor function
//     function(resolve, reject) {
//         // logic: xử lý
//         // Thành công: resolve
//         resolve();
//         // Thất bại: reject
//         // reject();

//     }
// );

// promise
    // .then(function(){
    //     return [1,2,3];// then trước return về kiểu ji thì then sau nhận 
    //                    // kiểu đấy
    // })

    // .then (function () {
    //     return new Promise(function (resolve) {
    //         setTimeout(() => {
    //             resolve([1,2,3]);
    //         }, 3000);
    //     });
    // })
    
    // .then(function(data){
    //     console.log(data);
    //     data.push(4);
    //     return data;
    // })

    // .then(function(){
    //     return 1
    // })

    // .then(function(data){
    //     console.log(data);
    //     return ++data;
    // })
    // .then(function(data){
    //     console.log(data);
    // })
    // .then(function(data){
    //     console.log(data);
    // })

    // .catch(function(){
    //     console.log();
    // })

    // .finally(function(data){
    //     console.log('Done');
    // });
// }

// {
// var notHell = new Promise(function (resolve) {
//     resolve(1);
// });
    
// notHell
//     .then(function (value) {
//         return value + 1;
//     })
//     .then(function (value) {
//         return value + 1;
//    })
//    .then(function (value) {
//         return value + 1;
//     })
//     .then(function (value) {
//         console.log(value + 1);
//     });
// }

// function hell(value, cb) {
//     cb(value);
// }

// // Không sử dụng Promise dẫn đến tạo ra callback hell 
// hell(1, function (valueFromA) {
//     console.log(valueFromA);
//     hell(valueFromA + 1, function (valueFromB) {
//         console.log(valueFromA);
//         hell(valueFromB + 1, function (valueFromC) {
//             console.log(valueFromB);
//             hell(valueFromC + 1, function (valueFromD) {
//                 console.log(valueFromD + 1);
//             });
//         });
//     });
// });

// Sử dụng Promise sẽ tạo ra đoạn code dễ đọc hơn và vẫn đảm bảo đúng logic
// function notHell(value) {
//     return new Promise(function (resolve) {
//         resolve(value);
//     });
// }

// var promise = Promise.resolreve("Thanh cong");
// {
// var promise = Promise.reject("That bai");

// promise
//     .then(function (value) {
//         console.log(value);
//     })
//     .catch(function (err) {
//         console.log(err);
//     })
// }

// var promise1 = new Promise(function (resolve) {
//     setTimeout(() => {
//         resolve([1]);
//     }, 1000);
// })
// //  var promise2 = Promise.reject("That bai"); chi can co 1 reject thi all ko chay

// var promise2 = new Promise(function (resolve) {
//     setTimeout(() => {
//         resolve([2,3]);
//     }, 2000);
// })


// Promise.all([promise1,promise2]) //in ra 1 mang gom 
//                                  //2 phan tu lan luot pro1 vs pro2
//     .then((result)=>{
//         console.log(result);
//     })
// promise2 = Promise.reject("That bai");
// Promise.all([promise1,promise2])
//     .then((result)=>{
//         var result1 = result[0];
//         var result2 = result[1];
//         console.log(result1.concat(result2));
//         // console.log(result[0].concat(result[1]));
//     })

// // ES6
//     .then(([result1, result2])=>{
//         console.log(result1.concat(result2));

//     })
//     .catch((err)=>{
//         console.log(err);
//     });


// Promise example

var users = [
    {
        id: 1,
        name: 'Kien Dam',
    },
    {
        id: 2,
        name: 'Son Dang',
    },
    {
        id: 3,
        name: 'Hung Dang',
    },
];


var comments = [
    {
        id: 1,
        user_id: 1,
        content: "anh son chua ra video :(",
    },
    {
        id: 2,
        user_id: 2,
        content: "Vua ra xong em oi!",
    },
    {
        id: 3,
        user_id: 1,
        content: "Thank you ^^",
    },

];

// 1. Lay comments
// 2. từ comments lấy ra user_id
// 3. từ user_id lấy ra users tương ứng

// Fake API
// tạo hàm lấy comments

// function getComments (){ // hàm promise
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(comments); // truyền comments bên trên để gọi đến then
//         }, 1000);
//     }, comments);
// }

// function getUsersByIDs(userIds) {
//     return new Promise((resolve) => {
//         var result = users.filter((user) => {
//             return userIds.includes(user.id);
//         })
//         console.log(result);
//         resolve(result);
//     }, users);
// }

// getComments()
//     .then( (comments) => {
//         var UserIds = comments.map((comment) => {
//             return comment.user_id;
//         });  
//         console.log(UserIds)
//         return getUsersByIDs(UserIds)
//             .then((users) => {
//                 return {
//                     users: users,
//                     comments: comments,
//                 }
//             })
        
//     })

//     .then((data) => {
//         console.log(data);
//         var commentBlock = document.getElementById('comment-block');
//         var html = '';
//         data.comments.forEach((comment) => {
//             var user =  data.users.find((user)=>{
//                 return user.id === comment.user_id;
//             });
//             console.log(user);
//             html += `<li>${user.name}:  ${comment.content}</li>`;
//         });
//         commentBlock.innerHTML = html;
//     })

// 1.Array
// 2. Function, callback
// 3. Promise
// 4. DOM


// getUsersByIDs([1, 2, 3])
//     .then((users) => {
//         console.log(users);
//     })

// {   var commentBlock = document.getElementById('comment-block');
//     function getHTLML (users, comments){
//         var html = '';
//         // console.log(users, comments);
//         comments.forEach((comment) => {
//             var user = users.find((user) => {
//                 return user.id === comment.user_id;
//             })
//             html += `<li>${user.name}:  ${comment.content}</li>`;
//         });
//         return html;
//     }
//     // var str = getHTLML(users, comments);
//     commentBlock.innerHTML =  getHTLML(users, comments);
// }


function getComments2() {
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve(comments);
        }, 1000);
    }, comments);
}

function getUsersByIDs(arrCommentIds){
    return new Promise((resolve) => {
        setTimeout(() =>{
            var arrUsers = users.filter((user) =>{
                return arrCommentIds.includes(user.id);
            })
            console.log(arrUsers);
            resolve(arrUsers);
        }, 1000);
    }, users);
}

getComments2()
    .then((comments) => {
        var arrCommentIds = comments.map((comment) => {
            return comment.user_id;
        })
        console.log(arrCommentIds);
        return getUsersByIDs(arrCommentIds)
            .then((arrUsers) => {
                return {
                    users: arrUsers,
                    comments: comments,
                }
            })
    })
    .then((data) => {
        console.log(data);
        var lislComments = document.getElementById('comment-block');
        var html2 = '';
        data.comments.forEach(comment => {
            var user = data.users.find(user => {
                return user.id === comment.user_id;
            })
            html2 += `<li>${user.name}: ${comment.content}</li>`;
        })
        lislComments.innerHTML = html2;
    })
