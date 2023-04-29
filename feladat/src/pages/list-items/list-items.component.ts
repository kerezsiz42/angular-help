import { Component, OnInit } from "@angular/core";
import { Item } from "src/model/Item";
import { ItemService } from "src/service/item.service";

@Component({
  templateUrl: "./list-items.component.html",
})
export class ListItemsPage implements OnInit {
  items: Item[] = [];

  constructor(private itemService: ItemService) {}

  ngOnInit() {
    this.items = this.itemService.getItems();
  }
}
