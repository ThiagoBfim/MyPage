webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".my-container {\r\n  margin: 30px;\r\n}\r\n\r\n.right-container-dark {\r\n  border-style: double;\r\n  color: white;\r\n  background-color: darkgrey;\r\n  padding: 10px;\r\n}\r\n\r\n.right-container {\r\n  border-style: double;\r\n  color: black;\r\n  background-color: lightblue;\r\n  padding: 10px;\r\n}\r\n\r\n.left-container-dark {\r\n  border-style: double;\r\n  color: white;\r\n  background-color: darkgray;\r\n  padding: 10px;\r\n}\r\n\r\n.left-container {\r\n  border-style: double;\r\n  color: black;\r\n  background-color: lightgreen;\r\n  padding: 10px;\r\n}\r\n\r\n.title-conhecimento {\r\n  text-align:left;\r\n  font-weight: bold;\r\n  font-size: 30px;\r\n}\r\n\r\n.sub-container {\r\n  margin: 5px;\r\n}\r\n\r\n.interruptor-style > img{\r\n  max-width:110px;\r\n  max-height:110px;\r\n  margin: 10px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div [ngClass]=\"lightsOn ? 'root-container': 'root-container-dark'\">\r\n  <div class=\"my-container row\">\r\n    <div class=\"col-md-4\" [ngClass]=\"lightsOn ? 'left-container': 'left-container-dark'\">\r\n      <app-social-info></app-social-info>\r\n    </div>\r\n\r\n    <div class=\"col-md-8\" [ngClass]=\"lightsOn ? 'right-container': 'right-container-dark'\">\r\n      <div>\r\n        <div class=\"row sub-container\">\r\n          <div class=\"col-md-7\">\r\n            <h1 class=\"title-conhecimento\">\r\n              {{\"Conhecimentos\" | translate}}\r\n            </h1>\r\n          </div>\r\n          <div class=\"col-md-5\" style=\"text-align: right\">\r\n            <a href=\"javascript:void(0);\" (click)=\"switchLanguage('en')\"> <img [src]=\"usaImage\" style=\"max-width:80px; max-height:80px;\"></a>\r\n            <a href=\"javascript:void(0);\" (click)=\"switchLanguage('pt')\"> <img [src]=\"brazilImage\" style=\"max-width:80px; max-height:80px;\"></a>\r\n          </div>\r\n        </div>\r\n        <app-back-end-conhecimento></app-back-end-conhecimento>\r\n        <app-front-end-conhecimento></app-front-end-conhecimento>\r\n        <app-machine-learning-conhecimento></app-machine-learning-conhecimento>\r\n        <app-database-conhecimento></app-database-conhecimento>\r\n        <app-mobile-conhecimento></app-mobile-conhecimento>\r\n        <app-server-conhecimento></app-server-conhecimento>\r\n        <app-others-conhecimento></app-others-conhecimento>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row col-md-12\" style=\"text-align:right\">\r\n      <div class=\"col-md-12\">\r\n        <a href=\"javascript:;\" class=\"interruptor-style\" (click)=\"switchLight()\">\r\n          <img [src]=\"lightsOn ? '/assets/images/ON.png' : '/assets/images/OFF.png'\" >\r\n        </a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__("./node_modules/@ngx-translate/core/@ngx-translate/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(elementRef, translate) {
        var _this = this;
        this.elementRef = elementRef;
        this.translate = translate;
        this.brazilImage = 'assets/images/brazil.png';
        this.usaImage = 'assets/images/usa.png';
        this.lightsOn = false;
        this.switchLanguage = function (lang) {
            _this.translate.use(lang);
        };
    }
    AppComponent.prototype.ngAfterViewInit = function () {
        this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'black';
    };
    AppComponent.prototype.switchLight = function () {
        this.lightsOn = !this.lightsOn;
        if (this.lightsOn) {
            this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'aliceblue';
        }
        else {
            this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'black';
        }
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createTranslateLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__social_info_social_info_component__ = __webpack_require__("./src/app/social-info/social-info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__program_conhecimento_program_conhecimento_component__ = __webpack_require__("./src/app/program-conhecimento/program-conhecimento.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__front_end_conhecimento_front_end_conhecimento_component__ = __webpack_require__("./src/app/front-end-conhecimento/front-end-conhecimento.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__back_end_conhecimento_back_end_conhecimento_component__ = __webpack_require__("./src/app/back-end-conhecimento/back-end-conhecimento.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__others_conhecimento_others_conhecimento_component__ = __webpack_require__("./src/app/others-conhecimento/others-conhecimento.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__database_conhecimento_database_conhecimento_component__ = __webpack_require__("./src/app/database-conhecimento/database-conhecimento.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__server_conhecimento_server_conhecimento_component__ = __webpack_require__("./src/app/server-conhecimento/server-conhecimento.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__mobile_conhecimento_mobile_conhecimento_component__ = __webpack_require__("./src/app/mobile-conhecimento/mobile-conhecimento.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_material_expansion__ = __webpack_require__("./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ngx_translate_core__ = __webpack_require__("./node_modules/@ngx-translate/core/@ngx-translate/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ngx_translate_http_loader__ = __webpack_require__("./node_modules/@ngx-translate/http-loader/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__global_service__ = __webpack_require__("./src/app/global-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__machine_learning_conhecimento_machine_learning_conhecimento_component__ = __webpack_require__("./src/app/machine-learning-conhecimento/machine-learning-conhecimento.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_18__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["H" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_0__social_info_social_info_component__["a" /* SocialInfoComponent */],
                __WEBPACK_IMPORTED_MODULE_9__program_conhecimento_program_conhecimento_component__["a" /* ProgramConhecimentoComponent */],
                __WEBPACK_IMPORTED_MODULE_10__front_end_conhecimento_front_end_conhecimento_component__["a" /* FrontEndConhecimentoComponent */],
                __WEBPACK_IMPORTED_MODULE_11__back_end_conhecimento_back_end_conhecimento_component__["a" /* BackEndConhecimentoComponent */],
                __WEBPACK_IMPORTED_MODULE_12__others_conhecimento_others_conhecimento_component__["a" /* OthersConhecimentoComponent */],
                __WEBPACK_IMPORTED_MODULE_13__database_conhecimento_database_conhecimento_component__["a" /* DatabaseConhecimentoComponent */],
                __WEBPACK_IMPORTED_MODULE_14__server_conhecimento_server_conhecimento_component__["a" /* ServerConhecimentoComponent */],
                __WEBPACK_IMPORTED_MODULE_15__mobile_conhecimento_mobile_conhecimento_component__["a" /* MobileConhecimentoComponent */],
                __WEBPACK_IMPORTED_MODULE_20__machine_learning_conhecimento_machine_learning_conhecimento_component__["a" /* MachineLearningConhecimentoComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["c" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["b" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_16__angular_material_expansion__["a" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_17__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_17__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: createTranslateLoader,
                        deps: [__WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */]]
                    }
                })
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_17__ngx_translate_core__["b" /* TranslateModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_19__global_service__["a" /* GlobalService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/back-end-conhecimento/back-end-conhecimento.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/back-end-conhecimento/back-end-conhecimento.component.html":
/***/ (function(module, exports) {

module.exports = "<app-program-conhecimento [title]=\"title\" [obj]=\"cards\"></app-program-conhecimento>\r\n"

/***/ }),

/***/ "./src/app/back-end-conhecimento/back-end-conhecimento.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BackEndConhecimentoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model__ = __webpack_require__("./src/app/model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global_service__ = __webpack_require__("./src/app/global-service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BackEndConhecimentoComponent = (function () {
    function BackEndConhecimentoComponent(globalService) {
        this.cards = [];
        this.title = 'Back-End';
        this.globalService = globalService;
    }
    BackEndConhecimentoComponent.prototype.ngOnInit = function () {
        this.createJavaKnow();
        this.createWicketKnow();
        this.createSpringKnow();
        this.createHibernateKnow();
    };
    BackEndConhecimentoComponent.prototype.createJavaKnow = function () {
        var card = new __WEBPACK_IMPORTED_MODULE_1__model__["b" /* KnowCard */]();
        card.title = 'Java';
        this.globalService.updateCardDescribe(card, 'java-info1', 'java-info2', 'java-info3');
        this.globalService.updateCardCertificationLink(card, 'Oracle 1Z0-808.pdf', 'Oracle 1z0-809.pdf', 'Design Patterns - Algaworks.pdf', 'HackaTruck - Eldorado.pdf');
        card.image = 'assets/images/Java.png';
        card.yearLearn = 2015;
        card.qtdStar = 5;
        this.cards.push(card);
    };
    BackEndConhecimentoComponent.prototype.createWicketKnow = function () {
        var card = new __WEBPACK_IMPORTED_MODULE_1__model__["b" /* KnowCard */]();
        card.title = 'Wicket Apache';
        this.globalService.updateCardDescribe(card, 'wicket-info1', 'wicket-info2', 'wicket-info3');
        card.image = 'assets/images/wicket.png';
        card.yearLearn = 2016;
        card.qtdStar = 4;
        this.cards.push(card);
    };
    BackEndConhecimentoComponent.prototype.createSpringKnow = function () {
        var card = new __WEBPACK_IMPORTED_MODULE_1__model__["b" /* KnowCard */]();
        card.title = 'Spring Framework';
        this.globalService.updateCardDescribe(card, 'spring-info1', 'spring-info2', 'spring-info3', 'spring-info4', 'spring-info5');
        this.globalService.updateCardCertificationLink(card, 'Angular with Spring - Algaworks.pdf', 'Spring Framework Expert - Algaworks.pdf');
        card.image = 'assets/images/spring.jpg';
        card.yearLearn = 2016;
        card.qtdStar = 3;
        this.cards.push(card);
    };
    BackEndConhecimentoComponent.prototype.createHibernateKnow = function () {
        var card = new __WEBPACK_IMPORTED_MODULE_1__model__["b" /* KnowCard */]();
        card.title = 'Hibernate';
        this.globalService.updateCardDescribe(card, 'hibernate-info1', 'hibernate-info2', 'hibernate-info3', 'hibernate-info4');
        card.image = 'assets/images/hibernate.jpg';
        card.yearLearn = 2015;
        card.qtdStar = 4;
        this.cards.push(card);
    };
    BackEndConhecimentoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-back-end-conhecimento',
            template: __webpack_require__("./src/app/back-end-conhecimento/back-end-conhecimento.component.html"),
            styles: [__webpack_require__("./src/app/back-end-conhecimento/back-end-conhecimento.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__global_service__["a" /* GlobalService */]])
    ], BackEndConhecimentoComponent);
    return BackEndConhecimentoComponent;
}());



/***/ }),

/***/ "./src/app/database-conhecimento/database-conhecimento.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/database-conhecimento/database-conhecimento.component.html":
/***/ (function(module, exports) {

module.exports = "<app-program-conhecimento [title]=\"title\" [obj]=\"cards\"></app-program-conhecimento>\r\n\r\n"

/***/ }),

/***/ "./src/app/database-conhecimento/database-conhecimento.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatabaseConhecimentoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model__ = __webpack_require__("./src/app/model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__("./node_modules/@ngx-translate/core/@ngx-translate/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__global_service__ = __webpack_require__("./src/app/global-service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DatabaseConhecimentoComponent = (function () {
    function DatabaseConhecimentoComponent(translate, globalService) {
        var _this = this;
        this.cards = [];
        this.title = 'Data Base';
        this.globalService = globalService;
        translate.onLangChange.subscribe(function (event) {
            translate.get('banco-dados').subscribe(function (res) { _this.title = res; });
        });
    }
    DatabaseConhecimentoComponent.prototype.ngOnInit = function () {
        this.createSqlKnow();
        this.createFlywayKnow();
        this.createNoSqlKnow();
    };
    DatabaseConhecimentoComponent.prototype.createSqlKnow = function () {
        var card = new __WEBPACK_IMPORTED_MODULE_1__model__["b" /* KnowCard */]();
        card.title = 'SQL';
        this.globalService.updateCardDescribe(card, 'sql-describe1', 'sql-describe2', 'sql-describe3');
        this.globalService.updateCardCertificationLink(card, 'SQL - Certificado.pdf');
        card.image = 'assets/images/sql.png';
        card.yearLearn = 2016;
        card.qtdStar = 4;
        this.cards.push(card);
    };
    DatabaseConhecimentoComponent.prototype.createNoSqlKnow = function () {
        var card = new __WEBPACK_IMPORTED_MODULE_1__model__["b" /* KnowCard */]();
        card.title = 'NoSql';
        this.globalService.updateCardDescribe(card, 'nosql-describe1');
        card.image = 'assets/images/NoSQL.jpg';
        card.yearLearn = 2017;
        card.qtdStar = 1;
        this.cards.push(card);
    };
    DatabaseConhecimentoComponent.prototype.createFlywayKnow = function () {
        var card = new __WEBPACK_IMPORTED_MODULE_1__model__["b" /* KnowCard */]();
        card.title = 'Flyway';
        this.globalService.updateCardDescribe(card, 'flyway-describe1', 'flyway-describe2');
        card.image = 'assets/images/flyway.png';
        card.yearLearn = 2017;
        card.qtdStar = 3;
        this.cards.push(card);
    };
    DatabaseConhecimentoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-database-conhecimento',
            template: __webpack_require__("./src/app/database-conhecimento/database-conhecimento.component.html"),
            styles: [__webpack_require__("./src/app/database-conhecimento/database-conhecimento.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_3__global_service__["a" /* GlobalService */]])
    ], DatabaseConhecimentoComponent);
    return DatabaseConhecimentoComponent;
}());



/***/ }),

/***/ "./src/app/front-end-conhecimento/front-end-conhecimento.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/front-end-conhecimento/front-end-conhecimento.component.html":
/***/ (function(module, exports) {

module.exports = "<app-program-conhecimento [title]=\"title\" [obj]=\"cards\"></app-program-conhecimento>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/front-end-conhecimento/front-end-conhecimento.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FrontEndConhecimentoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model__ = __webpack_require__("./src/app/model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global_service__ = __webpack_require__("./src/app/global-service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FrontEndConhecimentoComponent = (function () {
    function FrontEndConhecimentoComponent(globalService) {
        this.cards = [];
        this.title = 'Front-End';
        this.globalService = globalService;
    }
    FrontEndConhecimentoComponent.prototype.ngOnInit = function () {
        this.createHtmlKnow();
        this.createBootstrapKnow();
        this.createCssKnow();
        this.createJavaScriptKnow();
        this.createAngularKnow();
    };
    FrontEndConhecimentoComponent.prototype.createHtmlKnow = function () {
        var card = new __WEBPACK_IMPORTED_MODULE_1__model__["b" /* KnowCard */]();
        card.title = 'HTML';
        this.globalService.updateCardDescribe(card, 'html-describe1', 'html-describe2', 'html-describe3');
        this.globalService.updateCardCertificationLink(card, 'HTML and CSS - Certificado Oficina na Net.pdf');
        card.image = 'assets/images/html.png';
        card.yearLearn = 2015;
        card.qtdStar = 5;
        this.cards.push(card);
    };
    FrontEndConhecimentoComponent.prototype.createCssKnow = function () {
        var card = new __WEBPACK_IMPORTED_MODULE_1__model__["b" /* KnowCard */]();
        card.title = 'CSS';
        this.globalService.updateCardDescribe(card, 'css-describe1', 'css-describe2');
        this.globalService.updateCardCertificationLink(card, 'HTML and CSS - Certificado Oficina na Net.pdf');
        card.image = 'assets/images/css.png';
        card.yearLearn = 2015;
        card.qtdStar = 4;
        this.cards.push(card);
    };
    FrontEndConhecimentoComponent.prototype.createJavaScriptKnow = function () {
        var card = new __WEBPACK_IMPORTED_MODULE_1__model__["b" /* KnowCard */]();
        card.title = 'Java Script';
        this.globalService.updateCardDescribe(card, 'js-describe1', 'js-describe2', 'js-describe3');
        card.image = 'assets/images/javascript.png';
        card.yearLearn = 2015;
        card.qtdStar = 3;
        this.cards.push(card);
    };
    FrontEndConhecimentoComponent.prototype.createAngularKnow = function () {
        var card = new __WEBPACK_IMPORTED_MODULE_1__model__["b" /* KnowCard */]();
        card.title = 'Angular';
        this.globalService.updateCardDescribe(card, 'angular-describe1', 'angular-describe2', 'angular-describe3', 'angular-describe4');
        this.globalService.updateCardCertificationLink(card, 'Angular with Spring - Algaworks.pdf');
        card.image = 'assets/images/angular.png';
        card.yearLearn = 2017;
        card.qtdStar = 3;
        this.cards.push(card);
    };
    FrontEndConhecimentoComponent.prototype.createBootstrapKnow = function () {
        var card = new __WEBPACK_IMPORTED_MODULE_1__model__["b" /* KnowCard */]();
        card.title = 'Bootstrap';
        this.globalService.updateCardDescribe(card, 'bootstrap-describe1', 'bootstrap-describe2', 'bootstrap-describe3');
        card.image = 'assets/images/bootstrap.png';
        card.yearLearn = 2015;
        card.qtdStar = 4;
        this.cards.push(card);
    };
    FrontEndConhecimentoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-front-end-conhecimento',
            template: __webpack_require__("./src/app/front-end-conhecimento/front-end-conhecimento.component.html"),
            styles: [__webpack_require__("./src/app/front-end-conhecimento/front-end-conhecimento.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__global_service__["a" /* GlobalService */]])
    ], FrontEndConhecimentoComponent);
    return FrontEndConhecimentoComponent;
}());



/***/ }),

