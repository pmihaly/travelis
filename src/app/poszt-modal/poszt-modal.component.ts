import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ModalController } from "@ionic/angular";
import { PosztService } from "../services/poszt-service.service";

@Component({
  selector: "app-poszt-modal",
  templateUrl: "./poszt-modal.component.html",
  styleUrls: ["./poszt-modal.component.scss"]
})
export class PosztModalComponent implements OnInit {
  private posztForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private modalController: ModalController,
    private posztService: PosztService
  ) {
    this.posztForm = this.formBuilder.group({
      cim: ["", Validators.required],
      leiras: ["", Validators.required],
      helyszin: ["", Validators.required]
    });
  }

  ngOnInit() {}

  onPosztol() {
    if (this.posztForm.invalid) {
      this.modalController.dismiss();
      return;
    } else {
      const poszt = {
        cim: this.posztForm.controls.cim.value,
        leiras: this.posztForm.controls.leiras.value,
        helyszin: this.posztForm.controls.helyszin.value,
        kep: "jkjkjk"
      };

      this.posztService
        .createPoszt(poszt)
        .subscribe(tokenSub =>
          tokenSub.subscribe(res => this.modalController.dismiss())
        );
    }
  }

  onKilep() {
    this.modalController.dismiss();
  }
}
