import { Injectable } from "@angular/core";
import { Item } from "src/model/Item";

const initialItems = [
  new Item(crypto.randomUUID(), "Name 1"),
  new Item(crypto.randomUUID(), "Name 2"),
  new Item(crypto.randomUUID(), "Name 3"),
  new Item(crypto.randomUUID(), "Name 4"),
  new Item(crypto.randomUUID(), "Name 5"),
  new Item(crypto.randomUUID(), "Name 6"),
];

@Injectable({
  providedIn: "root",
})
export class ItemService {
  private items: Item[] = [...initialItems];

  public getItems(): Item[] {
    return this.items;
  }

  public findItemById(itemId: Item["id"]): Item | undefined {
    return this.items.find((i) => i.id === itemId);
  }

  public addItem(item: Item): void {
    this.items.push(item);
  }

  public removeItem(itemId: Item["id"]): void {
    this.items = this.items.filter((i) => i.id !== itemId);
  }

  public modifyItem(modifiedItem: Item): void {
    this.removeItem(modifiedItem.id);
    this.addItem(modifiedItem);
  }
}
