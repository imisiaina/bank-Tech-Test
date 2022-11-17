const Account = require('./bankAccount')

const bank = new Account();

class Statement {
  constructor() {

  };

  date() {
    const d = new Date();
    let day = d.getDate();
    const month = ["01","02","03","04","05","06","07","08","09","10","11","12"];
    let name = month[d.getMonth()];
    let year = d.getFullYear();
    return `${day}/${name}/${year}`
  };

  // getStatement() {
  //   return(`date || credit || debit || balance
  //         ${this.date()} || ${} || ${.getBalance()}`);
  // };

};

module.exports = Statement