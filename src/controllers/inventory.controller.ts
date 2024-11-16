import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { IInventoryService } from 'src/services/i-inventory.service';
import { InventoryRequestDTO } from 'src/dtos/inventory-request.dto';
import { InventoryResponseDTO } from 'src/dtos/inventory-response.dto';
import { IInventoryController } from './i-inventory.controller';

@Controller('inventories')
export class InventoryController implements IInventoryController {
  constructor(private readonly _inventoryService: IInventoryService) {}

  @Get()
  public async getAllController(): Promise<InventoryResponseDTO[]> {
    const inventories = await this._inventoryService.getAllService();
    console.log(inventories);
    return inventories;
  }

  @Get('/total/:category')
  public async getInventoryValue(@Param('category') category: string) {
    const totalValue =
      await this._inventoryService.calculateInventoryValue(category);
    console.log({ totalValue });
    return { totalValue };
  }

  @Get('/:id')
  public async getByIdController(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<InventoryResponseDTO> {
    const inventory = await this._inventoryService.getByIdService(id);
    console.log(inventory);
    return inventory;
  }
  @Post()
  public async createController(
    @Body() inventoryRequestDTO: InventoryRequestDTO,
  ): Promise<InventoryResponseDTO> {
    const inventory =
      await this._inventoryService.createService(inventoryRequestDTO);
    console.log(inventory);
    return inventory;
  }

  @Put('/:id')
  public async updateController(
    @Param('id', ParseIntPipe) id: number,
    @Body() inventoryRequestDTO: InventoryRequestDTO,
  ): Promise<InventoryResponseDTO> {
    const inventory = await this._inventoryService.updateService(
      id,
      inventoryRequestDTO,
    );
    console.log(inventory);
    return inventory;
  }

  @Delete('/:id')
  public async deleteByIdController(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<InventoryResponseDTO> {
    const inventory = await this._inventoryService.deleteByIdService(id);
    console.log(inventory);
    return inventory;
  }
}
