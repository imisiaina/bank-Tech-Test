const Account = require("./bankAccount");
class Statement {
  constructor() {
    this.head = `date || credit || debit || balance\n`;
    this.bank = bank;
  }

  format() {
    const arr = bank.getTransaction();
    let formattedArr = arr.map((t) => {
      if (t["amount"] > 0) {
        return `${t["transDate"]} || £${t["amount"]} || £${t["balanceLeft"]}`;
      } else {
        return `${t["transDate"]} || £${t["amount"] * -1} || £${
          t["balanceLeft"]
        }`;
      }
    });
    return formattedArr.reverse().join("\n");
  }

  getStatement() {
    return `${this.head}${this.format()}`;
  }
}

module.exports = Statement;
