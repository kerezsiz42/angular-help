import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddOrEditCounty } from "src/component/add-or-edit-county/add-or-edit-county.component";
import { ListCounties } from "src/component/list-counties/list-counties.component";
import { ViewCounty } from "src/component/view-county/view-county.component";

const routes: Routes = [
  { path: "counties", component: ListCounties },
  { path: "county/new", component: AddOrEditCounty },
  { path: "county/:id", component: ViewCounty },
  { path: "county/:id/edit", component: AddOrEditCounty },
  { path: "**", redirectTo: "counties" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: "reload" })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
