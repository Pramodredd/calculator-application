var firstValue = ''; // Variable to store the first value for calculations
var operator = ''; // Variable to store the operator

function display(value) {
  var content = document.getElementById('content');
  var currentContent = content.textContent;

  if (currentContent.length >= 15) {
    if (value !== '=' && value !== '+' && value !== '-' && value !== 'x' && value !== '/') {
      return; // Do not append new value or operator if the length exceeds 18 characters
    }
  }

  if (value === '.') {
    if (!currentContent.includes('.')) {
      if (currentContent === '') {
        content.textContent = '0' + value;
      } else {
        content.textContent += value;
      }
    }
  } else if (value === '+' || value === '-' || value === 'x' || value === '/') {
    if (currentContent !== '') {
      firstValue = parseFloat(currentContent.replace(/,/g, '')); // Store the current content as the first value and remove commas
      operator = value; // Store the operator
      content.textContent = ''; // Clear the content for next input
    }
  } else if (value === '=') {
    if (currentContent !== '') {
      var secondValue = parseFloat(currentContent.replace(/,/g, ''));
      var result = calculate(firstValue, operator, secondValue);
      content.textContent = formatNumber(result); // Format the result with comma separators
      firstValue = ''; // Reset the first value
      operator = ''; // Reset the operator
    }
  } else {
    content.textContent += value;
  }
}

function calculate(firstValue, operator, secondValue) {
  switch (operator) {
    case '+':
      return firstValue + secondValue;
    case '-':
      return firstValue - secondValue;
    case 'x':
      return firstValue * secondValue;
    case '/':
      return firstValue / secondValue;
    default:
      return firstValue;
  }
}

function formatNumber(number) {
  return number.toLocaleString(); // Use toLocaleString for better number formatting
}


function reset() {
  var content = document.getElementById('content');
  content.textContent = '';
  firstValue = BigInt(0);
  operator = '';
}

function del() {
  var content = document.getElementById('content');
  content.textContent = content.textContent.slice(0, -1);
}

function setTheme(theme) {
  const root = document.documentElement;
  root.className = ''; // Remove existing theme classes
  root.classList.add(theme); // Add the selected theme class
  var a=document.getElementById('dot1');
  var b=document.getElementById('dot2');
  var c=document.getElementById('dot3');
  if(theme === 'theme1'){
    a.style.backgroundColor='hsl(6, 63%, 50%)';
    b.style.backgroundColor='hsl(223, 31%, 20%)';
    c.style.backgroundColor='hsl(223, 31%, 20%)';
  }else if(theme === 'theme2'){
    a.style.backgroundColor='hsl(0, 5%, 81%)';
    b.style.backgroundColor='hsl(25, 98%, 40%)';
    c.style.backgroundColor='hsl(0, 5%, 81%)';
  }else if(theme === 'theme3'){
    a.style.backgroundColor='hsl(268, 71%, 12%)';
    b.style.backgroundColor='hsl(268, 71%, 12%)';
    c.style.backgroundColor='hsl(176, 100%, 44%)';
  }
}
setTheme('theme1'); // Apply the default theme on page load

