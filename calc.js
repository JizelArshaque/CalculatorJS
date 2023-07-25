// display content inside calculator  screen

function display(content){
    result.value+=content  
}

// Clear calculator screen

function clearBox(){
    result.value=""
}

// Evaluate expressions
function calculate(){
    try{
        result.value = eval(result.value)
    }catch{
        result.value="ERROR!"
    }
    
}

// Remove las eement backspace
function removeLast(){
    result.value =result.value.slice(0,-1)
}