/***/ "./src/app/global-service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__("./node_modules/@ngx-translate/core/@ngx-translate/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GlobalService = (function () {
    function GlobalService(translate) {
        this.translate = translate;
    }
    GlobalService.prototype.updateCardDescribe = function (card) {
        var _this = this;
        var infos = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            infos[_i - 1] = arguments[_i];
        }
        this.translate.onLangChange.subscribe(function (event) {
            card.describes = [];
            // tslint:disable-next-line:forin
            for (var i in infos) {
                _this.translate.get(infos[i]).subscribe(function (res) { card.describes.push(res); });
            }
        });
        this.updateInfoButtonDescribe(card);
    };
    GlobalService.prototype.updateCardCertificationLink = function (card) {
        var certification = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            certification[_i - 1] = arguments[_i];
        }
        // tslint:disable-next-line:forin
        for (var i in certification) {
            card.certificationsLink.push(certification[i]);
        }
    };
    GlobalService.prototype.updateInfoButtonDescribe = function (card) {
        var _this = this;
        this.translate.onLangChange.subscribe(function (event) {
            if (card.showInfo) {
                _this.translate.get('esconder-info').subscribe(function (res) { card.infoButtonDescribe = res; });
            }
            else {
                _this.translate.get('mostrar-info').subscribe(function (res) { card.infoButtonDescribe = res; });
            }
        });
    };
    GlobalService.prototype.moreInfo = function (card) {
        card.showInfo = !card.showInfo;
        if (card.showInfo) {
            this.setEsonconderLabel(card);
        }
        else {
            this.setMostrarLabel(card);
        }
        return card.showInfo;
    };
    GlobalService.prototype.setEsonconderLabel = function (card) {
        this.translate.get('esconder-info').subscribe(function (res) { card.infoButtonDescribe = res; });
    };
    GlobalService.prototype.setMostrarLabel = function (card) {
        this.translate.get('mostrar-info').subscribe(function (res) { card.infoButtonDescribe = res; });
    };
    GlobalService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]])
    ], GlobalService);
    return GlobalService;
}());



