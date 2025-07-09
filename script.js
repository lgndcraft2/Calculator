const display = document.querySelector('.display');
const conditions = ['+', '-', '*', '/'];


function appendDigit(val) {
    const operators = ['+', '-', '*', '/'];
    const lastChar = display.innerHTML.slice(-1);

  if (operators.includes(val)) {
    if (display.innerHTML === '') return;

    // Replace last operator if the previous character is also an operator
    if (operators.includes(lastChar)) {
      display.innerHTML = display.innerHTML.slice(0, -1) + val;
    } else {
      display.innerHTML += val;
    }
    return;
  }

  // Handle decimal point
  if (val === '.') {
    const parts = display.innerHTML.split(/[\+\-\*\/]/);
    const lastPart = parts[parts.length - 1];

    // Only one dot in the same number
    if (lastPart.includes('.')) return;

    // If display is empty or last character is an operator, start with "0."
    if (display.innerHTML === '' || operators.includes(lastChar)) {
      display.innerHTML += '0.';
    } else {
      display.innerHTML += '.';
    }
    return;
  }

    // Handle zeroes
  if (val === '0') {
    const parts = display.innerHTML.split(/[\+\-\*\/]/);
    const lastPart = parts[parts.length - 1];
    if (lastPart === '0') return;
  }

  if (display.innerHTML === '0' || display.innerHTML === 'Error') {
    display.innerHTML = val;
  } else {
    display.innerHTML += val;
  }
}

function calculate() {
    if (conditions.includes(display.innerHTML.slice(-1))) {
        display.innerHTML = display.innerHTML.slice(0, -1);
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

function deleteValue() {
    if (display.innerHTML.length == 1) {
        display.innerHTML = '0';
    }else{
        display.innerHTML = display.innerHTML.slice(0, -1);
    }
}