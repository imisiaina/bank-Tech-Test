const Account = require("../src/bankAccount");

describe("Account", () => {
  beforeEach(() => {
    bank = new Account();
  });

  it("gets the balance", () => {
    expect(bank.getBalance()).toEqual(0);
  });

  it("adds a deposit to the balance", () => {
    bank.deposit(4000);
    expect(bank.getBalance()).toBe(4000);
  });

  it("adds a withdrawal from the balance", () => {
    bank.deposit(4000);
    bank.withdraw(2000);
    expect(bank.getBalance()).toBe(2000);
  });

  it("gets the date", () => {
    expect(bank.date()).toEqual("18/11/2022");
  });
});