/***/ }),

/***/ "./src/app/machine-learning-conhecimento/machine-learning-conhecimento.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/machine-learning-conhecimento/machine-learning-conhecimento.component.html":
/***/ (function(module, exports) {

module.exports = "<app-program-conhecimento [title]=\"title\" [obj]=\"cards\"></app-program-conhecimento>\r\n"

/***/ }),

/***/ "./src/app/machine-learning-conhecimento/machine-learning-conhecimento.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MachineLearningConhecimentoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model__ = __webpack_require__("./src/app/model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global_service__ = __webpack_require__("./src/app/global-service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MachineLearningConhecimentoComponent = (function () {
    function MachineLearningConhecimentoComponent(globalService) {
        this.cards = [];
        this.title = 'Machine Learning';
        this.globalService = globalService;
    }
    MachineLearningConhecimentoComponent.prototype.ngOnInit = function () {
        this.createScikitLearnKnow();
        this.createPytorchKnow();
    };
    MachineLearningConhecimentoComponent.prototype.createScikitLearnKnow = function () {
        var card = new __WEBPACK_IMPORTED_MODULE_1__model__["b" /* KnowCard */]();
        card.title = 'Scikit Learn';
        this.globalService.updateCardDescribe(card, 'sckit-learn-info1');
        this.globalService.updateCardCertificationLink(card, 'Data Science e Machine Learning - Udemy.pdf');
        card.image = 'assets/images/scikit-learn.png';
        card.yearLearn = 2018;
        card.qtdStar = 1;
        this.cards.push(card);
    };
    MachineLearningConhecimentoComponent.prototype.createPytorchKnow = function () {
        var card = new __WEBPACK_IMPORTED_MODULE_1__model__["b" /* KnowCard */]();
        card.title = 'Pytorch';
        this.globalService.updateCardDescribe(card, 'pytorch-info1', 'pytorch-info2', 'pytorch-info3');
        card.image = 'assets/images/pytorch-logo.png';
        card.yearLearn = 2018;
        card.qtdStar = 2;
        this.cards.push(card);
    };
    MachineLearningConhecimentoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-machine-learning-conhecimento',
            template: __webpack_require__("./src/app/machine-learning-conhecimento/machine-learning-conhecimento.component.html"),
            styles: [__webpack_require__("./src/app/machine-learning-conhecimento/machine-learning-conhecimento.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__global_service__["a" /* GlobalService */]])
    ], MachineLearningConhecimentoComponent);
    return MachineLearningConhecimentoComponent;
}());



