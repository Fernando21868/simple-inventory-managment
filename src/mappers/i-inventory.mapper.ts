import { InventoryRequestDTO } from 'src/dtos/inventory-request.dto';
import { InventoryResponseDTO } from 'src/dtos/inventory-response.dto';
import { InventoryModel } from 'src/models/inventory.model';

/**
 * Abstract class defining the contract for Inventory Mapper.
 * This class is responsible for mapping between different layers (DTOs and Models) of the inventory system.
 */
export abstract class IInventoryMapper {
  /**
   * Maps a Create Inventory Request DTO to an Inventory Model.
   * Used for converting input data from the controller layer into a format that the service layer can process.
   * @param inventoryRequestDTO - The data transfer object containing the details of the inventory to create.
   * @returns An InventoryModel instance created from the DTO.
   */
  abstract createInventoryRequestDTOToInventory(
    inventoryRequestDTO: InventoryRequestDTO,
  ): InventoryModel;

  /**
   * Maps an Update Inventory Request DTO to an existing Inventory Model.
   * Updates the fields of an existing InventoryModel with data from the DTO.
   * @param inventoryRequestDTO - The data transfer object containing the updated inventory details.
   * @param inventory - The existing InventoryModel instance to update.
   * @returns The updated InventoryModel instance.
   */
  abstract updateInventoryRequestDTOToInventory(
    inventoryRequestDTO: InventoryRequestDTO,
    inventory: InventoryModel,
  ): InventoryModel;

  /**
   * Maps an Inventory Model to a Response DTO.
   * Converts internal domain model data into a format suitable for returning to the client.
   * @param inventory - The InventoryModel instance to convert.
   * @returns The corresponding InventoryResponseDTO object.
   */
  abstract inventoryToIventoryResponseDTO(
    inventory: InventoryModel,
  ): InventoryResponseDTO;

  /**
   * Maps a list of Inventory Models to a list of Response DTOs.
   * Useful for transforming a collection of domain models into client-friendly representations.
   * @param inventoryList - An array of InventoryModel instances to convert.
   * @returns An array of InventoryResponseDTO objects.
   */
  abstract inventoryListToInventoryResponseDTOList(
    inventoryList: InventoryModel[],
  ): InventoryResponseDTO[];
}
