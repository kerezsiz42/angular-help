import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AddOrEditCounty } from "src/component/add-or-edit-county/add-or-edit-county.component";
import { ListCounties } from "src/component/list-counties/list-counties.component";
import { ViewCounty } from "src/component/view-county/view-county.component";

@NgModule({
  declarations: [AppComponent, AddOrEditCounty, ListCounties, ViewCounty],
  imports: [BrowserModule, AppRoutingModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
