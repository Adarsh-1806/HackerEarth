var a = [5,24,4,85,1,33,15,78,55,35];
// var start = 0, end = a.length-1;
a=merge_sort(a);
console.log(a);

function merge_sort(a){
    const mid = Math.floor(a.length/2);
    console.log(mid);
    if(a.length < 2)    return a;
    const tmp = a.splice(0,mid);
    return merge(merge_sort(tmp),merge_sort(a));
}
function merge(left,right){
    const ar = [];
    while(left.length && right.length){
        if(left[0] < right[0])  ar.push(left.shift());
        else  ar.push(right.shift());
    }
    return [...ar,...left,...right];
}
