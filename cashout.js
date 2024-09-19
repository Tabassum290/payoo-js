document.getElementById('btn-cash-out').addEventListener('click', function(event){
    event.preventDefault();
    const  cashoutMoney = document.getElementById('cash-out-money').value;
    const pinNumber = document.getElementById('cash-out-pin').value;
    
    console.log(pinNumber);
    console.log(cashoutMoney);
    if(pinNumber === '1234'){
        console.log('money is reducing');
        const balance = document.getElementById('current-value').innerText;
        console.log(balance); 

const addnewMoney = parseFloat(cashoutMoney);
const balanceNumber = parseFloat(balance);
const newBalance = balanceNumber-addnewMoney;
console.log(newBalance);
document.getElementById('current-value').innerText = newBalance;
    }else{
        alert('Failed to cashOut!');
    }
})