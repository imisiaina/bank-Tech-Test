## Specification

**Given** a client makes a deposit of 1000 on 10-01-2023  
**And** a deposit of 2000 on 13-01-2023  
**And** a withdrawal of 500 on 14-01-2023  
**When** she prints her bank statement  
**Then** she would see

```
date || credit || debit || balance
14/01/2023 || || 500.00 || 2500.00
13/01/2023 || 2000.00 || || 3000.00
10/01/2023 || 1000.00 || || 1000.00
```

### Requirements

* You should be able to interact with the code via a REPL like IRB or Node.
* Deposits, withdrawal.
* Account statement (date, amount, balance) printing.

### Setup and installation

1. Clone this repo:
```
git clone https://github.com/imisiaina/bank-Tech-Test
```

2. Setup the environment to use node’s latest version:
```
nvm use node
```
3. Install jest to run globally 
```
npm install -g jest
```
4. To run the tests use the Jest command in the terminal:
```
jest
```



