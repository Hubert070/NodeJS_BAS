export class Account {
    private _type: string;
    private _balance: number;

    constructor(type: string) {
    this._type = "savings";
    this._balance = 0;
}

get balance() {
    return this._balance;
}
get type() {
    return this._type
}
withdraw(balanceMinus: number) {
    if (balanceMinus <= 0){
       throw new Error("FOUT - bedrag is negatief.");  
    }
    if (accountx.type <> "savings"){
        throw new Error("FOUT - het is geen spaarrekening")
    }
    if (this._balance < balanceMinus){
        throw new Error("FOUT - saldo wordt negatief.");
}

deposit(balancePlus: number){
    if (balancePlus > 0){
       this._balance = this.balance + balancePlus}
    else {
       console.log("FOUT - bel Sander.");
    }

}
}
