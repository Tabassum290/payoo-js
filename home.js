// document.getElementById('add-money').addEventListener('click', function(event){
//     event.preventDefault();
// console.log('Add buttton clicked');
// })

document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();
    const addMoneyInput = document.getElementById('input-add-money').value;
    console.log(addMoneyInput);
    const addInput = document.getElementById('pin-number').value;
    console.log(addInput);

    if(addInput === '1234'){
        console.log('adding your account');
        const balance = document.getElementById('current-money').innerText;
        console.log(balance); 

const addnewMoney = parseFloat(addMoneyInput);
const balanceNumber = parseFloat(balance);
const newBalance = addnewMoney + balanceNumber;
console.log(newBalance);
document.getElementById('current-money').innerText = newBalance;
    }else{
        alert('Failed to add money!');
    }
    if(addInput === '1234'){
        console.log('cashout option');
        window.location.href = '/cashout.html';
    }else{
        alert('Your pin is incorrect!');
    }
} )

