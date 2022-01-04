var input = [1,5,4,2,3];
var m = new Map();
for(var i=0;i<input.length;i++){
    m.set(input[i],i);
}
console.log(m);
insertion_sort(input,input.length);
function insertion_sort(input,n) {
    for (let i = 0; i  < n; i++) {
        var tmp = input[i];
        var j=i;
        while(j>0 && input[j-1] > tmp){
            input[j] = input[j-1];
            j--;
        }
        input[j] = tmp;
    }
}