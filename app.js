var num1=0;
var num2=0;
var add = () =>{
  var foot = document.getElementById("footer");
  var amount = document.getElementById("amount");
  var name = document.getElementById("name");
  var expense = document.getElementById("expense");
  var income = document.getElementById("income");
  var balance = document.getElementById("balance")
  parseInt(amount.value,10)
  foot.insertAdjacentHTML(
    "afterbegin",
    ` <div class="calc"><span class="span1">${name.value}</span><span class="span2">$ ${amount.value}</span></div>`
  );
  var amountN = parseInt(amount.value, 10);
  if (amount.value > 0) {
    var income1 = parseInt(income.innerHTML, 10);
    income.innerHTML = income1 + amountN;
    num1 = income.innerHTML
  }
  else if(amount.value < 0){

    var income1 = parseInt(expense.innerHTML, 10);
    expense.innerHTML = income1 + amountN;
    num2 = expense.innerHTML
  }
balance.innerHTML = +num1 + (+num2)
}

