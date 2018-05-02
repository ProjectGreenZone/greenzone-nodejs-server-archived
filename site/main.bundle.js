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

module.exports = "#app_map{\n\theight: 100%;\n}\n\n#app_controls{\n}\n\n#main_row{\n\theight: 100%;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"main_row\" class=\"row\">\n  <!-- <div class=\"col-sm-3\">\n    <app-controls id=\"app_controler\"></app-controls>\n  </div> -->\n  <div class=\"col-lg-12\">\n    <app-map id=\"app_map\"></app-map>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2__ = __webpack_require__("./node_modules/angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__map_map_component__ = __webpack_require__("./src/app/map/map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__controls_controls_component__ = __webpack_require__("./src/app/controls/controls.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_service__ = __webpack_require__("./src/app/home.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__users_service__ = __webpack_require__("./src/app/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__contorl_user_contorl_user_component__ = __webpack_require__("./src/app/contorl-user/contorl-user.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__map_map_component__["a" /* MapComponent */],
                __WEBPACK_IMPORTED_MODULE_7__controls_controls_component__["a" /* ControlsComponent */],
                __WEBPACK_IMPORTED_MODULE_10__contorl_user_contorl_user_component__["a" /* ContorlUserComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].firebase),
                __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["b" /* AngularFireDatabaseModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__home_service__["a" /* HomeService */],
                __WEBPACK_IMPORTED_MODULE_9__users_service__["a" /* UsersService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contorl-user/contorl-user.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/contorl-user/contorl-user.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\n\t{{user}}\n  <h2>{{ user.name | uppercase }}</h2>\n\t\n\n</div>"

/***/ }),

/***/ "./src/app/contorl-user/contorl-user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContorlUserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContorlUserComponent = /** @class */ (function () {
    function ContorlUserComponent() {
    }
    ContorlUserComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object)
    ], ContorlUserComponent.prototype, "user", void 0);
    ContorlUserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-contorl-user',
            template: __webpack_require__("./src/app/contorl-user/contorl-user.component.html"),
            styles: [__webpack_require__("./src/app/contorl-user/contorl-user.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContorlUserComponent);
    return ContorlUserComponent;
}());



/***/ }),

/***/ "./src/app/controls/controls.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/controls/controls.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"form-group\">\n\t<label>Alert Radius (m)</label>\n\t<input type=\"number\" min=0 class=\"form-control\" placeholder=\"2000\">\n</div>\n<div class=\"form-group\">\n\t<label>Show (history)</label>\n\t<input type=\"number\" min=1 class=\"form-control\" placeholder=\"2000\">\n</div>\n<div class=\"form-group\">\n\t<label>Alert Radius (m)</label>\n\t<input type=\"number\" min=0 class=\"form-control\" placeholder=\"2000\">\n</div>\n<div class=\"form-group\">\n <label>Select user</label>\n    <select class=\"form-control\" placeholder=\"Select user\" [(value)]=\"selectedUser\">\n    \t<option *ngFor=\"let user of all_users\" [value]=\"user\">\n\t    {{user}}\n\t  </option>\n    </select>\n</div>\n\n<app-contorl-user [user]=\"selectedUser\"></app-contorl-user>"

/***/ }),

/***/ "./src/app/controls/controls.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ControlsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__users_service__ = __webpack_require__("./src/app/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_service__ = __webpack_require__("./src/app/home.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ControlsComponent = /** @class */ (function () {
    // all_users:any;
    // selectedUser:any;
    function ControlsComponent(homeService, usersService) {
        this.homeService = homeService;
        this.usersService = usersService;
        // this.homeService.getHome().subscribe(function(home) {
        // 	this.all_users = home.all_users
        // }.bind(this))
    }
    ControlsComponent.prototype.ngOnInit = function () {
        //this.monitor()
    };
    ControlsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-controls',
            template: __webpack_require__("./src/app/controls/controls.component.html"),
            styles: [__webpack_require__("./src/app/controls/controls.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__home_service__["a" /* HomeService */], __WEBPACK_IMPORTED_MODULE_1__users_service__["a" /* UsersService */]])
    ], ControlsComponent);
    return ControlsComponent;
}());



/***/ }),

/***/ "./src/app/home.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeService = /** @class */ (function () {
    function HomeService(db) {
        this.db = db;
    }
    HomeService.prototype.getHome = function () {
        return this.db.object('/home').valueChanges();
    };
    HomeService.prototype.updateHome = function (home) {
        this.db.object('/home').set(home);
    };
    HomeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], HomeService);
    return HomeService;
}());



/***/ }),

/***/ "./src/app/map/map.component.css":
/***/ (function(module, exports) {

module.exports = "\n#map {\n        height: 100%;\n      }\n      /* Optional: Makes the sample page fill the window. */\n      "

/***/ }),

/***/ "./src/app/map/map.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"map\" #map></div>"

/***/ }),

