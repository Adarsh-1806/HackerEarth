var a = [5,24,4,85,1,33,15,78,55];
// var start = 0, end = a.length-1;
a=merge_sort(a);
console.log(a);

function merge_sort(a){
    // if(start < end){
    //     var mid = (start+end)/2;    
    //     merge_sort(a,start,mid);
    //     merge_sort(a,mid+1,end);
    // }
    // merge(a,start,mid,end);
    const mid = a.length/2;
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
    // var p=start,q=mid+1;
    // var ar= new Array(end-start+1);
    // // console.log(ar.length);
    // var k=0;
    // for(var i=start;i<=end;i++){
    //     if(p>mid)   
    //         ar.push(a[q++]);
    //     else if(q>end)   
    //         ar.push(a[p++]);
    //     else if(a[p]>a[q])   
    //         ar.push(a[q++]);
    //     else   
    //         ar.push(a[p++]);
    // }
    // for(var i=0;i<ar.length;i++){
    //     a[start++] = ar[i];
    // }
}
