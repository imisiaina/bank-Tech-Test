class Account {
  constructor() {
    this.balance = 0;

  }

  getBalance() {
    return this.balance;
  };

  deposit(depositAmount) {
    return this.balance += depositAmount;
  };

  withdrawal(withdrawalAmount) {
    return this.balance -= withdrawalAmount;
  };


  
};

module.exports = Account;
