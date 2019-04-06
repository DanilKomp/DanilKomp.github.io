(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\ndisplay: block;\n}\n\n.slidebar {\n    height: 100vh;\n    width: 300px;\n    box-shadow: 0 0 10px rgba(0,0,0,0.5);\n    padding: 10px;\n    padding-top: 0;\n    background: #fff;\n    position: absolute;    \n    z-index: 25;\n\n}\n\n.btn {\n    cursor: pointer;\n    border: none;\n    font-size: 15px;\n}\n\n.hamburger_icon {\n    height: 60px;\n    width: 60px;\n    margin-top: 4px;\n    margin-left: 4px;\n    background: transparent;\n}\n\n.welcome_user{\n    display: inline-block;\n    margin-top: 20px;\n    font-size: 25px;\n}\n\n.burger__img{\n    height: 60px;\n    width: 60px;\n}\n\n/* Slide bar */\n\n.user_icon{\n    width: 75px;\n    height: 75px;\n    border-radius: 50%;\n    float: right;\n    display: inline-block;\n}\n\n.user_displayName{ \n    display: inline-block;\n    margin-top: 9px;\n}\n\n.user_email { \n    display: inline-block; \n    font-size: 12px;\n}\n\n.login_btn{\n    border: none;\n    border-radius: 20px;\n    background: blue;\n    color: #fff;\n    font-size: 15px;\n    padding: 5px;\n    cursor: pointer;\n}\n\n.guest_btn{\n    width: 100%;\n    height: 50px;\n}\n\n/* Header */\n\n.main_page_header{\n    height: 68px;\n    font-size: 30px;\n    color: #262626;\n    display: inline-block;\n    width: 100%;\n    box-shadow: 0 0px 5px rgba(0,0,0,0.5);\n    background: #fff;\n}\n\n/* Slider */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxjQUFjO0FBQ2Q7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLG9DQUFvQztJQUNwQyxhQUFhO0lBQ2IsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsV0FBVzs7QUFFZjs7QUFFQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQix1QkFBdUI7QUFDM0I7O0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7O0FBQ0E7SUFDSSxZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVFLGNBQWM7O0FBRWhCO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixlQUFlO0FBQ25COztBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsZUFBZTtJQUNmLFlBQVk7SUFDWixlQUFlO0FBQ25COztBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBQ0EsV0FBVzs7QUFFWDtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2YsY0FBYztJQUNkLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gscUNBQXFDO0lBQ3JDLGdCQUFnQjtBQUNwQjs7QUFFQSxXQUFXIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG5kaXNwbGF5OiBibG9jaztcbn1cblxuLnNsaWRlYmFyIHtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsMCwwLDAuNSk7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBwYWRkaW5nLXRvcDogMDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgICAgXG4gICAgei1pbmRleDogMjU7XG5cbn1cblxuLmJ0biB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBmb250LXNpemU6IDE1cHg7XG59XG5cbi5oYW1idXJnZXJfaWNvbiB7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIHdpZHRoOiA2MHB4O1xuICAgIG1hcmdpbi10b3A6IDRweDtcbiAgICBtYXJnaW4tbGVmdDogNHB4O1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuLndlbGNvbWVfdXNlcntcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBmb250LXNpemU6IDI1cHg7XG59XG4uYnVyZ2VyX19pbWd7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIHdpZHRoOiA2MHB4O1xufVxuICBcbiAgLyogU2xpZGUgYmFyICovXG5cbi51c2VyX2ljb257XG4gICAgd2lkdGg6IDc1cHg7XG4gICAgaGVpZ2h0OiA3NXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4udXNlcl9kaXNwbGF5TmFtZXsgXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbi10b3A6IDlweDtcbn1cbi51c2VyX2VtYWlsIHsgXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyBcbiAgICBmb250LXNpemU6IDEycHg7XG59XG5cbi5sb2dpbl9idG57XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgYmFja2dyb3VuZDogYmx1ZTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5ndWVzdF9idG57XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA1MHB4O1xufVxuLyogSGVhZGVyICovXG5cbi5tYWluX3BhZ2VfaGVhZGVye1xuICAgIGhlaWdodDogNjhweDtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgY29sb3I6ICMyNjI2MjY7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJveC1zaGFkb3c6IDAgMHB4IDVweCByZ2JhKDAsMCwwLDAuNSk7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbn1cblxuLyogU2xpZGVyICovXG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<!-- Test -->\n<div [@openClose]=\"isOpen ? 'open' : 'closed'\" class=\"slidebar\">\n\n  <div *ngIf=\"auth.user | async; then authenticated else guest\">\n  </div>\n  \n  <ng-template #guest>\n    <button (click)=\"toggle()\" class=\"hamburger_icon btn\">\n      <img class=\"burger__img\" src=\"../assets/img/burgerIcon.png\" alt=\"\">\n    </button>\n\n    <h3 class=\"welcome_user\">Howdy, GUEST</h3>\n    \n    <button class=\"login_btn guest_btn\" (click)=\"auth.googleLogin()\">\n        <p class=\"pls_login\">Login to get started...</p>\n    </button>\n  </ng-template>\n  \n  \n  <ng-template #authenticated>\n    <button (click)=\"toggle()\" class=\"hamburger_icon btn\">\n      <img class=\"burger__img\" src=\"../assets/img/burgerIcon.png\" alt=\"\">\n    </button> \n    <h3 class=\"welcome_user\">Welcome back!</h3>\n    <div *ngIf=\"auth.user | async as user\">\n      <img class=\"user_icon\" [src]=\"user.photoURL\">\n      <h3 class=\"user_displayName\">{{ user.displayName }}</h3>\n      <h3 class=\"user_email\">{{ user.email }}</h3>\n      <button class=\"login_btn\" (click)=\"auth.signOut()\">Logout</button>\n    </div>\n    </ng-template>\n</div>\n\n<!-- Header -->\n<header class=\"main_page_header\">\n  <button (click)=\"toggle()\" class=\"hamburger_icon btn\">\n    <img class=\"burger__img\" src=\"../assets/img/burgerIcon.png\" alt=\"\">\n  </button>\n</header>\n\n<div *ngIf=\"auth.user | async; then au else gue\">\n</div>\n\n\n<ng-template #au>\n  <app-weather-cards-menu></app-weather-cards-menu>\n</ng-template>  "

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");





var AppComponent = /** @class */ (function () {
    function AppComponent(auth, http) {
        this.auth = auth;
        this.http = http;
        this.title = 'weatherApp';
        this.isOpen = true; /* Opened slide-bar checker */
    }
    AppComponent.prototype.toggle = function () {
        this.isOpen = !this.isOpen;
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('openClose', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                        // Opened
                        transform: 'translate(-100%)'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('closed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                        // Closed
                        transform: 'translate(0)'
                    })),
                    // Transition from open to close...
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('open => closed', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('0.3s')
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('closed => open', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('0.3s')
                    ]),
                ]),
            ],
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _weather_cards_menu_weather_cards_menu_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./weather-cards-menu/weather-cards-menu.component */ "./src/app/weather-cards-menu/weather-cards-menu.component.ts");
/* harmony import */ var ng2_carouselamos__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng2-carouselamos */ "./node_modules/ng2-carouselamos/dist/index.js");
/* harmony import */ var _services_item_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/item.service */ "./src/app/services/item.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _weather_cards_menu_weather_cards_menu_component__WEBPACK_IMPORTED_MODULE_12__["WeatherCardsMenuComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestoreModule"],
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuthModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatCheckboxModule"],
                ng2_carouselamos__WEBPACK_IMPORTED_MODULE_13__["Ng2CarouselamosModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_8__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].firebase)
            ],
            providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], _services_item_service__WEBPACK_IMPORTED_MODULE_14__["ItemService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");








