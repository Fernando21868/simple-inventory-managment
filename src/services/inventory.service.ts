import { Injectable, NotFoundException } from '@nestjs/common';
import { InventoryRequestDTO } from 'src/dtos/inventory-request.dto';
import { InventoryResponseDTO } from 'src/dtos/inventory-response.dto';
import { IInventoryService } from './i-inventory.service';
import { IInventoryRepository } from 'src/repositories/i-inventory.repository';
import { IInventoryMapper } from 'src/mappers/i-inventory.mapper';

@Injectable()
export class InventoryService implements IInventoryService {
  constructor(
    private readonly _inventoryRepository: IInventoryRepository,
    private readonly _inventoryMapper: IInventoryMapper,
  ) {}

  public async getAllService(): Promise<InventoryResponseDTO[]> {
    const inventories = await this._inventoryRepository.getAllRepository();
    const inventoryResponseDTOList =
      this._inventoryMapper.inventoryListToInventoryResponseDTOList(
        inventories,
      );
    return inventoryResponseDTOList;
  }

  public async getByIdService(id: number): Promise<InventoryResponseDTO> {
    const inventory = await this._inventoryRepository.getByIdRepository(id);
    if (!inventory) {
      throw new NotFoundException('Inventory not found');
    }
    const inventoryResponseDTO =
      this._inventoryMapper.inventoryToIventoryResponseDTO(inventory);
    return inventoryResponseDTO;
  }

  public async createService(
    inventoryRequestDTO: InventoryRequestDTO,
  ): Promise<InventoryResponseDTO> {
    const inventory =
      this._inventoryMapper.createInventoryRequestDTOToInventory(
        inventoryRequestDTO,
      );
    const inventoryCreated =
      await this._inventoryRepository.createRepository(inventory);
    const inventoryResponseDTO =
      this._inventoryMapper.inventoryToIventoryResponseDTO(inventoryCreated);
    return inventoryResponseDTO;
  }

  public async updateService(
    id: number,
    inventoryRequestDTO: InventoryRequestDTO,
  ): Promise<InventoryResponseDTO> {
    const inventoryRetrieved = await this.getByIdService(id);
    const inventory =
      this._inventoryMapper.updateInventoryRequestDTOToInventory(
        inventoryRequestDTO,
        inventoryRetrieved,
      );
    const inventoryUpdated =
      await this._inventoryRepository.updateRepository(inventory);
    const inventoryResponseDTO =
      this._inventoryMapper.inventoryToIventoryResponseDTO(inventoryUpdated);
    return inventoryResponseDTO;
  }

  public async deleteByIdService(id: number): Promise<InventoryResponseDTO> {
    const inventory = await this._inventoryRepository.deleteByIdRepository(id);
    const inventoryResponseDTO =
      this._inventoryMapper.inventoryToIventoryResponseDTO(inventory);
    return inventoryResponseDTO;
  }
}
