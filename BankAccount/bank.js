'use strict';
window.onload = function () {
  document.getElementById('create').onclick = createAccount;
}

function NewAccount(name, dep) {
  var accname = name;
  var deposit = dep;

  var account = {

    'getAccName': function () {
      return accname;
    },
    'getDeposit': function () {
      return deposit;
    },
    'setAccName': function (name) {
      accname = name;
    },
    'setDeposit': function (dep) {
      deposit = dep;
    }
  };
  return account;
}

var myList = new Array();

function createAccount() {
  var accName = document.getElementById('accountname').value;
  var dep = document.getElementById('deposit').value;

  var acc = NewAccount(accName, dep);

  myList.push(acc);

  var output = "";
  for (var i = 0; i < myList.length; i++) {
    output += "Account Name : " + myList[i].getAccName() + ", Deposit : " + myList[i].getDeposit() + "\n";
  }

  document.getElementById('output').value = output;


}
