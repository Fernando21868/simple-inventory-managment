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
  getAllController(): Promise<InventoryResponseDTO[]> {
    return this._inventoryService.getAllService();
  }

  @Get('/:id')
  getByIdController(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<InventoryResponseDTO> {
    return this._inventoryService.getByIdService(id);
  }
  @Post()
  createController(
    @Body() inventoryRequestDTO: InventoryRequestDTO,
  ): Promise<InventoryResponseDTO> {
    return this._inventoryService.createService(inventoryRequestDTO);
  }

  @Put("/:id")
  updateController(
    @Param('id', ParseIntPipe) id: number,
    @Body() inventoryRequestDTO: InventoryRequestDTO,
  ): Promise<InventoryResponseDTO> {
    return this._inventoryService.updateService(id, inventoryRequestDTO);
  }

  @Delete('/:id')
  deleteByIdController(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<InventoryResponseDTO> {
    return this._inventoryService.deleteByIdService(id);
  }
}
