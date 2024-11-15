import { InventoryModel } from 'src/models/inventory.model';
import { IInventoryRepository } from './i-inventory.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class InventoryRepository implements IInventoryRepository {
  constructor(
    @InjectRepository(InventoryModel)
    private _repositoryInventory: Repository<InventoryModel>,
  ) {}

  public async getAllRepository(): Promise<InventoryModel[]> {
    return await this._repositoryInventory.find();
  }

  public async getByIdRepository(id: number): Promise<InventoryModel> {
    return await this._repositoryInventory.findOneBy({ id: id });
  }

  public async getByCategoryRepository(
    category: string,
  ): Promise<InventoryModel[]> {
    return await this._repositoryInventory.findBy({ category: category });
  }

  public async createRepository(
    inventory: InventoryModel,
  ): Promise<InventoryModel> {
    const inventoryCreated = this._repositoryInventory.create(inventory);
    return this._repositoryInventory.save(inventoryCreated);
  }

  public async updateRepository(
    inventory: InventoryModel,
  ): Promise<InventoryModel> {
    const inventoryCreated = this._repositoryInventory.create(inventory);
    return await this._repositoryInventory.save(inventoryCreated);
  }

  public async deleteByIdRepository(id: number): Promise<InventoryModel> {
    const inventoryRetrieved = await this.getByIdRepository(id);
    if (!inventoryRetrieved) {
      throw new NotFoundException('Inventory not found');
    }
    const inventoryDeleted =
      await this._repositoryInventory.remove(inventoryRetrieved);
    return inventoryDeleted;
  }
}
