// 
function getElementValueById(elementId){
    let element = document.getElementById(elementId);
    let elementString = element.textContent.match(/\d+/);
    let elementValue = String ? parseFloat(elementString[0]) : null;
    return elementValue;
 }
 
  function getInputValueById(inputId){
    let inputField = document.getElementById(inputId);
    let inputValue = inputField.value;
    inputField.value = '';
    return inputValue;
 }
 // step 7: get old balance value & set new value FUNCTION
 function setNewValueToElement(elementId, newValue){
    let elementBox = document.getElementById(elementId);
    elementBox.textContent = `$${newValue}`;
 }
 
 // BALANCE COLOR ACCORDING TO AMOUNT FUNCTION
 function updateBalanceColor(balanceValue) {
     let elementBox = document.getElementById('balance_bg');
     let balanceHeading = document.getElementById('balance_heading');
     if (balanceValue < 1000) {
     elementBox.style.backgroundColor = 'pink';
     balanceHeading.innerText = 'Low Balance !';
     } else if (balanceValue > 2500) {
         elementBox.style.backgroundColor = 'lightGreen';
         balanceHeading.innerText = 'Sufficient Balance';
     } else {
         elementBox.style.backgroundColor = '';
         balanceHeading.innerText = 'Balance';
     }
 }