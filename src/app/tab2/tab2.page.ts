import { Component } from "@angular/core";
import { AuthService } from "../services/auth-service.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { PosztService } from "../services/poszt-service.service";

@Component({
  selector: "app-tab2",
  templateUrl: "tab2.page.html",
  styleUrls: ["tab2.page.scss"]
})
export class Tab2Page {
  private regisztracioForm: FormGroup;
  private regisztracioSuccess: Boolean = false;

  private bejelentkezesForm: FormGroup;
  private bejelentkezesSuccess: Boolean = false;

  private profilAdatok: any;

  private szerkesztes: String;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private posztService: PosztService
  ) {
    this.regisztracioForm = this.formBuilder.group({
      name: ["", Validators.required],
      password: ["", Validators.required]
    });

    this.bejelentkezesForm = this.formBuilder.group({
      name: ["", Validators.required],
      password: ["", Validators.required]
    });
  }

  onRegisztral() {
    if (this.regisztracioForm.invalid) {
      return;
    } else {
      this.regisztracioSuccess = true;

      const felhasznalo = {
        name: this.regisztracioForm.controls.name.value,
        password: this.regisztracioForm.controls.password.value
      };

      this.authService
        .regisztracio(felhasznalo)
        .subscribe(regisztraltAdatok =>
          this.authService.bejelentkezes(felhasznalo)
        );
    }
  }

  onBejelentkezik() {
    if (this.bejelentkezesForm.invalid) {
      return;
    } else {
      this.bejelentkezesSuccess = true;
      const felhasznalo = {
        name: this.bejelentkezesForm.controls.name.value,
        password: this.bejelentkezesForm.controls.password.value
      };
      this.authService.bejelentkezes(felhasznalo);
    }
  }

  onTorles(id) {
    this.posztService
      .deletePoszt(id)
      .subscribe(r =>
        r.subscribe(
          rs =>
            (this.profilAdatok.posztok = this.profilAdatok.posztok.filter(
              poszt => poszt._id !== id
            ))
        )
      );
  }

  onSzerkesztes(id) {
    if (this.szerkesztes !== id) {
      this.szerkesztes = id;
    } else {
      this.posztService
        .updatePoszt(
          this.profilAdatok.posztok.filter(poszt => poszt._id === id)[0],
          id
        )
        .subscribe(mapRes => mapRes.subscribe(httpRes => console.log(httpRes)));
      this.szerkesztes = null;
    }
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.authService
        .profilAdatok()
        .subscribe(r => r.subscribe(rs => (this.profilAdatok = rs)));
    }, 1000);
  }
}
