class Account {
  constructor() {
    this.balance = 0;
    this.transaction = [];
  }

  getBalance() {
    return this.balance;
  }

  deposit(depositAmount) {
    this.balance += depositAmount;
    this.transaction.push({
      transDate: this.date(),
      amount: depositAmount,
      balanceLeft: this.getBalance(),
    });
  }

  withdraw(withdrawalAmount) {
    this.balance -= withdrawalAmount;
    this.transaction.push({
      transDate: this.date(),
      amount: -withdrawalAmount,
      balanceLeft: this.getBalance(),
    });
  }

  date() {
    const d = new Date();
    let day = d.getDate();
    const month = [
      "01",
      "02",
      "03",
      "04",
      "05",
      "06",
      "07",
      "08",
      "09",
      "10",
      "11",
      "12",
    ];
    let name = month[d.getMonth()];
    let year = d.getFullYear();
    return `${day}/${name}/${year}`;
  }

  getTransaction() {
    return this.transaction;
  }
};

module.exports = Account;
