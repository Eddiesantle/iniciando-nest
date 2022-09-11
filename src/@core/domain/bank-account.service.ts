import { BankAccount } from './bank-account';
import { BankAccountRepository } from './bank-account.repository';

export class BankAccountService {
  // application Service

  constructor(private bankAccountRepo: BankAccountRepository) {}

  async create(account_number: string) {
    const bankAccount = new BankAccount('123', 0, account_number);
    await this.bankAccountRepo.insert(bankAccount);
    return bankAccount;
  }
}
