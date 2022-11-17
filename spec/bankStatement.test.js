const Account = require("../src/bankAccount");
const Statement = require("../src/bankStatement");

describe('Statement', () => {
  it('gets the date', () => {
    const statement = new Statement();
    expect(statement.date()).toEqual('17/11/2022');
  });
});