/***/ "./src/app/map/map.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__users_service__ = __webpack_require__("./src/app/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_service__ = __webpack_require__("./src/app/home.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MapComponent = /** @class */ (function () {
    function MapComponent(homeService, usersService) {
        this.homeService = homeService;
        this.usersService = usersService;
    }
    MapComponent.prototype.ngOnInit = function () {
        var script = document.createElement('script');
        document.body.appendChild(script);
        script.onload = this.plotMap.bind(this);
        script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBJvgGeSDM8Gazqa96BTe13PQMYKmTYyE8';
    };
    MapComponent.prototype.plotMap = function () {
        this.homeService.getHome().subscribe(function (home) {
            this.home = home;
            this.usersService.getUsers().subscribe(function (users) {
                var mapProp = {
                    center: home.location,
                    zoom: 15,
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                };
                this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
                var home_marker = new google.maps.Marker({
                    position: home.location,
                    map: this.map,
                    draggable: true,
                    label: "Home"
                });
                home_marker.addListener('dragend', function (e) {
                    console.log("home lat :" + e.latLng.lat());
                    console.log("home lng :" + e.latLng.lng());
                    var new_home = home;
                    new_home.location = { lat: e.latLng.lat(), lng: e.latLng.lng() };
                    this.homeService.updateHome(new_home);
                }.bind(this));
                var home_circle = new google.maps.Circle({
                    strokeColor: home.color,
                    strokeOpacity: 0.8,
                    strokeWeight: 2,
                    fillColor: home.color,
                    fillOpacity: 0.35,
                    map: this.map,
                    center: home.location,
                    radius: home.alert_radius
                });
                for (var j = 0; j < this.home.monitor_users.length; j++) {
                    users[this.home.monitor_users[j]].data.sort(function (data1, data2) {
                        return parseInt(data2['time_sec']) - parseInt(data1['time_sec']);
                    });
                    for (var i = 0; i < users[this.home.monitor_users[j]].data.length && i < parseInt(this.home.show); i++) {
                        if (users[this.home.monitor_users[j]].data[i] != null) {
                            if (users[this.home.monitor_users[j]].data[i]['location_time_net'] !== "%LOCNTMS" && parseInt(users[this.home.monitor_users[j]].data[i]['location_time']) < parseInt(users[this.home.monitor_users[j]].data[i]['location_time_net'])) {
                                var location = users[this.home.monitor_users[j]].data[i]['location_net'].split(",");
                                var accuracy = parseInt(users[this.home.monitor_users[j]].data[i]['location_accuracy_net']);
                                var loc_time = parseInt(users[this.home.monitor_users[j]].data[i]['location_time_net']);
                            }
                            else {
                                var location = users[this.home.monitor_users[j]].data[i]['location'].split(",");
                                var accuracy = parseInt(users[this.home.monitor_users[j]].data[i]['location_accuracy']);
                                var loc_time = parseInt(users[this.home.monitor_users[j]].data[i]['location_time']);
                            }
                            var time_sec = parseInt(users[this.home.monitor_users[j]].data[i]['time_sec']);
                            var loc_time = parseInt(users[this.home.monitor_users[j]].data[i]['location_time']);
                            var time = users[this.home.monitor_users[j]].data[i]['date'].concat(" ", users[this.home.monitor_users[j]].data[i]['time'], "(".concat("", users[this.home.monitor_users[j]].data[i]['location_speed']).concat("", ")"));
                            var position = { lat: parseFloat(location[0]), lng: parseFloat(location[1]) };
                            if (i == 0) {
                                console.log(i);
                                var marker = new google.maps.Marker({
                                    position: position,
                                    map: this.map,
                                    label: this.home.monitor_users[j].concat(" ", time),
                                    icon: {
                                        path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
                                        scale: 10,
                                        strokeWeight: 2,
                                        strokeColor: '#000000',
                                        fillColor: users[this.home.monitor_users[j]].color
                                    },
                                    title: this.home.monitor_users[j].concat(" ", time)
                                });
                            }
                            else {
                                var marker = new google.maps.Marker({
                                    position: position,
                                    map: this.map,
                                    label: time,
                                    icon: {
                                        path: google.maps.SymbolPath.CIRCLE,
                                        scale: 15,
                                        strokeWeight: 1,
                                        strokeColor: '#ffffff',
                                        fillColor: users[this.home.monitor_users[j]].color
                                    },
                                    title: this.home.monitor_users[j].concat(" ", time)
                                });
                            }
                            var circle = new google.maps.Circle({
                                strokeColor: users[this.home.monitor_users[j]].color,
                                strokeOpacity: 0.8,
                                strokeWeight: 2,
                                fillColor: users[this.home.monitor_users[j]].color,
                                fillOpacity: 0.35,
                                map: this.map,
                                center: position,
                                radius: accuracy
                            });
                        }
                    }
                }
            }.bind(this));
        }.bind(this));
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* ViewChild */])('map'),
        __metadata("design:type", Object)
    ], MapComponent.prototype, "gmapElement", void 0);
    MapComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-map',
            template: __webpack_require__("./src/app/map/map.component.html"),
            styles: [__webpack_require__("./src/app/map/map.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__home_service__["a" /* HomeService */], __WEBPACK_IMPORTED_MODULE_1__users_service__["a" /* UsersService */]])
    ], MapComponent);
    return MapComponent;
}());



/***/ }),

/***/ "./src/app/users.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UsersService = /** @class */ (function () {
    function UsersService(db) {
        this.db = db;
    }
    UsersService.prototype.getUsers = function () {
        return this.db.object('/users').valueChanges();
    };
    UsersService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], UsersService);
    return UsersService;
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
    production: false,
    firebase: {
        apiKey: "AIzaSyBRqn3owljWlfxVz7vYBUrom2CemlSwaN0",
        authDomain: "locationtracker-d681c.firebaseapp.com",
        databaseURL: "https://locationtracker-d681c.firebaseio.com",
        projectId: "locationtracker-d681c",
        storageBucket: "locationtracker-d681c.appspot.com",
        messagingSenderId: "615319515730"
    }
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* enableProdMode */])();
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