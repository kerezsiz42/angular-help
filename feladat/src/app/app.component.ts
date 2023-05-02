import { Component } from "@angular/core";
import { AncillaryService } from "src/service/ancillary.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "list-app";
  constructor(private ancillaryService: AncillaryService) {}

  getIsListView() {
    return this.ancillaryService.getIsListView();
  }

  toggleIsListView() {
    this.ancillaryService.toggleIsListView();
  }
}
