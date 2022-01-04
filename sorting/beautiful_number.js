const l=1,r=100,cnt=0;
const array=[];
for(var i=l;i<=r;i++){
    var ar=[];
    var digit=0,ans=0,num=i;
    while(num>0){
        digit++;
        var tmp = num%10;
        ans += tmp;
        ar.push(tmp);
        num = num/10;
    }
    console.log(ar);
    if(digit%2 != 0){
        i = i*10;
    }
    else{
        var half = ar.splice(0,(ar.length/2));
        var x=0;
        half.forEach(e => {
            x += e;
        });
        if(x*2 == ans) {
            cnt++;
            array.push(i);
        }
    }
}
// console.log(cnt);