/***/ }),

/***/ "./src/app/mobile-conhecimento/mobile-conhecimento.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/mobile-conhecimento/mobile-conhecimento.component.html":
/***/ (function(module, exports) {

module.exports = "<app-program-conhecimento [title]=\"title\" [obj]=\"cards\"></app-program-conhecimento>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/mobile-conhecimento/mobile-conhecimento.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MobileConhecimentoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model__ = __webpack_require__("./src/app/model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global_service__ = __webpack_require__("./src/app/global-service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MobileConhecimentoComponent = (function () {
    function MobileConhecimentoComponent(globalService) {
        this.cards = [];
        this.title = 'Mobile';
        this.globalService = globalService;
    }
    MobileConhecimentoComponent.prototype.ngOnInit = function () {
        this.createIonicKnow();
        this.createAndroidStudioKnow();
    };
    MobileConhecimentoComponent.prototype.createIonicKnow = function () {
        var card = new __WEBPACK_IMPORTED_MODULE_1__model__["b" /* KnowCard */]();
        card.title = 'Ionic';
        this.globalService.updateCardDescribe(card, 'ionic-describe1', 'ionic-describe2', 'ionic-describe3', 'ionic-describe4', 'ionic-describe5');
        this.globalService.updateCardCertificationLink(card, 'Ionic - Udemy.pdf');
        card.image = 'assets/images/ionic.png';
        card.yearLearn = 2018;
        card.qtdStar = 3;
        this.cards.push(card);
    };
    MobileConhecimentoComponent.prototype.createAndroidStudioKnow = function () {
        var card = new __WEBPACK_IMPORTED_MODULE_1__model__["b" /* KnowCard */]();
        card.title = 'Android Studio';
        this.globalService.updateCardDescribe(card, 'android-describe1', 'android-describe2');
        card.image = 'assets/images/android.png';
        card.yearLearn = 2017;
        card.qtdStar = 1;
        this.cards.push(card);
    };
    MobileConhecimentoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-mobile-conhecimento',
            template: __webpack_require__("./src/app/mobile-conhecimento/mobile-conhecimento.component.html"),
            styles: [__webpack_require__("./src/app/mobile-conhecimento/mobile-conhecimento.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__global_service__["a" /* GlobalService */]])
    ], MobileConhecimentoComponent);
    return MobileConhecimentoComponent;
}());



/***/ }),

