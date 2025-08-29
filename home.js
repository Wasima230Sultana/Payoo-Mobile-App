const validPin = 1234;
const transactionData = [];

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
    if(amount <= 0){
        alert('invalid amount');
        return;
    }
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

    const data = {
        name : "Add Money",
        date : new Date().toLocaleDateString()
    }
    transactionData.push(data);
})


// cash out features 

document.getElementById('withdraw-btn').addEventListener('click',function(e){
    e.preventDefault()
 
    const amount = getInputValueNumber('withdraw-amount');
    const availableBalance = getInputTextNumber('available-balance');
    if(amount <= 0 || amount > availableBalance){
        alert('invalid amount');
        return;
    }
    const totalNewBalance = availableBalance -amount;
    toSetInnerText(totalNewBalance);

    const data = {
        name : "Cash Money",
        date : new Date().toLocaleDateString()
    }
    transactionData.push(data);

})

document.getElementById('transaction-button').addEventListener('click',function(){
    const transactionContainer = document.getElementById('transaction-container');
    transactionContainer.innerText = "";

    for(const data of transactionData){
        const div = document.createElement("div");
        div.innerHTML = `
        <div class="bg-white rounded-xl p-3 flex justify-between items-center mt-3">
                <div class="flex items-center ">
                <div class=" rounded-full p-3 bg-[#f4f5f7]">
                    <img class="mx-auto" src="assets/wallet1.png" alt="">
                </div>
                
                <div class="ml-2">
                    <h1>${data.name}</h1>
                    <p>${data.date}</p>
                </div>
            </div>

            <i class="fa-solid fa-ellipsis-vertical"></i>
            </div>
        `
        transactionContainer.appendChild(div);
    }

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

document.getElementById('bonus-button').addEventListener('click',function(){
 handleToggle("get-bonus-parent");
    handleButtonToggle("bonus-button");

})

document.getElementById('pay-button').addEventListener('click',function(){
 handleToggle("pay-bill-parent");
    handleButtonToggle("pay-button");

})

document.getElementById('transaction-button').addEventListener('click',function(){
 handleToggle("transactions-parent");
    handleButtonToggle("transaction-button");

})
