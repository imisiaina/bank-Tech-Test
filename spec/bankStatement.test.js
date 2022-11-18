const Account = require("../src/bankAccount");
const Statement = require("../src/bankStatement");

describe("Statement", () => {
  beforeEach(() => {
    bank = new Account();
    statement = new Statement();
  });

  it("gets the statement", () => {
    bank.deposit(5000);
    expect(statement.getStatement()).toEqual(
      "date || credit || debit || balance\n18/11/2022 || £5000 || £5000"
    );
  });

  it("gets the statement for multiple transactions", () => {
    bank.deposit(5000);
    bank.deposit(5000);
    bank.withdraw(2000);
    expect(statement.getStatement()).toContain("18/11/2022 || £5000 || £5000");
  });
});
