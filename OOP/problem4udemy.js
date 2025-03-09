class BankAccount {
    constructor(balance = 0) {
      if (balance < 0) {
        throw new Error("Initial balance cannot be negative.");
      }
      this._balance = balance;
    }
  
    get balance() {
      return this._balance; 
    }
  
    set balance(amount) {
      if (amount < 0) {
        throw new Error("Balance cannot be negative"); // Throw an exception
      }
      this._balance = amount;
    }
  
    deposit(amount) {
      if (amount <= 0) {
        throw new Error("Deposit amount must be positive.");
      }
      this._balance += amount;
      console.log(`Deposited: $${amount}`);
    }
  
    withdraw(amount) {
      if (amount <= 0) {
        throw new Error("Withdraw amount must be positive.");
      }
      if (amount > this._balance) {
        throw new Error("Insufficient funds");
      }
      this._balance -= amount;
      console.log(`Withdrew: $${amount}`);
    }
  }
  
  // Task 2
  class Shape {
      area() {
          return 0;  // Default behavior
      }
  }
  
  // ✅ Subclass: Circle (Overrides area method)
  class Circle extends Shape {
      constructor(radius) {
          super();  // ✅ Calls the parent class constructor
          this.radius = radius;
      }
  
      area() {
          return Math.PI * this.radius * this.radius;  // ✅ πr² formula
      }
  }
  
  // ✅ Subclass: Rectangle (Overrides area method)
  class Rectangle extends Shape {
      constructor(width, length) {
          super();
          this.width = width;
          this.length = length;
      }
  
      area() {
          return this.width * this.length;  // ✅ w × l formula
      }
  }