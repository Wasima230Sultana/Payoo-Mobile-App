const validPin = 1234;
// add money features 
document.getElementById('add-money-btn').addEventListener('click',function(e){
    e.preventDefault()
    console.log('add');
    const bank = document.getElementById('bank').value;
    const accountNumber = document.getElementById('account-number').value;
    const amount = parseInt( document.getElementById('add-amount').value);
    const pin = parseInt(document.getElementById('add-pin').value);
    const availableBalance = parseInt(document.getElementById('available-balance').innerText);

     if(accountNumber.length < 11){
        alert("Please provide a valid account number.");
        return;
     }
     if(pin !== validPin){
        alert("Please provide valid pin number");
        return;
     }

    const totalNewBalance = amount + availableBalance;
    document.getElementById('available-balance').innerText = totalNewBalance ;
})


// cash out features 

document.getElementById('withdraw-btn').addEventListener('click',function(e){
    e.preventDefault()
 
    const amount = parseInt(document.getElementById('withdraw-amount').value);
    const availableBalance = parseInt(document.getElementById('available-balance').innerText);
    const totalNewBalance = availableBalance -amount;
    document.getElementById('available-balance').innerText = totalNewBalance;

})




// toggling features 

document.getElementById('add-button').addEventListener('click',function(){
    document.getElementById('cash-out-parent').style.display = 'none';
    document.getElementById('add-money-parent').style.display = 'block';
})

document.getElementById('cash-button').addEventListener('click',function(){
    document.getElementById('add-money-parent').style.display = 'none';
    document.getElementById('cash-out-parent').style.display = 'block';
})
