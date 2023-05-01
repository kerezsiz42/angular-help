import { Component, OnInit } from "@angular/core";
import { County, CountyService } from "src/service/county.service";

@Component({
  templateUrl: "./list-items.component.html",
})
export class ListCounties implements OnInit {
  counties: County[] = [];

  constructor(private countyService: CountyService) {}

  ngOnInit() {
    this.counties = this.countyService.getCounties();
  }
}