var AuthService = /** @class */ (function () {
    function AuthService(afAuth, afs, router) {
        var _this = this;
        this.afAuth = afAuth;
        this.afs = afs;
        this.router = router;
        //// Get auth data, then get firestore user document || null
        this.user = this.afAuth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(function (user) {
            if (user) {
                return _this.afs.doc("users/" + user.uid).valueChanges();
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(null);
            }
        }));
    }
    AuthService.prototype.googleLogin = function () {
        var provider = new firebase_app__WEBPACK_IMPORTED_MODULE_3__["auth"].GoogleAuthProvider();
        return this.oAuthLogin(provider);
    };
    AuthService.prototype.oAuthLogin = function (provider) {
        var _this = this;
        return this.afAuth.auth.signInWithPopup(provider)
            .then(function (credential) {
            _this.updateUserData(credential.user);
        });
    };
    AuthService.prototype.updateUserData = function (user) {
        // Sets user data to firestore on login
        var userRef = this.afs.doc("users/" + user.uid);
        var data = {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
        };
        return userRef.set(data, { merge: true });
    };
    AuthService.prototype.signOut = function () {
        var _this = this;
        this.afAuth.auth.signOut().then(function () {
            _this.router.navigate(['/']);
        });
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/item.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/item.service.ts ***!
  \******************************************/
/*! exports provided: City, ItemService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "City", function() { return City; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemService", function() { return ItemService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var City = /** @class */ (function () {
    function City() {
    }
    return City;
}());

var ItemService = /** @class */ (function () {
    function ItemService(afs) {
        // this.items = this.afs.collection('users').doc(this.firebase.auth().currentUser.uid).collection('items').valueChanges();
        this.afs = afs;
        this.firebase = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
        this.items = this.afs.collection('users').doc(this.firebase.auth().currentUser.uid).collection('items').snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (changes) {
            return changes.map(function (a) {
                var data = a.payload.doc.data();
                data.id = a.payload.doc.id;
                return data;
            });
        }));
    }
    ItemService.prototype.getItems = function () {
        return this.items;
    };
    ItemService.prototype.deleteItem = function (city) {
        this.itemDoc = this.afs.doc("users/" + this.firebase.auth().currentUser.uid + "/items/" + city.fireID);
        console.log(city.fireID);
        this.itemDoc.delete();
    };
    ItemService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], ItemService);
    return ItemService;
}());



