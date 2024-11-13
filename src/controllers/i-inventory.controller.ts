import { InventoryRequestDTO } from 'src/dtos/inventory-request.dto';
import { InventoryResponseDTO } from 'src/dtos/inventory-response.dto';

export abstract class IInventoryController {
  abstract getAllController(): Promise<InventoryResponseDTO[]>;

  abstract getByIdController(id: number): Promise<InventoryResponseDTO>;

  abstract createController(
    inventoryRequestDTO: InventoryRequestDTO,
  ): Promise<InventoryResponseDTO>;

  abstract updateController(
    id: number,
    inventoryRequestDTO: InventoryRequestDTO,
  ): Promise<InventoryResponseDTO>;

  abstract deleteByIdController(id: number): Promise<InventoryResponseDTO>;
}
