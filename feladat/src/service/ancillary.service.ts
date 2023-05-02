import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class AncillaryService {
  private isListView: boolean = true;

  getIsListView() {
    return this.isListView;
  }

  toggleIsListView() {
    this.isListView = !this.isListView;
  }
}
