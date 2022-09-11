import { Repository } from 'typeorm';
import { BankAccount } from './../../domain/bank-account';
import { BankAccountRepository } from './../../domain/bank-account.repository';
import { BankAccountSchema } from './bank-account.schema';

export class BankAccountTypeOrmRepository implements BankAccountRepository {
  constructor(private ormRepo: Repository<BankAccountSchema>) {}

  async insert(bankAccount: BankAccount): Promise<void> {
    const model = this.ormRepo.create(bankAccount);
    await this.ormRepo.save(model);
  }
}
