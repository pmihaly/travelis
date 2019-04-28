import { Component } from "@angular/core";
import { PosztService } from "../services/poszt-service.service";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"]
})
export class Tab1Page {
  private posztok: Object;

  constructor(private posztService: PosztService) {}

  ngOnInit() {
    this.posztService
      .getPosztok()
      .subscribe(posztok => (this.posztok = posztok));
  }
}
