var s = "ooneefspd";
var n=0,m=5;

var char_array = [];
char_array.fill(0);
//create array of char that is in range
for(var i=n;i<m;i++)
    char_array.push(s[i]);
char_array.sort().reverse();

var i=n;
for(var k=0;k<char_array.length;k++){
    s = setchar(s,i,char_array[k]);
    i++;
}
//function to set char at given undex
function setchar(s,index,chr){
    return s.substring(0,index) + chr + s.substring(index+1);
}
console.log(s);