/***/ }),

/***/ "./src/app/weather-cards-menu/weather-cards-menu.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/weather-cards-menu/weather-cards-menu.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\n    width: 100%;\n    margin: 5em auto;\n    padding: 0;\n    background: #ffffff;\n}\n\n#prev,\n#next{\n    width: 50px;\n    height: 50px;\n}\n\n.items{\n    min-width: 300px;\n    min-height: 350px;\n    padding: 10px;\n    border-radius: 15px;\n    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.3);\n    background: #fff;\n    margin: 5px 10px 5px 10px;\n}\n\n/* add city card */\n\n.addCityBtn{\n    max-height: 150px;\n    max-width: 150px;\n    text-align: center;\n}\n\n.plusImg{\n    max-height: 100px;\n    max-width: 100px;\n}\n\n/* Weather card */\n\n.containerOfWeatherCards {\n    width: 100%;\n    height: 350px;\n    margin: 5em auto;\n    padding: 0;\n    background: #ffffff;\n    overflow-x: scroll;\n    /* display: flex; */\n    padding-right: 15px;\n}\n\n.weatherCard {\n    height: 300px;\n    width: 150px;\n    border-radius: 10px;\n    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.3);\n    display: inline-block;  \n    margin: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2VhdGhlci1jYXJkcy1tZW51L3dlYXRoZXItY2FyZHMtbWVudS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsbUJBQW1CO0FBQ3ZCOztBQUVBOztJQUVJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHdDQUF3QztJQUN4QyxnQkFBZ0I7SUFDaEIseUJBQXlCO0FBQzdCOztBQUVBLGtCQUFrQjs7QUFFbEI7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBRUEsaUJBQWlCOztBQUVqQjtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQix3Q0FBd0M7SUFDeEMscUJBQXFCO0lBQ3JCLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC93ZWF0aGVyLWNhcmRzLW1lbnUvd2VhdGhlci1jYXJkcy1tZW51LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogNWVtIGF1dG87XG4gICAgcGFkZGluZzogMDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xufVxuXG4jcHJldixcbiNuZXh0e1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbn1cblxuLml0ZW1ze1xuICAgIG1pbi13aWR0aDogMzAwcHg7XG4gICAgbWluLWhlaWdodDogMzUwcHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIGJveC1zaGFkb3c6IDAgMCAzcHggMCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBtYXJnaW46IDVweCAxMHB4IDVweCAxMHB4O1xufVxuXG4vKiBhZGQgY2l0eSBjYXJkICovXG5cbi5hZGRDaXR5QnRue1xuICAgIG1heC1oZWlnaHQ6IDE1MHB4O1xuICAgIG1heC13aWR0aDogMTUwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucGx1c0ltZ3tcbiAgICBtYXgtaGVpZ2h0OiAxMDBweDtcbiAgICBtYXgtd2lkdGg6IDEwMHB4O1xufVxuXG4vKiBXZWF0aGVyIGNhcmQgKi9cblxuLmNvbnRhaW5lck9mV2VhdGhlckNhcmRzIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDM1MHB4O1xuICAgIG1hcmdpbjogNWVtIGF1dG87XG4gICAgcGFkZGluZzogMDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcbiAgICAvKiBkaXNwbGF5OiBmbGV4OyAqL1xuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG59XG5cbi53ZWF0aGVyQ2FyZCB7XG4gICAgaGVpZ2h0OiAzMDBweDtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBib3gtc2hhZG93OiAwIDAgM3B4IDAgcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgIFxuICAgIG1hcmdpbjogMTVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/weather-cards-menu/weather-cards-menu.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/weather-cards-menu/weather-cards-menu.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"container\">\n  <div ng2-carouselamos class=\"slides-wrapper\"\n    [items]=\"items\"\n    [width]=\"960\"\n    [$prev]=\"prev\"\n    [$next]=\"next\"\n    [$item]=\"item\">\n\n  </div>\n\n  <ng-template #prev>\n    <img src=\"../../assets/img/left.png\" alt=\"prev\" id=\"prev\">\n  </ng-template>\n  \n  <ng-template #next>\n    <img src=\"../../assets/img/right.png\" alt=\"next\" id=\"next\">\n  </ng-template>\n\n  <ng-template #item let-item let-i=\"index\">\n    \n    <div class=\"items\" id=\"id\" *ngIf=\"auth.user | async as user\">\n      <button class=\"deleteCity\" (click)=\"getMarkers()\">Delete</button>\n      <span>City name: </span> {{ testArrayOfItems[i].name }} {{ items[i].cityName }} {{ items[i].id }}<br>\n      <span>Temp: </span> {{ testArrayOfItems[i].main.temp }} <br>\n      <span>Humidity: </span> {{ testArrayOfItems[i].main.humidity }} <br>\n    </div>\n\n  </ng-template> -->\n\n  <div class=\"containerOfWeatherCards\">\n    <div class=\"weatherCard\" (dblclick)=\"deleteItem($event, item)\" *ngFor='let item of testArrayOfItems'>\n      <!-- ng-repeat=\"testArrayOfItems | orderBy: 'name'\"  -->\n      <span>City name: </span> {{ item.name }} <br>\n      <span>Temp: </span> {{ item.main.temp }} <br>\n      <span>Humidity: </span> {{ item.main.humidity }} <br>\n    </div>\n  </div>\n\n  <div>\n    <input type=\"text\" class=\"addCityInput\" [(ngModel)]=\"cityName\">\n    <button (click)=\"AddACollectionOfCities()\">Add city</button>\n  </div>\n\n\n  <!-- <div class=\"items addCityCard\">\n    <strong>New city</strong>\n    <button class=\"btn addCityBtn\">\n      <img class=\"plusImg\" src=\"../../assets/img/plus.png\" alt=\"Add city\">\n    </button>\n  </div> -->"

