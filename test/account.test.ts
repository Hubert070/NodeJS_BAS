import { expect, describe, test, it } from 'vitest';
import { Account } from '../src/account';


describe('Aanmaken nieuwe rekening met transacties', () => {

    test('Deposit', () => {

        let account = new Account('checking');
    
        account.deposit(17);
    
        expect(account.balance).toEqual(17);
    })

    test('Op nieuwe rekening storten en opnemen', () => {

        let account = new Account('savings');

        account.deposit(25);
        account.withdraw(7);

        expect(account.balance).toEqual(18);
    })

    test('Opnemen van nieuwe rekening met negatief bedrag', () => {

        let account = new Account('savings');

        expect(() => {
            account.deposit(-10);
        }).toThrowError('Fout - Stort een bedrag dat groter is dan 0.');
    })
})