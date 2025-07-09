const display = document.querySelector('.display');
const conditions = ['+', '-', '*', '/'];


function appendDigit(val) {
    if(display.innerHTML === '0' && val !== '.') {
        display.innerHTML = '';
    }else if (conditions.includes(val)) {
    if (display.innerHTML === '') return; // block operator at start

    if (conditions.includes(display.innerHTML.slice(-1))) {
        display.innerHTML = display.innerHTML.slice(0, -1);
    }

    display.innerHTML += val; // now append operator
    return;
    }
    display.innerHTML += val;
}

function calculate() {
    if (conditions.includes(display.innerHTML.slice(-1))) {
        display.innerHTML = display.innerHTML.slice(0, -1); // remove last operator if it's an operator  
    }
    else if (display.innerHTML === '' || display.innerHTML === null || display.innerHTML === undefined || display.innerHTML === '0' || display.innerHTML === 'Error') {
        display.innerHTML = '0'; // if display is empty, set it to 0
    }
    else if (display.innerHTML === '.') {
        display.innerHTML = '0.'; // if display is just a dot, set it to 0.
    }
    result = eval(display.innerHTML)
    if (result === Infinity || result === -Infinity) {
        display.innerHTML = 'Error'; // handle division by zero
    } else {
        display.innerHTML = result; // display the result
    }
}

function clearDisplay() {
    display.innerHTML = '0'; // clear the display
}