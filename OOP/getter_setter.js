class BankAccount {
    #balance;

    constructor(owner, initialBalance = 0) {
        this.owner = owner;
        this.#balance = initialBalance < 0 ? 0 : initialBalance;  // ✅ Prevent negative balance
    }

    // ✅ Getter to retrieve balance
    get balance() {
        return `$${this.#balance}`;
    }

    // ✅ Setter to modify balance with validation
    set balance(amount) {
        if (amount < 0) {
            console.log("Balance cannot be negative!");
        } else {
            this.#balance = amount;
        }
    }

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
        }
    }
}

// ✅ Creating an account with an initial balance
let account = new BankAccount("John Doe", 300);
console.log(account.balance);  // ✅ "$300"

// ✅ Using setter to update balance
account.balance = 600;
console.log(account.balance);  // ✅ "$600"

// ❌ Attempting to set a negative balance (Blocked)
account.balance = -200;  // ❌ "Balance cannot be negative!"
console.log(account.balance);  // ✅ Still "$600"

// ✅ Depositing more money
account.deposit(100);
console.log(account.balance);  // ✅ "$700"
