import { InventoryRequestDTO } from 'src/dtos/inventory-request.dto';
import { InventoryResponseDTO } from 'src/dtos/inventory-response.dto';
import { InventoryModel } from 'src/models/inventory.model';

export abstract class IInventoryMapper {
  abstract createInventoryRequestDTOToInventory(
    inventoryRequestDTO: InventoryRequestDTO,
  ): InventoryModel;

  abstract updateInventoryRequestDTOToInventory(
    inventoryRequestDTO: InventoryRequestDTO,
    inventory: InventoryModel,
  ): InventoryModel;

  abstract inventoryToIventoryResponseDTO(
    iventory: InventoryModel,
  ): InventoryResponseDTO;

  abstract inventoryListToInventoryResponseDTOList(
    iventoryList: InventoryModel[],
  ): InventoryResponseDTO[];
}
