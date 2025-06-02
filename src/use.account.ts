import { Account } from "./account";

let accountx = new Account("savings");
if (accountx.type == "savings") {
    console.log("Dit is een spaarrekening")
    try {accountx.withdraw(0);}
    catch (err) {
       console.log("FOUT - op te nemen bedrag mag niet negatief zijn")
}}

else {
try {accountx.deposit(15000)}
catch (err) {
    console.log("FOUT - bel Ismail." + err.message);
}}


console.log(`Account type: ${accountx.type}`);
console.log(`Account balance deposit: ${accountx.balance}`);

accountx.withdraw(50);
console.log(`Account balance withdraw: ${accountx.balance}`);
