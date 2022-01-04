var freq = [7,3,4,1];
var  key = [2,2];
var total = 0,n=freq.length,k=key.length;
key.forEach(element => {
    total += element;
});
if(total < freq.length) console.log(-1);
else{
    freq.sort;
    freq.reverse;
    key.sort;
    key.reverse;
    var ans=0,mul=1,i=0;
    while(i<n){
        for(var j=0;j<k;j++){
            if(i == n) break;
            else if(key[j] == 0) break;
            ans += freq[i]*mul;
            i++;
            key[j]--;
        }
        mul++;
        if(i==n) break;
    }
    console.log(ans);
}