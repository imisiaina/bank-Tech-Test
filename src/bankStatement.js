const Account = require("./bankAccount");
class Statement {
  constructor() {
    this.head = `date || credit || debit || balance\n`;
    this.bank = bank;
  }

  format() {
    const array = bank.getTransaction();
    let formattedArray = array.map((transaction) => {
      if (transaction["amount"] > 0) {
        return `${transaction["transDate"]} || £${transaction["amount"]} || £${transaction["balanceLeft"]}`;
      } else {
        return `${transaction["transDate"]} || £${transaction["amount"] * -1} || £${
          transaction["balanceLeft"]
        }`;
      }
    });
    return formattedArray.reverse().join("\n");
  }

  getStatement() {
    return `${this.head}${this.format()}`;
  }
}

module.exports = Statement;
