// display content on calculator screen

function displayContent(content) {
    result.value += content
    
}


// clear content on calculator screen

function calcClearScreen() {
    result.value = ""
    
}


// to evaluate function

function calcOutput(){
    result.value = eval(result.value)
}

// backspace

function removeLastDigit(){
    result.value = result.value.slice(0,-1)
}