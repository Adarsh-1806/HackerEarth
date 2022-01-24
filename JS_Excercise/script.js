// var screen_data = document.getElementById('disp-input');
// console.log(screen_data);

// var current_data= '';
// function displaydata(current_data) {
//     screen_data.value = current_data;
// }

// function dataEntry(input) {
//     current_data += input;
//     displaydata(current_data);
// }

// function cleardata() {
//     current_data = '';
//     console.log(current_data);
//     displaydata(current_data);

// }
// function backspace() {
//     screen_data.value = screen_data.value.substring(0,screen_data.value.length-1);
//     current_data = screen_data.value;
// }
const number_btn = document.querySelectorAll('.number-data');
const arithmaticOp = document.querySelectorAll('.arithmaticOp');
const all_clear = document.querySelector('.all-clear');
const eqal_btn = document.querySelector('.eqal');
const current_data = document.querySelector('.screen'); 
const backspace = document.querySelector('.backspace'); 
const previous_data='';

class Calculator{
    constructor(current_data){
        this.current_data = current_data;
        // this.previous_data = previous_data;
        this.clear();
        // console.log(current_data);
    }
    clear(){
        this.current_data='';
        // this.previous_data='';
        this.updateDisplay();

    }
    addnumbers(number){
        // console.log('ok im in');
        if(number === '.' && this.current_data.includes('.')) return;
        this.current_data = this.current_data.toString()+number.toString();
        console.log(this.current_data); 
    }
    updateDisplay(){
        current_data.value = this.current_data;
    }
    delete(){
        this.current_data = this.current_data.substring(0,current_data.length-1);
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

eqal_btn.addEventListener('click',()=>{
    // calc.updateDisplay();
    console.log('Eqal pressed!!');
})

all_clear.addEventListener('click',()=>{
    calc.clear();
    console.log('Clear button pressed!!');
})

backspace.addEventListener('click',()=>{
    calc.delete();
    console.log('Backspace button pressed!!');
})

arithmaticOp.forEach(button => {
    button.addEventListener('click',()=>{
    console.log('Arithmatic button pressed!!');
    })
});