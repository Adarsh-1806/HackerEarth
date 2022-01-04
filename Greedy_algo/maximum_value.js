var input = 4;
var ans = 1;
for(var i=2;i<=input;i++){
    if(prime(i) && ans < i) {
        ans = i;
        // console.log(ans);
    }
}
console.log(ans);

function prime(n) {
    for(var i=2;i<=Math.sqrt(n);i++){
        if(n%i == 0)    return false;
    }
    return true;
}