import { Module, ValidationPipe } from '@nestjs/common';
import { InventoryController } from './controllers/inventory.controller';
import { InventoryService } from './services/inventory.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { InventoryModel } from './models/inventory.model';
import { IInventoryService } from './services/i-inventory.service';
import { InventoryRepository } from './repositories/inventory.repository';
import { IInventoryRepository } from './repositories/i-inventory.repository';
import { IInventoryMapper } from './mappers/i-inventory.mapper';
import { InventoryMapper } from './mappers/inventory.mapper';
import { APP_PIPE } from '@nestjs/core';

@Module({
  imports: [
    TypeOrmModule.forFeature([InventoryModel]),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.development`,
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        return {
          type: 'sqlite',
          database: config.get<string>('DB_NAME'),
          synchronize: true,
          entities: [InventoryModel],
        };
      },
    }),
  ],
  controllers: [InventoryController],
  providers: [
    { provide: IInventoryMapper, useClass: InventoryMapper },
    { provide: IInventoryService, useClass: InventoryService },
    { provide: IInventoryRepository, useClass: InventoryRepository },
    {
      provide: APP_PIPE,
      useValue: new ValidationPipe({
        whitelist: true,
      }),
    },
  ],
})
export class InventoryModule {}
