const Account = require('../src/bankAccount');


describe('Account', () => {
  it('gets the balance', () => {
    const bank = new Account();
    expect(bank.getBalance()).toEqual(0);
  });

  it('adds a deposit to the balance', () => {
    const bank = new Account();
    bank.deposit(4000);
    expect(bank.getBalance()).toBe(4000);
  });

  it('adds a withdrawal from the balance', () => {
    const bank = new Account();
    bank.deposit(4000);
    bank.withdrawal(2000)
    expect(bank.getBalance()).toBe(2000);
  });

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
});