const number_btn = document.querySelectorAll('.number-data');
const arithmaticOp = document.querySelectorAll('.arithmaticOp');
const single_value = document.querySelectorAll('.single-value');
const fun_btn = document.querySelectorAll('.fun');
const default_val = document.querySelectorAll('.default-val');
const memory_btns = document.querySelectorAll('.memory-stack');
const all_clear = document.querySelector('.all-clear');
const current_data = document.querySelector('.screen'); 
const backspace = document.querySelector('.backspace'); 
const previous_data='';
const memory_data = '';

class Calculator{
    constructor(current_data){
        this.current_data = current_data;
        // this.previous_data = previous_data;
        this.clear();
        // console.log(current_data);
    }
    clear(){
        this.current_data='';
        this.previous_data='';
        this.operation = undefined;
        this.updateDisplay();
    }
    delete(){
        this.current_data = this.current_data.substring(0,this.current_data.length-1);
        this.updateDisplay();
    }

    addnumbers(number){
        // console.log('ok im in');
        if(number === '.' && this.current_data.includes('.')) return;
        this.current_data = this.current_data.toString()+number.toString();
        // console.log(this.current_data); 
    }
    updateDisplay(){
        current_data.value = this.current_data.toString();
    }
    single_value_function(operation){
        if(operation.includes('ln')){
            this.current_data = Math.log(this.current_data);
        }else if(operation.includes('log')){
            this.current_data = Math.log10(this.current_data);
        }else if(operation.includes('10')){
            this.current_data = Math.pow(10,this.current_data);
        }else if(operation.includes('|x|')){
            if(this.current_data <0)    this.current_data *= (-1);
        }else if(operation.includes('2√x')){
            this.current_data = Math.sqrt(this.current_data);
        }else if(operation.includes('x') && operation.includes('2')){
            this.current_data = this.current_data*this.current_data;
        }else if(operation.includes('1/')){
            this.current_data =1/this.current_data;
        }else if(operation.includes('n!')){
            this.current_data =this.factorial(this.current_data);
        }else if(operation.includes('+/ -')){
            this.current_data *= (-1);
            console.log(this.current_data);
        }

        this.updateDisplay();   
    }
    factorial(n){
        var ans=1;
        for (var i = 2; i <= n; i++)
        ans = ans * i;
        return ans;
    }
    perform_operation(){
        let answer;
        // console.log(typeof(this.current_data));
        let pre_data = parseFloat(this.previous_data);
        let cur_data = parseFloat(this.current_data);
       
        // console.log(max_fractions);
        if(isNaN(cur_data) || isNaN(pre_data))  return;

        switch (this.operation) {
            case '+': 
                answer = pre_data + cur_data;
                break;
            case '÷': 
                answer = pre_data / cur_data;
                break;
            case 'X': 
                answer = pre_data * cur_data;
                break;
            case '-': 
                let max_fractions =this.find_max_fractions(this.current_data,this.previous_data);
                answer = (pre_data - cur_data).toFixed(max_fractions);
                break;
            case 'mod': 
                answer = pre_data%cur_data;
                break;
            case 'x y': 
                answer = Math.pow(this.previous_data,this.current_data);
                break;
            default:
                break;
        }
    // console.log(cur_data);
    // console.log(pre_data);
    this.current_data = answer;
    this.previous_data = '';
    this.operation = undefined;

    this.updateDisplay();
    }
    find_max_fractions(num1,num2){
        let fr_digit1 = num1.split('.');
        let fr_digit2 = num2.split('.');
        var n1='',n2='';
        if(fr_digit1.length>1)  n1 = fr_digit1[1]; 
        if(fr_digit2.length>1)  n2 = fr_digit2[1]; 
        // console.log(n1 +" "+ n2);
        return Math.max(n1.length,n2.length);
    }
    valid_operation(operation){
        if(this.current_data === '')    return;
        if(this.previous_data !== ''){
            this.perform_operation();
        }
        this.previous_data = this.current_data;
        this.current_data = '';
        this.operation = operation;
    }
    perform_fun(fun){
        let answer;
        switch (fun) {
            case 'sin':
                answer = Math.sin(this.current_data);
                break;
            case 'cos':
                answer = Math.cos(this.current_data);
                break;
            case 'tan':
                answer = Math.tan(this.current_data);
                break;
            case 'cot':
                answer = 1 / Math.tan(this.current_data);
                break;
            case 'sec':
                answer = 1 / Math.cos(this.current_data);
                break;
            case 'csc':
                answer = 1 / Math.sin(this.current_data);
                break;
            case 'rand':
                answer = Math.random(); 
                break;
            case 'floor':
                answer = Math.floor(this.current_data);
                break;
            case 'ceil':
                answer = Math.ceil(this.current_data);
                break;
        
            default:
                break;
        }
        this.current_data = answer;
        this.updateDisplay();
    }
    default_val_fun(sym){
        switch (sym) {
            case '𝞹':
                this.current_data = Math.PI;
                break;
            case 'e':
                this.current_data = Math.E;
                break;
        
            default:
                break;
        }
        this.updateDisplay();
    }
    memory_stack(operation){
        let memory = parseFloat(this.memory_data);
        let cur = parseFloat(this.current_data);
        switch (operation) {
            case 'MC':
                this.memory_data='';
                break;
            case 'MR':
                this.current_data = memory.toString();
                break;
            case 'M+':
                memory += cur;
                this.memory_data = memory.toString();
                this.current_data = '';
                break;
            case 'M-':
                memory -= cur;
                this.memory_data = memory.toString();
                this.current_data = '';
                break;
            case 'MS':
                this.memory_data = this.current_data;
                this.current_data = '';
                break;
            default:
                break;
        }
        this.updateDisplay();
    }

}

//instace of class
const calc = new Calculator(current_data);

//All Button Pressed Events
number_btn.forEach(button => {
    button.addEventListener('click',()=>{
        calc.addnumbers(button.innerText);
        calc.updateDisplay();
    })
});

// eqal_btn.addEventListener('click',()=>{
//     calc.updateDisplay();
//     console.log('Eqal pressed!!');
// })

all_clear.addEventListener('click',()=>{
    calc.clear();
    console.log('Clear button pressed!!');
})

backspace.addEventListener('click',()=>{
    calc.delete();
    console.log('Backspace button pressed!!');
})
default_val.forEach(button => {
    button.addEventListener('click',()=>{
    calc.default_val_fun(button.innerText);
    console.log('PI || E pressed!!');
    })
});

arithmaticOp.forEach(button => {
    button.addEventListener('click',()=>{
    calc.valid_operation(button.innerText);
    console.log('Arithmatic Operation:- '+button.innerText);
    })
});

single_value.forEach(button => {
    button.addEventListener('click',()=>{
    calc.single_value_function(button.innerText);
    console.log('single_value button pressed!!');
    })
});

memory_btns.forEach(button => {
    button.addEventListener('click',()=>{
    calc.memory_stack(button.innerText);
    console.log('Memory button pressed!!');
    })
});

fun_btn.forEach(button => {
    button.addEventListener('click',()=>{
    calc.perform_fun(button.innerText);
    console.log('single_value button pressed!!');
    })
});