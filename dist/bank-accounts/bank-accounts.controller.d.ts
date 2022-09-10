import { BankAccountsService } from './bank-accounts.service';
import { CreateBankAccountDto } from './dto/create-bank-account.dto';
import { TransferBankAccountDto } from './dto/transfer-bank-account.dto';
export declare class BankAccountsController {
    private readonly bankAccountsService;
    constructor(bankAccountsService: BankAccountsService);
    create(createBankAccountDto: CreateBankAccountDto): Promise<import("./entities/bank-account.entity").BankAccount>;
    findAll(): Promise<import("./entities/bank-account.entity").BankAccount[]>;
    findOne(id: string): Promise<import("./entities/bank-account.entity").BankAccount>;
    transfer(transferDto: TransferBankAccountDto): Promise<void>;
}
