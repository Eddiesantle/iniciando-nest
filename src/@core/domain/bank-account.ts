export class BankAccount {
  #id: string; // # - Restringe o acesso da variavel fora da class

  #balance: number;

  #account_number: string;

  constructor(id: string, balance: number, account_number: string) {
    // regras de negocio
    this.#id = id;
    this.#balance = balance;
    this.#account_number = account_number;
  }

  debit(amount: number): void {
    // regras de negocio
    this.#balance -= amount;
  }

  credit(amount: number): void {
    // regras de negocio
    this.#balance += amount;
  }

  get id(): string {
    return this.#id;
  }

  get balance(): number {
    return this.#balance;
  }

  get account_number(): string {
    return this.#account_number;
  }
}

/* 
// Fazer inner join no banco
class Extrato{
  conta: BankAccount
  movimentacoes: Movimentacao[]

  //Extato -> Conta One to One
  //findByAccountNumber(accountNumber: string): Promise<Extrato> {
    //SQL
  //}

} */
