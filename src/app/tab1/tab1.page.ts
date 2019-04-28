import { Component } from "@angular/core";
import { PosztService } from "../services/poszt-service.service";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"]
})
export class Tab1Page {
  private posztok: Object;

  constructor(private posztService: PosztService, private http: HttpClient) {}

  ngOnInit() {
    this.posztService.getPosztok().subscribe(posztok => {
      // Posztok felhasználóinak nevének lekérése (alapból a felhasznalo egy objectId)
      Object.keys(posztok).map(egyPoszt => {
        const poszt = posztok[egyPoszt];
        this.http
          .get(`${environment.serverAddress}/auth/${poszt.felhasznalo}`)
          .subscribe(nev => (poszt.felhasznalo = nev));
      });
      this.posztok = posztok;
    });
  }
}
