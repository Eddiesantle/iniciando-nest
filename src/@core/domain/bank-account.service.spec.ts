import { DataSource, Repository } from 'typeorm';
import { BankAccountTypeOrmRepository } from './../infra/db/bank-account-typeorm.repository';
import { BankAccountSchema } from './../infra/db/bank-account.schema';
import { BankAccountService } from './bank-account.service';

describe('BanckAccountService Test', () => {
  let dataSource: DataSource;
  let ormRepo: Repository<BankAccountSchema>;
  let repository: BankAccountTypeOrmRepository;
  let bankAccountServices: BankAccountService

  beforeEach(async () => {
    dataSource = new DataSource({
      type: 'sqlite',
      database: ':memory:',
      synchronize: true,
      logging: true,
      entities: [BankAccountSchema],
    });

    await dataSource.initialize();
    ormRepo = dataSource.getRepository(BankAccountSchema);
    repository = new BankAccountTypeOrmRepository(ormRepo);
    bankAccountServices = new BankAccountService(repository)
  });

  it('should create a new account', async () => {
    await bankAccountServices.create('5555-55');
    const model = await ormRepo.findOneBy({ account_number: '5555-55' });
    expect(model.id).toBe('123');
    expect(model.balance).toBe(0);
    expect(model.account_number).toBe('5555-55');
  });
});
