import { Component, OnInit } from "@angular/core";
import { AncillaryService } from "src/service/ancillary.service";
import { County, CountyService } from "src/service/county.service";

@Component({
  templateUrl: "./list-counties.component.html",
})
export class ListCounties implements OnInit {
  counties?: County[];

  constructor(
    private countyService: CountyService,
    private ancillaryService: AncillaryService
  ) {}

  async ngOnInit() {
    this.counties = await this.countyService.getCounties();
  }

  getIsListView() {
    return this.ancillaryService.getIsListView();
  }
}
