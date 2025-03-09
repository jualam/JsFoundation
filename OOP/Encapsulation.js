class BankAccount{
    #balance=0;

    deposit(amount){
        this.#balance+=amount;
    }
    setbalance(amount){
        this.#balance=amount;
    }
    getBalance(){
        return `$${this.#balance}`;
    }
}
let account1=new BankAccount();
console.log(account1.getBalance());
account1.setbalance(500)
console.log(account1.getBalance());
account1.deposit(500)
console.log(account1.getBalance())