/***/ "./src/app/model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardSocialInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return KnowCard; });
var CardSocialInfo = (function () {
    function CardSocialInfo() {
    }
    return CardSocialInfo;
}());

var KnowCard = (function () {
    function KnowCard() {
        this.describes = [];
        this.certificationsLink = [];
    }
    return KnowCard;
}());



/***/ }),

/***/ "./src/app/others-conhecimento/others-conhecimento.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/others-conhecimento/others-conhecimento.component.html":
/***/ (function(module, exports) {

module.exports = "<app-program-conhecimento [title]=\"title\" [obj]=\"cards\"></app-program-conhecimento>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/others-conhecimento/others-conhecimento.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OthersConhecimentoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model__ = __webpack_require__("./src/app/model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__("./node_modules/@ngx-translate/core/@ngx-translate/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__global_service__ = __webpack_require__("./src/app/global-service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OthersConhecimentoComponent = (function () {
    function OthersConhecimentoComponent(globalService, translate) {
        var _this = this;
        this.cards = [];
        this.globalService = globalService;
        translate.onLangChange.subscribe(function (event) {
            translate.get('geral').subscribe(function (res) { _this.title = res; });
        });
    }
    OthersConhecimentoComponent.prototype.ngOnInit = function () {
        this.createJasperKnow();
        this.createMavenKnow();
        this.createGitKnow();
        this.createLinuxKnow();
    };
    OthersConhecimentoComponent.prototype.createGitKnow = function () {
        var card = new __WEBPACK_IMPORTED_MODULE_1__model__["b" /* KnowCard */]();
        card.title = 'Git';
        this.globalService.updateCardDescribe(card, 'git-describe1', 'git-describe2', 'git-describe3');
        card.image = 'assets/images/git.png';
        card.yearLearn = 2016;
        card.qtdStar = 4;
        this.cards.push(card);
    };
    OthersConhecimentoComponent.prototype.createLinuxKnow = function () {
        var card = new __WEBPACK_IMPORTED_MODULE_1__model__["b" /* KnowCard */]();
        card.title = 'Linux';
        this.globalService.updateCardDescribe(card, 'linux-describe1');
        this.globalService.updateCardCertificationLink(card, 'Linux - Certificado.pdf');
        card.image = 'assets/images/linux.ico';
        card.yearLearn = 2016;
        card.qtdStar = 2;
        this.cards.push(card);
    };
    OthersConhecimentoComponent.prototype.createMavenKnow = function () {
        var card = new __WEBPACK_IMPORTED_MODULE_1__model__["b" /* KnowCard */]();
        card.title = 'Maven';
        this.globalService.updateCardDescribe(card, 'maven-describe1', 'maven-describe2', 'maven-describe3');
        card.image = 'assets/images/maven.png';
        card.yearLearn = 2016;
        card.qtdStar = 4;
        this.cards.push(card);
    };
    OthersConhecimentoComponent.prototype.createJasperKnow = function () {
        var card = new __WEBPACK_IMPORTED_MODULE_1__model__["b" /* KnowCard */]();
        card.title = 'JasperSoft';
        this.globalService.updateCardDescribe(card, 'jasper-describe1', 'jasper-describe2', 'jasper-describe3');
        card.image = 'assets/images/jasper.png';
        card.yearLearn = 2016;
        card.qtdStar = 3;
        this.cards.push(card);
    };
    OthersConhecimentoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-others-conhecimento',
            template: __webpack_require__("./src/app/others-conhecimento/others-conhecimento.component.html"),
            styles: [__webpack_require__("./src/app/others-conhecimento/others-conhecimento.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__global_service__["a" /* GlobalService */], __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */]])
    ], OthersConhecimentoComponent);
    return OthersConhecimentoComponent;
}());



/***/ }),

/***/ "./src/app/program-conhecimento/program-conhecimento.component.css":
/***/ (function(module, exports) {

module.exports = "@media screen and (max-width: 800px) {\r\n  .conhecimento-title {\r\n      display: none;\r\n  }\r\n\r\n  .title-panel {\r\n    font-size: 20px;\r\n  }\r\n\r\n}\r\n\r\n@media screen and (max-width: 964px) {\r\n\r\n  .title-panel {\r\n    font-size: 22px;\r\n  }\r\n\r\n}\r\n\r\n.title-panel {\r\n  text-align:center;\r\n}\r\n"

/***/ }),

/***/ "./src/app/program-conhecimento/program-conhecimento.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-accordion>\r\n  <mat-expansion-panel (closed)=\"closedPanel(cards)\" (opened)= \"openPanel()\">\r\n    <mat-expansion-panel-header>\r\n      <mat-panel-title>\r\n        <h3 class=\"col-12 title-panel\">\r\n          <span class=\"conhecimento-title\">{{\"conhecimento-em\" | translate}}</span>\r\n          {{\"title-conhecimento\" | translate:{'title': title} }}\r\n        </h3>\r\n      </mat-panel-title>\r\n    </mat-expansion-panel-header>\r\n\r\n    <div class=\"row\" style=\"color:black\" >\r\n      <div *ngFor=\"let card of cards\" class=\"my-card\" [style.width]='widthCard'>\r\n        <mat-card style=\"background: white;\">\r\n          <mat-card-header>\r\n            <div mat-card-avatar>\r\n              <img [src]=\"card.image\" style=\"max-width:40px; max-height:40px;\">\r\n            </div>\r\n            <mat-card-title style=\"font-weight: bolder\">\r\n              <h5>{{card.title}}</h5>\r\n            </mat-card-title>\r\n            <mat-card-subtitle>\r\n              <div class=\"row\">\r\n                <div *ngFor=\"let number of [1,2,3,4,5]\">\r\n                  <img [src]=\" card.qtdStar >= number ? urlStar : urlStarEmpty\" class=\"icon-size\">\r\n                </div>\r\n              </div>\r\n            </mat-card-subtitle>\r\n          </mat-card-header>\r\n          <mat-card-content *ngIf=\"card.showInfo\">\r\n            <b>{{\"Descricao\" | translate}}</b>\r\n            <ul>\r\n              <li *ngFor=\"let describe of card.describes\">\r\n                {{describe}}\r\n              </li>\r\n            </ul>\r\n            <b>{{\"Certificados\"| translate}}</b>\r\n            <ul>\r\n                <li *ngFor=\"let certification of card.certificationsLink\">\r\n                 <a href=\"assets/certificados/{{certification}}\" target=\"_blank\"> {{certification.replace('.pdf','')}}</a>\r\n                </li>\r\n              </ul>\r\n            <img [src]=\"urlClock\" class=\"icon-size\">\r\n            <b> {{yearNow - card.yearLearn}} {{ \"anos\" | translate}} </b>\r\n          </mat-card-content>\r\n          <mat-card-actions style='text-align:right;'>\r\n            <button class=\"btn btn-primary\" (click)=\"moreInfo(card)\">{{card.infoButtonDescribe}}</button>\r\n          </mat-card-actions>\r\n        </mat-card>\r\n      </div>\r\n    </div>\r\n  </mat-expansion-panel>\r\n</mat-accordion>\r\n"

/***/ }),

