import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ModalController, ToastController } from "@ionic/angular";
import { PosztService } from "../services/poszt-service.service";
import { ImagePicker } from "@ionic-native/image-picker/ngx";

@Component({
  selector: "app-poszt-modal",
  templateUrl: "./poszt-modal.component.html",
  styleUrls: ["./poszt-modal.component.scss"]
})
export class PosztModalComponent implements OnInit {
  private posztForm: FormGroup;
  private kep: any;

  constructor(
    private formBuilder: FormBuilder,
    private modalController: ModalController,
    private posztService: PosztService,
    private imagePicker: ImagePicker,
    private toastController: ToastController
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
      this.toastController
        .create({
          message: "Hiányzó adatok",
          duration: 2000
        })
        .then(toast => toast.present());
    } else {
      if (this.kep === undefined) {
        this.toastController
          .create({
            message: "Nem adtál meg képet",
            duration: 2000
          })
          .then(toast => toast.present());
        return;
      }
      const poszt = {
        cim: this.posztForm.controls.cim.value,
        leiras: this.posztForm.controls.leiras.value,
        helyszin: this.posztForm.controls.helyszin.value,
        kep: this.kep
      };

      console.log(poszt);

      this.posztService.createPoszt(poszt).subscribe(tokenSub =>
        tokenSub.subscribe(res => {
          console.log(res);
          this.modalController.dismiss();
        })
      );
    }
  }

  onKilep() {
    this.modalController.dismiss();
  }

  onFenykep() {
    const options = {
      maximumImagesCount: 1,
      outputType: 1
    };
    this.imagePicker.getPictures(options).then(
      results => {
        for (var i = 0; i < results.length; i++) {
          this.kep = results[0];
        }
      },
      err => {}
    );
  }
}
