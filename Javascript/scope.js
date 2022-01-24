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
// var name = "adarsh";
// (function IIFE(){
//     var name="Moradiya";
//     console.log(name);
// }());
// console.log(name);
// zee();

//lrt keyword
// function temp(flag) {
//     if(flag){
//         var str = "adarsh";
//         for (var i = 0; i < str.length; i++) {
//             console.log(str.charCodeAt(i));
//         }
//         console.log(i); //error if use 'let'
//     }
// }
// temp(true);

//hoisting
// var a = b;
// var b = 2;
// console.log(a);
// console.log(b);
// b;
// a;

//Function hoisting
// function foo() {
//     console.log("First foo");
// }
// function foo() {
//     console.log("second foo");
// }
// foo(); 
// console.log(foo);
// var foo = 2;

//this Binding
// function foo() {
//     var obj = {bar:"bar-local"};
    // this.baz=baz;
    // this.baz();
    // baz.call(obj);
// }
// function baz() {
//     console.log(this.bar);
// }
// var bar = "bar-global";
// foo();

//Hard Binding

// function foo() {
//     console.log(this.bar);
// }
// var obj = {bar:"bar"};
// var obj1 = {bar:"bar1"};

// foo();
