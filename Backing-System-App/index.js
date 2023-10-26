"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BankAccount_1 = require("./BankAccount");
var rutwikAccount = new BankAccount_1.BankAccount("12345", "Rutwik", 500);
rutwikAccount.depositAmount(500);
console.log(rutwikAccount.getBalance());
console.log(rutwikAccount.withdrawAmount(300));
