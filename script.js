
let allInput = document.querySelectorAll("input");
let count =0;
const meter = document.querySelector("meter");
const output = document.querySelector("output");

let obj = {
    1:false,
    2:false,
    3:false,
    4:false,
    5:false,
    6:false,
}

allInput = [...allInput];
for(let i=allInput.length-1; i>=0;i--){
    let val = i+1;
    item = allInput[i];
    
    item.addEventListener("keypress",function(){
        if(item.checkValidity() && obj[val] == false){
            count++;
            obj[val] =true;
            meter.value =count;
            output.value = `${count}/6`;


        }


    }); 
};