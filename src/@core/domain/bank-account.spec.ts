import { BankAccount } from './bank-account';

describe('BankAccount Unit Tests', () => {
  it('should create a bank account', () => {
    const bankAccount = new BankAccount('123', 100, '12345');
    expect(bankAccount.id).toBe('123');
    expect(bankAccount.balance).toBe(100);
    expect(bankAccount.account_number).toBe('12345');
  });

  it('should debit an account', () => {
    // se tenho 100e gasto 50 fico com 50
    const bankAccount = new BankAccount('123', 100, '12345');
    bankAccount.debit(50);
    expect(bankAccount.balance).toBe(50);
  });

  it('should credit an account', () => {
    // Se tenho 100, e deposito 50 fico com 150
    const bankAccount = new BankAccount('123', 100, '12345');
    bankAccount.credit(50);
    expect(bankAccount.balance).toBe(150);
  });
});
