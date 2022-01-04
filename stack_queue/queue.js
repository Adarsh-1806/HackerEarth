var queue = new Array(100);
const front=0,rear=0,cnt=0,ar_size=40;
var input=['E',2,'E',5,'D','E',3,'D'];
// console.log(typeof(input[1]));
function enqueue(queue,ar_size,rear,cnt,element){
    if(cnt == ar_size){
        console.log("Overflow.....\n");
    }else{
        queue[rear++] = element;
        console.log(rear);
        rear %= ar_size;
        cnt++;
        // console.log(cnt);
    }

}
function dequeue(queue,ar_size,front,cnt){
    if(cnt == 0){
        console.log("Underflow.....\n");
    }else{
        // console.log(queue[0]);
        queue[front] = null;
        front = (front+1)%ar_size;
        cnt--;
        // console.log(cnt);
    }

}
for(let i=0;i<input.length;i++){
    if(input[i]=='E'){
        // i++;
        var element = input[++i];
        // console.log(element);
        enqueue(queue,ar_size,rear,cnt,element);
    }
    else{
        dequeue(queue,ar_size,front,cnt);
    }
}