import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class PosztService {
  private serverAddress = environment.serverAddress + "/poszt/";

  constructor(private http: HttpClient) {}

  getPosztok() {
    return this.http.get(this.serverAddress);
  }

  getSpecifiedPoszt(id: string) {
    return this.http.get(this.serverAddress + id);
  }

  createPoszt(Poszt: Poszt) {
    return this.http.post(this.serverAddress, Poszt);
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
