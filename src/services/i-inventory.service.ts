import { InventoryRequestDTO } from 'src/dtos/inventory-request.dto';
import { InventoryResponseDTO } from 'src/dtos/inventory-response.dto';

/**
 * Abstract class defining the contract for Inventory Service.
 * This class acts as the business logic layer, orchestrating operations between the controller and repository layers.
 */
export abstract class IInventoryService {
  /**
   * Retrieves all inventory items and maps them to response DTOs.
   * Implements business logic for fetching and transforming data.
   * @returns A promise that resolves to an array of InventoryResponseDTO objects.
   */
  abstract getAllService(): Promise<InventoryResponseDTO[]>;

  /**
   * Retrieves a specific inventory item by its ID and maps it to a response DTO.
   * @param id - The unique identifier of the inventory item.
   * @returns A promise that resolves to the InventoryResponseDTO object for the specified ID.
   */
  abstract getByIdService(id: number): Promise<InventoryResponseDTO>;

  /**
   * Handles the creation of a new inventory item, including mapping and validation logic.
   * @param inventoryRequestDTO - The data transfer object containing the details of the inventory item to create.
   * @returns A promise that resolves to the newly created InventoryResponseDTO object.
   */
  abstract createService(
    inventoryRequestDTO: InventoryRequestDTO,
  ): Promise<InventoryResponseDTO>;

  /**
   * Handles the update of an existing inventory item, including mapping and validation logic.
   * @param id - The unique identifier of the inventory item to update.
   * @param inventoryRequestDTO - The data transfer object containing the updated details of the inventory item.
   * @returns A promise that resolves to the updated InventoryResponseDTO object.
   */
  abstract updateService(
    id: number,
    inventoryRequestDTO: InventoryRequestDTO,
  ): Promise<InventoryResponseDTO>;

  /**
   * Deletes a specific inventory item by its ID and returns its response DTO.
   * Handles any associated business rules for deletion.
   * @param id - The unique identifier of the inventory item to delete.
   * @returns A promise that resolves to the InventoryResponseDTO object of the deleted item.
   */
  abstract deleteByIdService(id: number): Promise<InventoryResponseDTO>;

  /**
   * Calculates the total value of inventory items in a specific category.
   * This method can involve complex business logic such as applying discounts, taxes, or aggregating data.
   * @param category - The category of inventory items to calculate the value for.
   * @returns A promise that resolves to the total calculated value as a number.
   */
  abstract calculateInventoryValue(category: string): Promise<number>;
}
