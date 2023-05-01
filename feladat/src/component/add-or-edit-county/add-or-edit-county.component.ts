import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { County, CountyService } from "src/service/county.service";

@Component({
  templateUrl: "./add-or-edit-county.component.html",
})
export class AddOrEditCounty implements OnInit, OnDestroy {
  private params$?: Subscription;
  public county?: County;

  constructor(
    private route: ActivatedRoute,
    private countyService: CountyService,
    private router: Router
  ) {}

  ngOnInit() {
    this.params$ = this.route.paramMap.subscribe(async (params: ParamMap) => {
      const id = params.get("id");
      if (id === null) {
        await this.router.navigate(["/"]);
        return;
      }
      const foundItem = this.countyService.findCountyById(id);
      if (foundItem === undefined) {
        await this.router.navigate(["/"]);
        return;
      }
      this.county = foundItem;
    });
  }

  ngOnDestroy() {
    this.params$?.unsubscribe();
  }
}
