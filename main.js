const display = document.getElementById("display") ;


function appendToDisplay(input){
    const lastchr = display.value.slice(-1)

    if (["+", "-", "*", "/"].includes(lastchr) && ["+", "-", "*", "/"].includes(input)){
        return 
    }
    else {
         display.value += input ;
    }
   
}
function calculate(){
    try{
        display.value = eval(display.value) ;
    }
    catch(error){
        display.value = "ERROR" ;

        setTimeout(()=>{display.value = "" ;},5000)

    }
    
}
function clearDisplay() {
    display.value = "" ;
}   

function backspace(){
    display.value = display.value.slice(0,-1) ;
}


const themebtn = document.getElementById("theme") ;


themebtn.addEventListener("click", () =>{
    document.body.classList.toggle("dark") ;
    
    if (document.body.classList.contains("dark")){
        themebtn.textContent = "light-mode"
    }else{
        themebtn.textContent = "dark-mode"
    }
}) ;

