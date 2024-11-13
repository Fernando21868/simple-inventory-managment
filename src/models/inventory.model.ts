import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { CategoryEnum } from './category.enum';

@Entity('inventory')
export class InventoryModel {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column({ name: 'name' })
  name: string;

  @Column({ name: 'quantity' })
  quantity: number;

  @Column({ name: 'price' })
  price: number;

  @Column({ name: 'category' })
  category: string;

  constructor(init: Partial<InventoryModel>) {
    Object.assign(this, init);
  }
}
