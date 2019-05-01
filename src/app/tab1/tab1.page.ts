import { Component } from "@angular/core";
import { PosztService } from "../services/poszt-service.service";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

import { ModalController } from "@ionic/angular";
import { PosztModalComponent } from "../poszt-modal/poszt-modal.component";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"]
})
export class Tab1Page {
  private posztok: Object;

  constructor(
    private posztService: PosztService,
    private http: HttpClient,
    private modalController: ModalController
  ) {}

  ngOnInit() {
    this.posztService.getPosztok().subscribe(posztok => {
      // Posztok felhasználóinak nevének lekérése (alapból a felhasznalo egy objectId)
      Object.keys(posztok).map(egyPoszt => {
        const poszt = posztok[egyPoszt];
        this.http
          .get(`${environment.serverAddress}/auth/${poszt.felhasznalo}/nev`)
          .subscribe(nev => (poszt.felhasznalo = nev));
      });
      this.posztok = posztok;
    });
  }

  async onPostButtonClick() {
    const modal = await this.modalController.create({
      component: PosztModalComponent,
      componentProps: { value: 123 }
    });
    return await modal.present();
  }
}
