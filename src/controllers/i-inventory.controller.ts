import { InventoryRequestDTO } from 'src/dtos/inventory-request.dto';
import { InventoryResponseDTO } from 'src/dtos/inventory-response.dto';

/**
 * Abstract class defining the contract for Inventory Controller.
 * This class serves as an interface to standardize the methods for managing inventory operations.
 */
export abstract class IInventoryController {
  /**
   * Retrieves all inventory items.
   * @returns A promise that resolves to an array of InventoryResponseDTO objects.
   */
  abstract getAllController(): Promise<InventoryResponseDTO[]>;

  /**
   * Retrieves a specific inventory item by its ID.
   * @param id - The unique identifier of the inventory item.
   * @returns A promise that resolves to the InventoryResponseDTO object for the specified ID.
   */
  abstract getByIdController(id: number): Promise<InventoryResponseDTO>;

  /**
   * Creates a new inventory item.
   * @param inventoryRequestDTO - The data transfer object containing the details of the inventory item to create.
   * @returns A promise that resolves to the newly created InventoryResponseDTO object.
   */
  abstract createController(
    inventoryRequestDTO: InventoryRequestDTO,
  ): Promise<InventoryResponseDTO>;

  /**
   * Updates an existing inventory item.
   * @param id - The unique identifier of the inventory item to update.
   * @param inventoryRequestDTO - The data transfer object containing the updated details of the inventory item.
   * @returns A promise that resolves to the updated InventoryResponseDTO object.
   */
  abstract updateController(
    id: number,
    inventoryRequestDTO: InventoryRequestDTO,
  ): Promise<InventoryResponseDTO>;

  /**
   * Deletes a specific inventory item by its ID.
   * @param id - The unique identifier of the inventory item to delete.
   * @returns A promise that resolves to the InventoryResponseDTO object of the deleted item.
   */
  abstract deleteByIdController(id: number): Promise<InventoryResponseDTO>;
}
