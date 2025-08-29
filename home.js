const validPin = 1234;

function getInputValue(id){
   return document.getElementById(id).value;
}

function getInputValueNumber(id){
   return  parseInt(document.getElementById(id).value);
}

function getInputTextNumber(id){
   return parseInt(document.getElementById(id).innerText);
}

function toSetInnerText(value){
   return document.getElementById('available-balance').innerText = value ;
}

function handleToggle(id){
     const forms = document.getElementsByClassName('form');
   for (const form of forms){
    form.style.display = 'none';
   }
   document.getElementById(id).style.display = 'block';

}

function handleButtonToggle(id){
    const formBtns = document.getElementsByClassName('form-btn');
    for(const btn of formBtns){
        btn.classList.remove('border-[#0874f2]','bg-[#0874f20d]');
        btn.classList.add('border-gray-300');
    }
    document.getElementById(id).classList.remove('border-gray-300');
    document.getElementById(id).classList.add('border-[#0874f2]','bg-[#0874f20d]');
}

// add money features 
document.getElementById('add-money-btn').addEventListener('click',function(e){
    e.preventDefault()
    console.log('add');
    const bank = getInputValue('bank');
    const accountNumber = getInputValue('account-number');
    const amount = getInputValueNumber('add-amount');
    const pin = getInputValueNumber('add-pin');
    const availableBalance = getInputTextNumber('available-balance');

     if(accountNumber.length < 11){
        alert("Please provide a valid account number.");
        return;
     }
     if(pin !== validPin){
        alert("Please provide valid pin number");
        return;
     }

    const totalNewBalance = amount + availableBalance;
    toSetInnerText(totalNewBalance) ;
})


// cash out features 

document.getElementById('withdraw-btn').addEventListener('click',function(e){
    e.preventDefault()
 
    const amount = getInputValueNumber('withdraw-amount');
    const availableBalance = getInputTextNumber('available-balance');
    const totalNewBalance = availableBalance -amount;
    toSetInnerText(totalNewBalance);

})




// toggling features 

document.getElementById('add-button').addEventListener('click',function(){
    handleToggle("add-money-parent");
    handleButtonToggle("add-button");
})

document.getElementById('cash-button').addEventListener('click',function(){
  handleToggle("cash-out-parent");
    handleButtonToggle("cash-button");
})

document.getElementById('transfer-button').addEventListener('click',function(){
 handleToggle("transfer-money-parent");
    handleButtonToggle("transfer-button");

})

