function createAccount(accountPin, amount = 0) {
    let pin = accountPin;
    let balance = amount;
    const checkBalance = (input) => {
        if (pin === input) return `$${balance+0}`;
        else return "Invalid PIN.";
    }
    const deposit = (inputPin, depositAmt) => {
        if (pin === inputPin) {
            balance += depositAmt;
            return `Successfully deposited $${depositAmt}. Current balance: $${balance}.`;
        } else return "Invalid PIN.";
    }
    const withdraw = (inputPin, withdrawAmt) => {
        if (pin === inputPin && withdrawAmt < balance) {
            balance -= withdrawAmt;
            return `Successfully withdrew $${withdrawAmt}. Current balance: $${balance}.`;
        } else if (pin === inputPin) return "Withdrawal amount exceeds account balance. Transaction cancelled."
        else return "Invalid PIN.";
    }
    const changePin = (oldPin, newPin) => {
        if (pin === oldPin) {
            pin = newPin;
            return "PIN successfully changed!";
        } else return "Invalid PIN.";
    }
    return {
            "checkBalance": checkBalance,
            "deposit": deposit,
            "withdraw": withdraw,
            "changePin": changePin
        }
}

module.exports = { createAccount };
