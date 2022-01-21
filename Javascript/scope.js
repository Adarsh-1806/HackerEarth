console.log('Hii');

// var foo = "adarsh";
// var x = function adarsh() {
//     var foo = "moradiya";
//     function fun(foo) {
//         // console.log(foo);
//         foo = "hii";
//         tmp = "World";
//     }
//     fun(foo);
// }
// x=5;
// console.log(x);
// adarsh();
// foo;
// tmp;
// console.log(tmp);

//eval keyword
// var bar = "bar";
// function foo(str) {
//     eval(str);
//     console.log(bar);
// }
// foo("bar =11");

//with keyword
// var obj ={
//     a:2,
//     b:4,
//     c:5

// }

// with(obj){
//     d=3;
//     a = c+d;
// }
// console.log(obj.a);

//IIFE 
var name = "adarsh";
(function IIFE(){
    var name="Moradiya";
    console.log(name);
}());
console.log(name);
// zee();