import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { Item } from "src/model/Item";
import { ItemService } from "src/service/item.service";

@Component({
  templateUrl: "./edit-item.component.html",
})
export class EditItemPage implements OnInit, OnDestroy {
  private params$?: Subscription;
  public item?: Item;

  constructor(
    private route: ActivatedRoute,
    private itemService: ItemService,
    private router: Router
  ) {}

  ngOnInit() {
    this.params$ = this.route.paramMap.subscribe(async (params: ParamMap) => {
      const id = params.get("id");
      if (id === null) {
        await this.router.navigate(["/"]);
        return;
      }
      const foundItem = this.itemService.findItemById(id);
      if (foundItem === undefined) {
        await this.router.navigate(["/"]);
        return;
      }
      this.item = foundItem;
    });
  }

  ngOnDestroy() {
    this.params$?.unsubscribe();
  }
}
