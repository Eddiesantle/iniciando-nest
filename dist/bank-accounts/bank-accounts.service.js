"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankAccountsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const bank_account_entity_1 = require("./entities/bank-account.entity");
const typeorm_2 = require("@nestjs/typeorm");
let BankAccountsService = class BankAccountsService {
    constructor(repo) {
        this.repo = repo;
    }
    async create(createBankAccountDto) {
        const bankAccount = this.repo.create({
            account_number: createBankAccountDto.account_number,
            balance: 0
        });
        await this.repo.insert(bankAccount);
        return bankAccount;
    }
    findAll() {
        return this.repo.find();
    }
    findOne(id) {
        return this.repo.findOneBy({ id });
    }
    async transfer(from, to, amount) {
        const fromAccont = await this.repo.findOneBy({ account_number: from });
        const toAccont = await this.repo.findOneBy({ account_number: to });
        fromAccont.balance -= amount;
        toAccont.balance += amount;
        this.repo.save(fromAccont);
        this.repo.save(toAccont);
    }
};
BankAccountsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(bank_account_entity_1.BankAccount)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], BankAccountsService);
exports.BankAccountsService = BankAccountsService;
//# sourceMappingURL=bank-accounts.service.js.map