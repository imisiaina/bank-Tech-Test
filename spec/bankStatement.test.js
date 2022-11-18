const Account = require("../src/bankAccount");
const Statement = require("../src/bankStatement");

describe("Statement", () => {
  beforeEach(() => {
    bank = new Account();
    statement = new Statement();

    jest
    .useFakeTimers()
    .setSystemTime(new Date('2025-03-10'));

  });

  it("gets the statement", () => {
    bank.deposit(5000);
    expect(statement.getStatement()).toEqual(
      "date || credit || debit || balance\n10/03/2025 || £5000 || £5000"
    );
  });

  it("gets the statement for multiple transactions", () => {
    bank.deposit(5000);
    bank.deposit(5000);
    bank.withdraw(2000);
    console.log(statement.getStatement())
    expect(statement.getStatement()).toContain("10/03/2025 || £5000 || £5000");
  });
});
