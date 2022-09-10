import { Injectable } from '@nestjs/common';
import { CreateBankAccountDto } from './dto/create-bank-account.dto';
import { Repository } from 'typeorm';
import { BankAccount } from './entities/bank-account.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class BankAccountsService {
  constructor(
    @InjectRepository(BankAccount)
    private repo: Repository<BankAccount>,
  ) {}

  async create(createBankAccountDto: CreateBankAccountDto) {
    const bankAccount = this.repo.create({
      account_number: createBankAccountDto.account_number,
      balance: 0
    })

    await this.repo.insert(bankAccount)

    return bankAccount
  }

  findAll() {
    return this.repo.find();
  }

  findOne(id: string) {
    return this.repo.findOneBy({id})
  }

  async transfer(from: string, to: string, amount: number) {
    const fromAccont = await this.repo.findOneBy({account_number:from})
    const toAccont = await this.repo.findOneBy({account_number:to})

    fromAccont.balance -= amount
    toAccont.balance += amount

    this.repo.save(fromAccont)
    this.repo.save(toAccont)
  }

}
