import { BankAccount } from "./BankAccount";



 const  rutwikAccount = new BankAccount("12345","Rutwik",500);


 rutwikAccount.depositAmount(500)

 

console.log( rutwikAccount.getBalance())


console.log(rutwikAccount.withdrawAmount(300))


