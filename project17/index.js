const form = document.querySelector('#form');
const bill = document.querySelector('#bill');
const tips = document.querySelectorAll('.tip');
const people = document.querySelector('#people');
const reset = document.querySelector('#reset');
const billErrorMsg = document.querySelector('#bill-error-msg');
const peopleErrorMsg = document.querySelector('#people-error-msg');
let total = document.querySelector('#total');

let billValue = 0;
let noOfPeople = 0;
let tip = 0;

tips.forEach(button => {
    //console.log(btn);
    button.addEventListener('click', (e) => {
        //console.log(e.target);
        tips.forEach(btn => btn.classList.remove('active'));
        //console.log(button);
        button.classList.add('active');
        let tipValue = e.target.dataset.id / 100;
        tip = tipValue;
    })
})
//calculate 
const calculate = (e) => {
    e.preventDefault();
    if (!bill.value || !people.value) {
        bill.classList.add('error');
        people.classList.add('error')
        billErrorMsg.style.display = "block";
        peopleErrorMsg.style.display = 'block';
    } else {
        bill.classList.remove('error');
        billErrorMsg.style.display = "none";
        people.classList.remove('error')
        peopleErrorMsg.style.display = 'none';


        billValue = bill.value;
        noOfPeople = people.value;
        //console.log(billValue, noOfPeople, tip);
        result = (billValue * tip) / noOfPeople;
        result = result.toFixed(2);
        total.innerText = '$' + result;
    }
}
reset.addEventListener('click', (e) => {
    bill.value = "";
    people.value = "";
    tips.forEach(button => {
        button.classList.remove('active');
    })
})
form.addEventListener('submit', calculate);