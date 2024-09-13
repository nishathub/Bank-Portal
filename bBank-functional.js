// deposit :
// step 1: select the deposit button + add event listener
const depositBtn = document.getElementById('depositBtn');
depositBtn.addEventListener('click', function(){
// step 2: get new deposit amount
   let newDepositValue = getInputValueById('depositBox');
// step 3: get old deposit amount
   let oldDepositValue = getElementValueById('oldDepositAmnt');
// step 4: apply condition to filter only number entry
   if(newDepositValue === ""){
    alert('Deposit value can not be empty')
} else if (isNaN(parseFloat(newDepositValue))){
    alert('Enter a valid amount')
} else {
// step 5: Update deposit value
    let totalDepositAmnt = parseFloat(newDepositValue) + oldDepositValue;
    setNewValueToElement('oldDepositAmnt', totalDepositAmnt);
    // document.getElementById('oldDepositAmnt').textContent = `$${totalDepositAmnt}`;
    // step 6: Update balance value
    let oldBalanceValue = getElementValueById('balanceAmnt');
    let newBalanceValue = oldBalanceValue + parseFloat(newDepositValue);
    // step 7: get old balance value & set new value
    setNewValueToElement('balanceAmnt', newBalanceValue);
    updateBalanceColor(newBalanceValue);
}
})
// withdraw:
// step 1: select the deposit button + add event listener
const withdrawBtn = document.getElementById('withdrawBtn');
withdrawBtn.addEventListener('click', function(){
// step 2: get new deposit amount
   let newWithdrawValue = getInputValueById('withdrawBox');
// step 3: get old deposit amount
   let oldWithdrawValue = getElementValueById('oldWithdrawAmnt');
// step 4: apply condition to filter only number entry
   if(newWithdrawValue === ""){
    alert('Deposit value can not be empty')
} else if (isNaN(parseFloat(newWithdrawValue))){
    alert('Enter a valid amount')
} else {
// step 5: Update deposit value
    let totalWithdrawAmnt = parseFloat(newWithdrawValue) + oldWithdrawValue;
// step 6: get old balance value
    let oldBalanceValue = getElementValueById('balanceAmnt');
// step 7: Update balance value
    let newBalanceValue = oldBalanceValue - parseFloat(newWithdrawValue);
    updateBalanceColor(newBalanceValue);
    if(newBalanceValue < 1){
        alert('Insufficient Balance')
    } else {
        // last two lines are raw code. we used function to operate here.
        setNewValueToElement('oldWithdrawAmnt', totalWithdrawAmnt);
        setNewValueToElement('balanceAmnt', newBalanceValue);
        // document.getElementById('oldWithdrawAmnt').textContent = `$${totalWithdrawAmnt}`;
        // document.getElementById('balanceAmnt').textContent = `$${newBalanceValue}`;
        }
    
}
})

