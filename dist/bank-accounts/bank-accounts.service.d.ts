import { CreateBankAccountDto } from './dto/create-bank-account.dto';
import { Repository } from 'typeorm';
import { BankAccount } from './entities/bank-account.entity';
export declare class BankAccountsService {
    private repo;
    constructor(repo: Repository<BankAccount>);
    create(createBankAccountDto: CreateBankAccountDto): Promise<BankAccount>;
    findAll(): Promise<BankAccount[]>;
    findOne(id: string): Promise<BankAccount>;
    transfer(from: string, to: string, amount: number): Promise<void>;
}
