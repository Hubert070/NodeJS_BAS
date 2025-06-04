import { Account } from "./account";

let account = new Account("savings");
console.log(`Account type: ${account.type}`);
console.log(`Account balance: ${account.balance}`);

account.deposit(1000);
console.log(`Account balance after deposit: ${account.balance}`);

account.withdraw(50);
console.log(`Account balance after withdrawal: ${account.balance}`);

try {
    account.withdraw(-50);
}
catch (err) {
    console.log(err.message);
}
console.log(`Saldo na poging opname van een negatief bedrag: ${account.balance}`);

try {
    account.withdraw(2000);
}
catch (err) {
    console.log(err.message);
}
console.log(`Saldo na poging opname van een bedrag dat hoger is dan het saldo: ${account.balance}`);
