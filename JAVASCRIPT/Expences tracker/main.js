const bankBalance = document.getElementById('bankBalance');
const money_Credit = document.getElementById('money_Credit');
const money_Debit = document.getElementById('money_Debit');
const dataList = document.getElementById('dataList');
const form = document.getElementById('form');
const text = document.getElementById('text');
const amount = document.getElementById('amount');
const stateAmount = document.getElementById('stateAmount');

// Update localStorage transactions
function LocalStorage() {
    localStorage.setItem('transactionsData', JSON.stringify(transactions));
}

const localStorageData = JSON.parse(
    localStorage.getItem('transactionsData')
);

let transactions =
    localStorage.getItem('transactionsData') !== null ?
        localStorageData : [];

// Add transaction
function addTransactionData(e) {
    e.preventDefault();
    // console.log(e)
    if (text.value.trim() === '' || amount.value.trim() === '' || stateAmount.value === '') {
        alert('Please Enter All Inputs')
    } else {
        const singleTransaction = {
            id: autoGenerate(stateAmount.value),
            text: text.value,
            amount: +amount.value,
            stateOfAmount: stateAmount.value
        };

        transactions.push(singleTransaction);
        addUIData(singleTransaction);
        updateValues();
        LocalStorage();
        // console.log(transactions)
        text.value = '';
        amount.value = '';
        stateAmount.value = '';
    }
}

function autoGenerate(state) {
    state = (state == 'Credit') ? '11111' : '00000'
    return `${Math.floor(Math.random() * 100000000)}${state}`
}

function addUIData(data) {
    // console.log(data)
    const stateOfData = data.stateOfAmount === 'Debit' ? '-' : '+';
    const stateOfData1 = data.stateOfAmount === 'Debit' ? 'debit' : 'credit';

    const singleData = document.createElement('li');
    singleData.classList.add(stateOfData1)

    singleData.innerHTML = `
  <span>${data.text}</span>
  <span class="${stateOfData1}_value">(${stateOfData}${data.amount}
  <i class="fa-solid fa-indian-rupee-sign"></i>)
  </span>
  <button class='delete' onclick="deleteData(${data.id})">X</button>
  `;
    dataList.appendChild(singleData);

}


function deleteData(id) {
    console.log('id', id)
    let new1 = [...transactions]
    let new2 = new1.filter(value => value.id != id)

    transactions = [...new2]

    LocalStorage();
    UISet();
    console.log('transactions', transactions)
}

function updateValues() {
    let amounts = transactions.map(value => {
        return value.stateOfAmount == 'Debit' ? (-value.amount) : (value.amount)
    });
    //total balance
    let total = amounts.reduce((value, index) => (value += index), 0).toFixed(2);
    //total credit
    let income = amounts.filter(value => value > 0)
    income = income.reduce((value, index) => (value += index), 0).toFixed(2);
    //total debit
    let expense = amounts.filter(value => value < 0)
    expense = expense.reduce((value, index) => (value += index), 0).toFixed(2);

    bankBalance.innerHTML = `${total} <i class="fa-solid fa-indian-rupee-sign"></i>`;
    money_Credit.innerHTML = `${income} <i class="fa-solid fa-indian-rupee-sign"></i>`;
    money_Debit.innerHTML = `${expense} <i class="fa-solid fa-indian-rupee-sign"></i>`;
    // console.log(expense)
}

function UISet() {
    dataList.innerHTML = '';
    // console.log('UI',dataList.innerHTML)
    transactions.forEach(addUIData)
    updateValues();
}

UISet()

form.addEventListener('submit', addTransactionData);