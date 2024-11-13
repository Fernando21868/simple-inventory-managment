export class InventoryResponseDTO {
  id: number;
  name: string;
  quantity: number;
  price: number;
  category: string;

  constructor(init: Partial<InventoryResponseDTO>) {
    Object.assign(this, init);
  }
}
