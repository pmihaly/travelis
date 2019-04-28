import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { LocalStorage } from "@ngx-pwa/local-storage";
import { environment } from "src/environments/environment";
import { map, subscribeOn } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  private serverAddress = environment.serverAddress + "/auth/";
  public bejelentkezve: Boolean;

  constructor(private http: HttpClient, private localStorage: LocalStorage) {
    this.localStorage.getItem("token").subscribe(token => {
      if (token) {
        this.bejelentkezve = true;
        return;
      }
    });
  }

  regisztracio(felhasznalo: Felhasznalo) {
    return this.http.post(this.serverAddress + "regisztracio", felhasznalo);
  }

  bejelentkezes(felhasznalo: Felhasznalo) {
    this.http
      .post(this.serverAddress + "bejelentkezes", felhasznalo)
      .subscribe(valasz => {
        this.localStorage.setItem("token", valasz.token).subscribe(() => {});
      });
  }
}

interface Felhasznalo {
  name: string;
  password: string;
}
