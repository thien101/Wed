var counsers = ['Javascript', 'Java', 'PHP', 'Ruby'];

Array.prototype.map2 = function(callback){
    var arrlength = this.length;
    var arr = [];
    for(var i = 0; i < arrlength; i++) {
        arr.push(callback(this[i], i));
    }
    return arr;
}

var htmls = counsers.map2(function(counser){
    return counser;
});

console.log(htmls);