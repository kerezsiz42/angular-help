import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ListItemsPage } from "src/pages/list-items/list-items.component";
import { ViewItemPage } from "src/pages/view-item/view-item.component";
import { CreateItemPage } from "src/pages/create-item/create-item.component";
import { EditItemPage } from "src/pages/edit-item/edit-item.component";

@NgModule({
  declarations: [
    AppComponent,
    ListItemsPage,
    ViewItemPage,
    CreateItemPage,
    EditItemPage,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
