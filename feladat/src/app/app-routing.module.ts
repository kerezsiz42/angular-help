import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CreateItemPage } from "src/pages/create-item/create-item.component";
import { EditItemPage } from "src/pages/edit-item/edit-item.component";
import { ListItemsPage } from "src/pages/list-items/list-items.component";
import { ViewItemPage } from "src/pages/view-item/view-item.component";

const routes: Routes = [
  { path: "list-items", component: ListItemsPage },
  { path: "create-item/:id", component: CreateItemPage },
  { path: "edit-item/:id", component: EditItemPage },
  { path: "view-item/:id", component: ViewItemPage },
  { path: "**", redirectTo: "list-items" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
