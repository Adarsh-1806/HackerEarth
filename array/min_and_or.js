const ar = [2,4,7];
// console.log(ar);
var ans = 99999;
for(let i=0;i<ar.length;i++){
    for(let j=i+1;j<ar.length;j++){
        var tmp = (ar[i]&ar[j])^ (ar[i]|ar[j]);
        if(tmp < ans)   ans = tmp;
    }
}
console.log(ans);