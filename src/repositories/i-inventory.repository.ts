import { InventoryModel } from 'src/models/inventory.model';

export abstract class IInventoryRepository {
  abstract getAllRepository(): Promise<InventoryModel[]>;

  abstract getByIdRepository(id: number): Promise<InventoryModel>;

  abstract createRepository(inventoryRequestDTO: InventoryModel): Promise<InventoryModel>;

  abstract updateRepository(
    inventoryRequestDTO: InventoryModel,
  ): Promise<InventoryModel>;

  abstract deleteByIdRepository(id: number): Promise<InventoryModel>;
}
