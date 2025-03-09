class BankAccount {
    #balance = 0;  // ✅ Private field (hidden from outside)

    constructor(owner) {
        this.owner = owner;
    }

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log(`Deposited $${amount}`);
        } else {
            console.log("Deposit amount must be positive.");
        }
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
            console.log(`Withdrawn $${amount}`);
        } else {
            console.log("Invalid withdrawal amount.");
        }
    }
    //getBalance is not a getter method,it's written differenly
    getBalance() {
        return `Balance: $${this.#balance}`;
    }
}

// ✅ Creating an account
let myAccount = new BankAccount("John Doe");

myAccount.deposit(1000);  
myAccount.withdraw(500);  
console.log(myAccount.getBalance());  

// ❌ Cannot access private balance directly
//console.log(myAccount.#balance); // ERROR: Private field cannot be accessed