/***/ "./src/app/program-conhecimento/program-conhecimento.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgramConhecimentoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__global_service__ = __webpack_require__("./src/app/global-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__("./node_modules/@ngx-translate/core/@ngx-translate/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProgramConhecimentoComponent = (function () {
    function ProgramConhecimentoComponent(globalService, translate) {
        this.urlStar = 'assets/images/gold-star.png';
        this.urlStarEmpty = 'assets/images/blank-star.png';
        this.urlClock = 'assets/images/clock.png';
        this.yearNow = (new Date()).getFullYear();
        this.widthCard = '50%';
        this.qtdOpenCard = 0;
        this.globalService = globalService;
        this.translate = translate;
    }
    ProgramConhecimentoComponent.prototype.ngOnInit = function () {
    };
    ProgramConhecimentoComponent.prototype.moreInfo = function (card) {
        var showInfo = this.globalService.moreInfo(card);
        if (showInfo) {
            this.qtdOpenCard++;
            this.widthCard = '100%';
        }
        else {
            this.qtdOpenCard--;
            if (this.qtdOpenCard === 0 && window.innerWidth > 770) {
                this.widthCard = '50%';
            }
        }
    };
    ProgramConhecimentoComponent.prototype.openPanel = function () {
        if (window.innerWidth < 770) {
            this.widthCard = '100%';
        }
    };
    ProgramConhecimentoComponent.prototype.closedPanel = function (cardsProperty) {
        var _this = this;
        this.qtdOpenCard = 0;
        this.widthCard = '50%';
        cardsProperty.forEach(function (element) {
            element.showInfo = false;
            _this.globalService.setMostrarLabel(element);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Input */])('obj'),
        __metadata("design:type", Object)
    ], ProgramConhecimentoComponent.prototype, "cards", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Input */])('title'),
        __metadata("design:type", Object)
    ], ProgramConhecimentoComponent.prototype, "title", void 0);
    ProgramConhecimentoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'app-program-conhecimento',
            template: __webpack_require__("./src/app/program-conhecimento/program-conhecimento.component.html"),
            styles: [__webpack_require__("./src/app/program-conhecimento/program-conhecimento.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__global_service__["a" /* GlobalService */], __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */]])
    ], ProgramConhecimentoComponent);
    return ProgramConhecimentoComponent;
}());