/***/ }),

/***/ "./src/app/weather-cards-menu/weather-cards-menu.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/weather-cards-menu/weather-cards-menu.component.ts ***!
  \********************************************************************/
/*! exports provided: WeatherCardsMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherCardsMenuComponent", function() { return WeatherCardsMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_item_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/item.service */ "./src/app/services/item.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");







var WeatherCardsMenuComponent = /** @class */ (function () {
    function WeatherCardsMenuComponent(auth, itemService, http, afAuth, afs) {
        var _this = this;
        this.auth = auth;
        this.itemService = itemService;
        this.http = http;
        this.afAuth = afAuth;
        this.afs = afs;
        this.items = [];
        this.apiKey = '5cc57e061cd35f51f5fd9d6564258e4d';
        this.url = 'http://api.openweathermap.org/data/2.5/weather?APPID=';
        this.firebase = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
        this.testArrayOfItems = [];
        this.currentUID = this.firebase.auth().currentUser.uid;
        //// Get items array from firebase
        this.itemService.getItems().subscribe(function (items) {
            _this.items = items;
        });
    }
    WeatherCardsMenuComponent.prototype.ngOnInit = function () {
        console.log("ngOnInit works!");
        console.log(this.currentUID);
        this.getItemsAndWeather();
    };
    WeatherCardsMenuComponent.prototype.ngOnChanges = function () {
        console.log("ngOnChanges works!");
    };
    WeatherCardsMenuComponent.prototype.getItemsAndWeather = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.itemService.getItems().subscribe(function (items) {
                    console.log(items);
                    items.forEach(function (element) {
                        _this.http.get(_this.url + _this.apiKey + '&q=' + element.cityName).subscribe(function (response) {
                            response['fireID'] = element.id;
                            _this.testArrayOfItems.push(response);
                            console.log(_this.testArrayOfItems);
                        });
                    });
                    // for(let i = 0; i <= items.length; i++ ) {
                    //       this.http.get(this.url + this.apiKey + '&q=' + items[i].cityName).subscribe(
                    //         (response) => {
                    //           this.testArrayOfItems.push(response);
                    //           console.log(this.testArrayOfItems);
                    //         }
                    //       );
                    // }
                });
                return [2 /*return*/];
            });
        });
    };
    WeatherCardsMenuComponent.prototype.AddACollectionOfCities = function () {
        this.afs.collection("users").doc(this.currentUID).collection("items").add({
            cityName: this.cityName,
        });
        this.testArrayOfItems = [];
    };
    WeatherCardsMenuComponent.prototype.deleteItem = function (event, city) {
        this.itemService.deleteItem(city);
        this.testArrayOfItems = [];
    };
    WeatherCardsMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-weather-cards-menu',
            template: __webpack_require__(/*! ./weather-cards-menu.component.html */ "./src/app/weather-cards-menu/weather-cards-menu.component.html"),
            styles: [__webpack_require__(/*! ./weather-cards-menu.component.css */ "./src/app/weather-cards-menu/weather-cards-menu.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _services_item_service__WEBPACK_IMPORTED_MODULE_3__["ItemService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"]])
    ], WeatherCardsMenuComponent);
    return WeatherCardsMenuComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyAzzc_v3QnATx6ZKszevBK6-3RK8MZR6o8",
        authDomain: "weatherapp-65656.firebaseapp.com",
        databaseURL: "https://weatherapp-65656.firebaseio.com",
        projectId: "weatherapp-65656",
        storageBucket: "weatherapp-65656.appspot.com",
        messagingSenderId: "307050423231"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Real weather app\weatherApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map