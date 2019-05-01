(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2-tab2-module"],{

/***/ "./src/app/tab2/tab2.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.module.ts ***!
  \*************************************/
/*! exports provided: Tab2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function() { return Tab2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab2.page */ "./src/app/tab2/tab2.page.ts");







var Tab2PageModule = /** @class */ (function () {
    function Tab2PageModule() {
    }
    Tab2PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: "", component: _tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"] }])
            ],
            declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"]]
        })
    ], Tab2PageModule);
    return Tab2PageModule;
}());



/***/ }),

/***/ "./src/app/tab2/tab2.page.html":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ng-container *ngIf=\"!authService.bejelentkezve; else bejelentkezve\">\n      <ion-title>Regisztráció</ion-title>\n    </ng-container>\n    <ng-template #bejelentkezve>\n      <ion-title>Fiók</ion-title>\n    </ng-template>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ng-container *ngIf=\"authService.bejelentkezve; else nincsBejelentkezve\" class=\"ion-padding\">\n    <ng-container *ngIf=\"profilAdatok; else nincsProfilAdat\">\n      <ion-item>\n        <ion-avatar slot=\"start\">\n          <img src=\"https://ionicframework.com/docs/demos/api/avatar/avatar.svg\" alt=\"avatar\">\n        </ion-avatar>\n        <ion-label>\n          {{profilAdatok.user.name}} Profilja\n        </ion-label>\n      </ion-item>\n      <ion-card *ngFor=\"let poszt of profilAdatok.posztok\">\n        <ion-card-header>\n          <ion-img [src]=\"'data:image/png;base64,' + poszt.kep\"></ion-img>\n          <ion-card-subtitle>\n            {{poszt.helyszin}}\n          </ion-card-subtitle>\n          <ion-card-title>\n            {{poszt.cim}}\n          </ion-card-title>\n        </ion-card-header>\n\n        <ion-card-content>\n          {{poszt.leiras}}\n        </ion-card-content>\n      </ion-card>\n    </ng-container>\n    <ng-template #nincsProfilAdat>\n      <ion-item>\n        <ion-avatar slot=\"start\">\n          <img src=\"https://ionicframework.com/docs/demos/api/avatar/avatar.svg\" alt=\"avatar\">\n        </ion-avatar>\n        <ion-label>\n          <ion-skeleton-text animated></ion-skeleton-text>\n        </ion-label>\n      </ion-item>\n      <ion-card *ngFor=\"let i of [0,1,2,3,4,5]\">\n        <ion-card-header>\n          <ion-card-subtitle>\n            <ion-skeleton-text animated style=\"width:50%\"></ion-skeleton-text>\n          </ion-card-subtitle>\n          <ion-card-title>\n            <ion-skeleton-text animated></ion-skeleton-text>\n          </ion-card-title>\n        </ion-card-header>\n\n        <ion-card-content>\n          <ion-skeleton-text animated></ion-skeleton-text>\n        </ion-card-content>\n\n        <ion-chip>\n          <ion-skeleton-text animated></ion-skeleton-text>\n        </ion-chip>\n      </ion-card>\n    </ng-template>\n\n  </ng-container>\n  <ng-template #nincsBejelentkezve>\n    <ion-card>\n      <form [formGroup]=\"regisztracioForm\">\n        <ion-card-header>\n          <ng-container *ngIf=\"regisztracioSuccess; else nincsSubmit\">\n            <ion-card-title>Sikeres regisztráció</ion-card-title>\n          </ng-container>\n          <ng-template #nincsSubmit>\n            <ion-card-title>Regisztráció</ion-card-title>\n          </ng-template>\n\n        </ion-card-header>\n\n        <ion-card-content>\n          <ion-item>\n            <ion-label position=\"floating\">Felhasználónév</ion-label>\n            <ion-input formControlName=\"name\"></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-label position=\"floating\">Jelszó</ion-label>\n            <ion-input type=\"password\" formControlName=\"password\"></ion-input>\n          </ion-item>\n          <ion-button color=\"primary\" expand=\"full\" type=\"submit\" (click)=\"onRegisztral()\">Regisztráció</ion-button>\n        </ion-card-content>\n      </form>\n    </ion-card>\n    <ion-card>\n      <form [formGroup]=\"bejelentkezesForm\">\n        <ion-card-header>\n          <ng-container *ngIf=\"bejelentkezesSuccess; else nincsBejelentkezes\">\n            <ion-card-title>Sikeres bejelentkezés</ion-card-title>\n          </ng-container>\n          <ng-template #nincsBejelentkezes>\n            <ion-card-title>Bejelentkezés</ion-card-title>\n          </ng-template>\n\n        </ion-card-header>\n\n        <ion-card-content>\n          <ion-item>\n            <ion-label position=\"floating\">Felhasználónév</ion-label>\n            <ion-input formControlName=\"name\"></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-label position=\"floating\">Jelszó</ion-label>\n            <ion-input type=\"password\" formControlName=\"password\"></ion-input>\n          </ion-item>\n          <ion-button color=\"primary\" expand=\"full\" type=\"submit\" (click)=\"onBejelentkezik()\">Bejelentkezés</ion-button>\n        </ion-card-content>\n      </form>\n    </ion-card>\n  </ng-template>\n\n\n\n</ion-content>"

/***/ }),

/***/ "./src/app/tab2/tab2.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjIvdGFiMi5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/tab2/tab2.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab2/tab2.page.ts ***!
  \***********************************/
/*! exports provided: Tab2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2Page", function() { return Tab2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth-service.service */ "./src/app/services/auth-service.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




var Tab2Page = /** @class */ (function () {
    function Tab2Page(authService, formBuilder) {
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.regisztracioSuccess = false;
        this.bejelentkezesSuccess = false;
        this.regisztracioForm = this.formBuilder.group({
            name: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        this.bejelentkezesForm = this.formBuilder.group({
            name: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    }
    Tab2Page.prototype.onRegisztral = function () {
        var _this = this;
        if (this.regisztracioForm.invalid) {
            return;
        }
        else {
            this.regisztracioSuccess = true;
            var felhasznalo_1 = {
                name: this.regisztracioForm.controls.name.value,
                password: this.regisztracioForm.controls.password.value
            };
            this.authService
                .regisztracio(felhasznalo_1)
                .subscribe(function (regisztraltAdatok) {
                return _this.authService.bejelentkezes(felhasznalo_1);
            });
        }
    };
    Tab2Page.prototype.onBejelentkezik = function () {
        if (this.bejelentkezesForm.invalid) {
            return;
        }
        else {
            this.bejelentkezesSuccess = true;
            var felhasznalo = {
                name: this.bejelentkezesForm.controls.name.value,
                password: this.bejelentkezesForm.controls.password.value
            };
            this.authService.bejelentkezes(felhasznalo);
        }
    };
    Tab2Page.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.authService
                .profilAdatok()
                .subscribe(function (r) { return r.subscribe(function (rs) { return (_this.profilAdatok = rs); }); });
        }, 1000);
    };
    Tab2Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-tab2",
            template: __webpack_require__(/*! ./tab2.page.html */ "./src/app/tab2/tab2.page.html"),
            styles: [__webpack_require__(/*! ./tab2.page.scss */ "./src/app/tab2/tab2.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], Tab2Page);
    return Tab2Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab2-tab2-module.js.map