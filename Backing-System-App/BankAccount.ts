export class BankAccount {
  private accountNumber: string;
  private accountHolder: string;
  private balance: number;
  private transactions: Transaction[];



    constructor (accountNumber: string,accountHolder: string, initialBalance: number) {
    this.accountNumber = accountNumber;
    this.accountHolder = accountHolder;
    this.balance = initialBalance;
    this.transactions = [];
  }

  depositAmount(amount: number): string {
    this.balance += amount;
    this.transactionLog("Deposit", amount);
    return `₹  ${amount} deposited your account Successfully...! Your Current Balance is ${this.balance}`;
  }

  withdrawAmount(amount: number): string {
    if (this.balance > 0 || this.balance <= amount) {
      this.balance -= amount;
      this.transactionLog("Withdraw", amount);
      return `₹ ${amount} withdraw from your account Successfully...! Your Current Balance is ${this.balance}`;
    }

    return `Opps UnSufficient Balance You Can't Withdraw....! Your Account Balance is ${this.balance}}` ;
  }

  getBalance(): String {
    return `Your Current Balance is ${this.balance}`;
  }

  getTranscationDeatils() {
    this.transactions.forEach((tran) => {
      for (let key in tran) {
        console.log(`${key} = ${tran[key]}`);
      }
    });
  }

  private transactionLog(transactionsType: string, transactionsAmount: number) {
    const transactions: Transaction = {
      type: transactionsType,
      amount: transactionsAmount,
      timestamp: new Date(),
    };

    this.transactions.push(transactions);
  }
}
