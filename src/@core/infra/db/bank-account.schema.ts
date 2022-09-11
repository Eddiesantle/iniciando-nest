import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

// modelo anemico | entidade anemica - Martin Fowler
@Entity()
export class BankAccountSchema {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'decimal', scale: 2 })
  balance: number;

  @Column({ length: '255' })
  account_number: string;
}
