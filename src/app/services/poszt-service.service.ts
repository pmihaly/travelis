import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

import { environment } from "../../environments/environment";
import { LocalStorage } from "@ngx-pwa/local-storage";
import { AuthService } from "./auth-service.service";

@Injectable({
  providedIn: "root"
})
export class PosztService {
  private serverAddress = environment.serverAddress + "/poszt/";

  constructor(
    private http: HttpClient,
    private localStorage: LocalStorage,
    private authService: AuthService
  ) {}

  getPosztok() {
    return this.http.get(this.serverAddress);
  }

  getSpecifiedPoszt(id: string) {
    return this.http.get(this.serverAddress + id);
  }

  createPoszt(Poszt: Poszt) {
    return this.authService
      .getHTTPOptions()
      .pipe(
        map(httpOptions =>
          this.http.post(this.serverAddress, Poszt, httpOptions)
        )
      );
  }

  updatePoszt(Poszt: Poszt, id: string) {
    return this.http.put(this.serverAddress + id, Poszt);
  }

  deletePoszt(id: string) {
    return this.http.delete(this.serverAddress + id);
  }
}

interface Poszt {
  cim: string;
  leiras: string;
  helyszin: string;
  kep: string;
  felhasznalo: string;
}
