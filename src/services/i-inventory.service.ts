import { InventoryRequestDTO } from 'src/dtos/inventory-request.dto';
import { InventoryResponseDTO } from 'src/dtos/inventory-response.dto';

export abstract class IInventoryService {
  abstract getAllService(): Promise<InventoryResponseDTO[]>;

  abstract getByIdService(id: number): Promise<InventoryResponseDTO>;

  abstract createService(
    inventoryRequestDTO: InventoryRequestDTO,
  ): Promise<InventoryResponseDTO>;

  abstract updateService(
    id: number,
    inventoryRequestDTO: InventoryRequestDTO,
  ): Promise<InventoryResponseDTO>;

  abstract deleteByIdService(id: number): Promise<InventoryResponseDTO>;
}
