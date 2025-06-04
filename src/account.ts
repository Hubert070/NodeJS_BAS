export class Account {
    private _type: string;
    private _balance: number;

    constructor(type: string) {
        this._type = "savings";
        this._balance = 0;
}

get type() {
    return this._type;
}

get balance() {
    return this._balance;
}

withdraw(withdraw_amount: number) {
    if (withdraw_amount <= 0){
        throw new Error("FOUT - Neem een bedrag op dat groter is dan 0.");  
    }
    
    if (this._type == "savings" && withdraw_amount > this._balance) {
        throw new Error("FOUT - Neem een bedrag op dat lager is dan het saldo van de spaarrekening")
    }

    this._balance = this._balance - withdraw_amount;
}

deposit(deposit_amount: number) {
    if (deposit_amount <= 0) {
        throw new Error("Fout - Stort een bedrag dat groter is dan 0.");
    }

    this._balance = this._balance + deposit_amount;
}
}