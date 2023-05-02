import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap, Router } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Subscription } from "rxjs";
import { County, CountyService } from "src/service/county.service";

@Component({
  templateUrl: "./view-county.component.html",
})
export class ViewCounty implements OnInit, OnDestroy {
  private params$?: Subscription;
  public county?: County;

  constructor(
    private route: ActivatedRoute,
    private countyService: CountyService,
    private router: Router,
    private modalService: NgbModal
  ) {}

  ngOnInit() {
    this.params$ = this.route.paramMap.subscribe(async (params: ParamMap) => {
      const id = params.get("id");
      if (id === null) {
        await this.router.navigate(["/"]);
        return;
      }
      const found = await this.countyService.findCountyById(id);
      if (found === undefined) {
        await this.router.navigate(["/"]);
        return;
      }
      this.county = found;
    });
  }

  ngOnDestroy() {
    this.params$?.unsubscribe();
  }

  openModal(content: any) {
    this.modalService.open(content, { ariaLabelledBy: "modal" });
  }

  async deleteCounty(modal: any) {
    if (this.county === undefined) {
      return;
    }
    await this.countyService.removeCounty(this.county.id);
    this.county = undefined;
    await modal.close("Deleted");
    this.router.navigate(["/counties"]);
  }
}
