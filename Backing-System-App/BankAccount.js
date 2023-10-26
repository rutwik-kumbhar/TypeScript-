"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankAccount = void 0;
var BankAccount = /** @class */ (function () {
    function BankAccount(accountNumber, accountHolder, initialBalance) {
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.balance = initialBalance;
        this.transactions = [];
    }
    BankAccount.prototype.depositAmount = function (amount) {
        this.balance += amount;
        this.transactionLog("Deposit", amount);
        return "\u20B9  ".concat(amount, " deposited your account Successfully...! Your Current Balance is ").concat(this.balance);
    };
    BankAccount.prototype.withdrawAmount = function (amount) {
        if (this.balance > 0 && this.balance <= amount) {
            this.balance -= amount;
            this.transactionLog("Withdraw", amount);
            return "\u20B9 ".concat(amount, " withdraw from your account Successfully...! Your Current Balance is ").concat(this.balance);
        }
        return "Opps UnSufficient Balance You Can't Withdraw....! Your Account Balance is ".concat(this.balance, "}");
    };
    BankAccount.prototype.getBalance = function () {
        return "Your Current Balance is ".concat(this.balance);
    };
    BankAccount.prototype.getTranscationDeatils = function () {
        this.transactions.forEach(function (tran) {
            for (var key in tran) {
                console.log("".concat(key, " = ").concat(tran[key]));
            }
        });
    };
    BankAccount.prototype.transactionLog = function (transactionsType, transactionsAmount) {
        var transactions = {
            type: transactionsType,
            amount: transactionsAmount,
            timestamp: new Date(),
        };
        this.transactions.push(transactions);
    };
    return BankAccount;
}());
exports.BankAccount = BankAccount;
