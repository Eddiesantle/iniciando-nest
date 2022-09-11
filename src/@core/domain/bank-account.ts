export class BankAccount {
  id: string;

  balance: number;

  account_number: string;

  constructor(id: string, balance: number, account_number: string) {
    // regras de negocio
    this.id = id;
    this.balance = balance;
    this.account_number = account_number;
  }

  debit(amount: number): void {
    // regras de negocio
    this.balance -= amount;
  }

  credit(amount: number): void {
    // regras de negocio
    this.balance += amount;
  }
}