/***/ }),

/***/ "./src/app/server-conhecimento/server-conhecimento.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/server-conhecimento/server-conhecimento.component.html":
/***/ (function(module, exports) {

module.exports = "<app-program-conhecimento [title]=\"title\" [obj]=\"cards\"></app-program-conhecimento>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/server-conhecimento/server-conhecimento.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServerConhecimentoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model__ = __webpack_require__("./src/app/model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__("./node_modules/@ngx-translate/core/@ngx-translate/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__global_service__ = __webpack_require__("./src/app/global-service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ServerConhecimentoComponent = (function () {
    function ServerConhecimentoComponent(globalService, translate) {
        var _this = this;
        this.cards = [];
        this.title = 'Server';
        this.globalService = globalService;
        translate.onLangChange.subscribe(function (event) {
            translate.get('servidor').subscribe(function (res) { _this.title = res; });
        });
    }
    ServerConhecimentoComponent.prototype.ngOnInit = function () {
        this.createJbossKnow();
        this.createTomCatKnow();
    };
    ServerConhecimentoComponent.prototype.createJbossKnow = function () {
        var card = new __WEBPACK_IMPORTED_MODULE_1__model__["b" /* KnowCard */]();
        card.title = 'Jboss Wildfly';
        this.globalService.updateCardDescribe(card, 'jboss-describe1', 'jboss-describe2', 'jboss-describe3');
        card.image = 'assets/images/wildfly.png';
        card.yearLearn = 2016;
        card.qtdStar = 4;
        this.cards.push(card);
    };
    ServerConhecimentoComponent.prototype.createTomCatKnow = function () {
        var card = new __WEBPACK_IMPORTED_MODULE_1__model__["b" /* KnowCard */]();
        card.title = 'Apache Tomcat';
        this.globalService.updateCardDescribe(card, 'apache-describe1', 'apache-describe2', 'apache-describe3');
        card.image = 'assets/images/tomcat.png';
        card.yearLearn = 2016;
        card.qtdStar = 4;
        this.cards.push(card);
    };
    ServerConhecimentoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-server-conhecimento',
            template: __webpack_require__("./src/app/server-conhecimento/server-conhecimento.component.html"),
            styles: [__webpack_require__("./src/app/server-conhecimento/server-conhecimento.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__global_service__["a" /* GlobalService */], __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */]])
    ], ServerConhecimentoComponent);
    return ServerConhecimentoComponent;
}());



/***/ }),

/***/ "./src/app/social-info/social-info.component.css":
/***/ (function(module, exports) {

module.exports = ".title-name {\r\n  text-align:left;\r\n  font-weight: bold;\r\n  font-size: 30px;\r\n}\r\n\r\n.sub-title {\r\n  text-align:left;\r\n  font-size: 18px;\r\n  word-break: break-all;\r\n}\r\n\r\n.sub-title > p {\r\n  margin: 1px;\r\n}\r\n\r\n.container-social {\r\n  margin: 5px;\r\n  text-align: center;\r\n}\r\n\r\n.curriculo-info {\r\n text-align: center;\r\n font-size: 21px;\r\n margin: 5px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/social-info/social-info.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row container-social\">\r\n  <div class=\"col-sm-3\"></div>\r\n  <span class=\"title-name\">\r\n    Thiago Santos do Bomfim\r\n  </span>\r\n  <div class=\"sub-title\">\r\n    <p>\r\n      <b>{{\"Profissao\" | translate}}:</b> {{\"engenheiroSoftware\" | translate}}\r\n    </p>\r\n    <p>\r\n      <b>{{\"Idade\" | translate}}:</b> {{minhaIdade}}\r\n    </p>\r\n    <p>\r\n      <b>E-mail:</b> thiagobomfim1995@gmail.com <br>\r\n    </p>\r\n    <p>\r\n      <b>{{\"Telefone\" | translate}}:</b> +55(61) 98494-8850\r\n    </p>\r\n  </div>\r\n</div>\r\n<div class=\"row container-social\">\r\n  <div *ngFor=\"let card of cards\">\r\n    <a target=\"_blank\" href=\"{{card.url}}\" class=\"col-1\">\r\n      <img [src]=\"card.image\" style=\"max-width:40px; max-height:40px;\">\r\n    </a>\r\n  </div>\r\n</div>\r\n<div class=\"row curriculo-info \">\r\n  <div class=\"col-12\">\r\n    <a href=\"/assets/certificados/Meu_Curriculo.pdf\" target=\"_blank\" style=\"text-decoration: none;\">\r\n      <img src=\"/favicon.ico\" style=\"max-width:40px; max-height:40px;\"> Curriculum</a>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/social-info/social-info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocialInfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__global_service__ = __webpack_require__("./src/app/global-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model__ = __webpack_require__("./src/app/model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__("./node_modules/@ngx-translate/core/@ngx-translate/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SocialInfoComponent = (function () {
    function SocialInfoComponent(globalService, translate) {
        this.cards = [];
        this.globalService = globalService;
        this.translate = translate;
        translate.setDefaultLang('pt');
        translate.use('pt');
        this.calculateMinhaIdade();
        this.createCardGit();
        this.createCardGitLab();
        this.createCardLikendin();
        this.createCardKaggle();
        this.createCardStackOverFlow();
    }
    SocialInfoComponent.prototype.calculateMinhaIdade = function () {
        var anoNascimento = new Date('1995-08-04T00:00:00');
        var dataAtual = new Date();
        this.minhaIdade = dataAtual.getFullYear() - anoNascimento.getFullYear();
        if (dataAtual.getUTCMonth() < anoNascimento.getUTCMonth()
            || (dataAtual.getUTCMonth() === anoNascimento.getUTCMonth() && dataAtual.getUTCDate() < anoNascimento.getUTCDate())) {
            this.minhaIdade--;
        }
    };
    SocialInfoComponent.prototype.ngOnInit = function () {
    };
    SocialInfoComponent.prototype.createCardGit = function () {
        var card = new __WEBPACK_IMPORTED_MODULE_2__model__["a" /* CardSocialInfo */]();
        card.image = 'assets/images/GitHub-Mark-32px.png';
        card.url = 'https://github.com/ThiagoBfim';
        this.cards.push(card);
    };
    SocialInfoComponent.prototype.createCardLikendin = function () {
        var card = new __WEBPACK_IMPORTED_MODULE_2__model__["a" /* CardSocialInfo */]();
        card.image = 'assets/images/icon-linkedin.png';
        card.url = 'https://www.linkedin.com/in/thiago-bomfim-37b198a1/';
        this.cards.push(card);
    };
    SocialInfoComponent.prototype.createCardStackOverFlow = function () {
        var card = new __WEBPACK_IMPORTED_MODULE_2__model__["a" /* CardSocialInfo */]();
        card.image = 'assets/images/stackoverflow-icon.png';
        card.url = 'https://stackoverflow.com/users/8377722/thiago-bomfim';
        this.cards.push(card);
    };
    SocialInfoComponent.prototype.createCardGitLab = function () {
        var card = new __WEBPACK_IMPORTED_MODULE_2__model__["a" /* CardSocialInfo */]();
        card.image = 'assets/images/gitlab.png';
        card.url = 'https://gitlab.com/ThiagoBfim';
        this.cards.push(card);
    };
    SocialInfoComponent.prototype.createCardKaggle = function () {
        var card = new __WEBPACK_IMPORTED_MODULE_2__model__["a" /* CardSocialInfo */]();
        card.image = 'assets/images/kaggle.png';
        card.url = 'https://www.kaggle.com/thiagobfim';
        this.cards.push(card);
    };
    SocialInfoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'app-social-info',
            template: __webpack_require__("./src/app/social-info/social-info.component.html"),
            styles: [__webpack_require__("./src/app/social-info/social-info.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__global_service__["a" /* GlobalService */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */]])
    ], SocialInfoComponent);
    return SocialInfoComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map