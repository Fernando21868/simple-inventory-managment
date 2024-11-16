import { InventoryModel } from 'src/models/inventory.model';

/**
 * Abstract class defining the contract for Inventory Repository.
 * This class serves as the data access layer for interacting with the inventory data source (e.g., database).
 */
export abstract class IInventoryRepository {
  /**
   * Retrieves all inventory records from the data source.
   * @returns A promise that resolves to an array of InventoryModel objects.
   */
  abstract getAllRepository(): Promise<InventoryModel[]>;

  /**
   * Retrieves a specific inventory record by its ID from the data source.
   * @param id - The unique identifier of the inventory item.
   * @returns A promise that resolves to the InventoryModel object for the specified ID.
   */
  abstract getByIdRepository(id: number): Promise<InventoryModel>;

  /**
   * Creates a new inventory record in the data source.
   * @param inventoryRequestDTO - The InventoryModel object containing the details of the new inventory item.
   * @returns A promise that resolves to the created InventoryModel object.
   */
  abstract createRepository(
    inventoryRequestDTO: InventoryModel,
  ): Promise<InventoryModel>;

  /**
   * Updates an existing inventory record in the data source.
   * @param inventoryRequestDTO - The InventoryModel object containing updated details of the inventory item.
   * @returns A promise that resolves to the updated InventoryModel object.
   */
  abstract updateRepository(
    inventoryRequestDTO: InventoryModel,
  ): Promise<InventoryModel>;

  /**
   * Deletes a specific inventory record by its ID from the data source.
   * @param id - The unique identifier of the inventory item to delete.
   * @returns A promise that resolves to the InventoryModel object of the deleted item.
   */
  abstract deleteByIdRepository(id: number): Promise<InventoryModel>;

  /**
   * Retrieves all inventory records that belong to a specific category.
   * @param category - The category to filter inventory items by.
   * @returns A promise that resolves to an array of InventoryModel objects in the specified category.
   */
  abstract getByCategoryRepository(category: string): Promise<InventoryModel[]>;
}
