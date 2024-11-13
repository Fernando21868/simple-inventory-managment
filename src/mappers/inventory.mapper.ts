import { InventoryRequestDTO } from 'src/dtos/inventory-request.dto';
import { InventoryResponseDTO } from 'src/dtos/inventory-response.dto';
import { InventoryModel } from 'src/models/inventory.model';
import { IInventoryMapper } from './i-inventory.mapper';
import { Injectable } from '@nestjs/common';

@Injectable()
export class InventoryMapper implements IInventoryMapper {
  public createInventoryRequestDTOToInventory(
    inventoryRequestDTO: InventoryRequestDTO,
  ): InventoryModel {
    return new InventoryModel({
      name: inventoryRequestDTO.name,
      quantity: inventoryRequestDTO.quantity,
      price: inventoryRequestDTO.price,
      category: inventoryRequestDTO.category,
    });
  }

  public updateInventoryRequestDTOToInventory(
    inventoryRequestDTO: InventoryRequestDTO,
    inventory: InventoryModel,
  ): InventoryModel {
    return new InventoryModel({
      id: inventory.id,
      name: inventoryRequestDTO.name || inventory.name,
      quantity: inventoryRequestDTO.quantity || inventory.quantity,
      price: inventoryRequestDTO.price || inventory.price,
      category: inventoryRequestDTO.category || inventory.category,
    });
  }

  public inventoryToIventoryResponseDTO(
    iventory: InventoryModel,
  ): InventoryResponseDTO {
    return new InventoryResponseDTO({
      id: iventory.id,
      name: iventory.name,
      quantity: iventory.quantity,
      price: iventory.price,
      category: iventory.category,
    });
  }

  public inventoryListToInventoryResponseDTOList(
    iventoryList: InventoryModel[],
  ): InventoryResponseDTO[] {
    return iventoryList.map((inventory) =>
      this.inventoryToIventoryResponseDTO(inventory),
    );
  }
}
