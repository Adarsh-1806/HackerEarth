// function foo() {
//     var bar = "bar";
//     setTimeout(function () {
//         console.log(bar);   
//     },5000);
// }
// foo();

// closure loop
// for (var i = 1; i <=5; i++) {
//     setTimeout(function(){
//         console.log('i:'+i);
//     }, i*1000);
// }

// Object reference not closure
// var foo = (function () {
//     var o = {bar: "bar"};
//     return {obj:o};
// })();
// console.log(foo.obj.bar);

//classic module pattern
var foo = (function(){
    var ob = {bar:"bar"};
    return {
        bar: function () {
            console.log(ob.bar);
        }
    }
})();

foo.bar();