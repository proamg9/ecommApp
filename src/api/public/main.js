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
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");





var routes = [
    { path: '', pathMatch: 'full', redirectTo: '/login' },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'main', component: _main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"] },
];
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class= \"container\">\n  <flash-messages></flash-messages>\n<router-outlet></router-outlet>\n</div>\n"

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


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _service_authentication_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./service/authentication.service */ "./src/app/service/authentication.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_9__);










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                _main_main_component__WEBPACK_IMPORTED_MODULE_7__["MainComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                angular2_flash_messages__WEBPACK_IMPORTED_MODULE_9__["FlashMessagesModule"].forRoot()
            ],
            providers: [_service_authentication_service__WEBPACK_IMPORTED_MODULE_8__["AuthenticationService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n    <div class=\"login-box p-5\">\t\t\t\n        <div class=\"row\">\n            <div class=\"col-12 text-center\">\n                <h3>Login</h3>\n            </div>\n        </div>\n        <form>\n            <div class=\"form-group\">\n                <label>Email</label>\n                <input type=\"email\" name=\"email\" id=\"email\" class=\"form-control\" placeholder=\"your@email.com\">\n            </div>\n            <div class=\"form-group\">\n                <label>Password</label>\n                <input type=\"password\" class=\"form-control\" id=\"pass\" placeholder=\"**********\">\n            </div>\n            <div class=\"row\">\n                <div class=\"col-12 text-center\">\n                    <a class=\"btn btn-primary\" (click)=\"login()\">Login</a>\n                </div>\n            </div>\n        </form>\n    </div>\n\n\t"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/authentication.service */ "./src/app/service/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);





var LoginComponent = /** @class */ (function () {
    function LoginComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        this.user = {};
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.user.email = jquery__WEBPACK_IMPORTED_MODULE_4__('#email').val();
        this.user.password = jquery__WEBPACK_IMPORTED_MODULE_4__('#pass').val();
        console.log(jquery__WEBPACK_IMPORTED_MODULE_4__('#email').val());
        this.auth.login(this.user).subscribe(function (res) {
            console.log(res);
            _this.router.navigateByUrl('/main');
        }, function (err) {
            console.error(err);
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/main/main.component.css":
/*!*****************************************!*\
  !*** ./src/app/main/main.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vbWFpbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/main/main.component.html":
/*!******************************************!*\
  !*** ./src/app/main/main.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-12 text-center mt-5\">\n            <h3>DashBoard</h3>\n            <h6 id=\"user\" style='margin: 20px;color: brown;'> </h6>\n        </div>\n    </div>\n\n    <div class=\"row pt-5\">\n        <div class=\"col-6 category-div\">\n            <div class=\"row\">\n                <div class=\"col-md-4 mb-1\" >\n                    <button class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#addCategories\">Add Category</button>\n                </div>\n                <div class=\"col-md-4  mb-1\">\n                        <button class=\"btn btn-success\" data-toggle=\"modal\" (click)=\"editmodal()\">Edit Category</button>\n                </div>\n\n                <div class=\"col-md-4  mb-1\">\n                    <button class=\"btn btn-danger\" data-toggle=\"modal\" id=\"btn_delCategories\"\n                        (click)=\"delcategory()\">Remove</button>\n                </div>\n            </div>\n            <div class=\"row\">\n                    <p></p>\n            </div>\n            <div class=\"row\">\n                <div id=\"category-tree\" class=\"col-10 mb-2\" ></div>\n            </div>\n        </div>\n\n        <div class=\"col-6\">\n            <div class=\"row pl-5\">\n                <div class=\"row col-12\">\n                   <div class=\"col-md-6 mb-2\" >\n                        <button class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#addItems\">Add Products</button>\n                   </div>\n\n                    <div class=\"col-md-6 mb-2 \">\n                        <button class=\"btn btn-danger\" style=\"float:right\" data-toggle=\"modal\" id=\"btn_delProduct\"\n                                (click)=\"delprodudct()\">Del Items</button>\n                    </div>\n                </div>\n                <div class=\"row col-12\">\n                        <p></p>\n                </div>\n                <div class=\"col-12\">\n                    <ul class=\"list-group item-list\" id=\"product_list\" >\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n<div class=\"modal fade\" id=\"addCategories\" tabindex=\"-1\" role=\"dialog\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h3> Add Category</h3>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"form-group\">\n                    <select id=\"parent_id\" class=\"form-control\" placeholder=\"Parent_id\">\n                    </select>\n                </div>\n                <div class=\"form-group\">\n                    <input type=\"text\" id=\"category_name\" class=\"form-control\" placeholder=\"Category Name\">\n                </div>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-primary\" id=\"add_category\" (click)=\"addcategory()\">Add</button>\n                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"modal fade\"  id=\"editCategories\" tabindex=\"-1\" role=\"dialog\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h3> Edit Category</h3>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"form-group\">\n                    <select id=\"edit_parent_id\" class=\"form-control\" placeholder=\"Parent_id\">\n                    </select>\n                </div>\n                <div class=\"form-group\">\n                    <input type=\"text\" id=\"edit_category_name\" class=\"form-control\" placeholder=\"Category Name\">\n                    <input type=\"text\" hidden id=\"edit_category_id\" class=\"form-control\" >\n                </div>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-primary\" id=\"edit_category\" (click)=\"editcategory()\">Change</button>\n                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n\n            </div>\n        </div>\n    </div>\n</div>\n\n\n<div class=\"modal fade\" id=\"addItems\" tabindex=\"-1\" role=\"dialog\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h3> Add Product</h3>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"form-group\">\n                    <input type=\"text\" id=\"item_name\" class=\"form-control\" placeholder=\"Product Name\">\n                </div>\n            </div>\n            <!-- add tags -->\n            <div class=\"modal-body\">\n                <div class=\"form-group\">\n                    <input type=\"text\" id=\"keywords\" class=\"form-control\" placeholder=\"Product Keywords\">\n                </div>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-primary\" id=\"add_item\" (click)=\"additem()\">Add</button>\n                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/authentication.service */ "./src/app/service/authentication.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);




var MainComponent = /** @class */ (function () {
    function MainComponent(auth, flashM) {
        var _this = this;
        this.auth = auth;
        this.flashM = flashM;
        this.category = {};
        this.product = {};
        this.allcategory = {};
        this.allproduct = {};
        this.fill_parent_category();
        // set pusher-module bind (this is websocket implement)
        this.auth.channel.bind('send-change', function (data) {
            if (data.status == 'categorychange') {
                _this.fill_parent_category();
                _this.flashM.show(' Categories updated', { cssClass: 'alert-danger' });
            }
            else if (data.status == 'productchange') {
                _this.flashM.show(' Products Updated', { cssClass: 'alert-danger' });
                _this.load_product();
            }
        });
        // console.log(this.auth.getUserDetails().email);
    }
    MainComponent.prototype.ngOnInit = function () {
        $("#user").html("Logged in as " + this.auth.getUserDetails().email);
    };
    // load category_data from mongodb
    MainComponent.prototype.fill_parent_category = function () {
        var _this = this;
        this.auth.getallcategory().subscribe(function (res) {
            _this.allcategory = res;
            var cat_list = "";
            for (var i = 0; i < _this.allcategory.length; i++) {
                cat_list = cat_list + "<option value='" + _this.allcategory[i]._id + "'>" + _this.allcategory[i].category_name + "</option>";
            }
            $("#parent_id").html(cat_list);
            $("#edit_parent_id").html(cat_list);
            _this.make_treeview();
        }, function (err) {
            console.error(err);
        });
    };
    // make category _tree with json_data (from db category)
    MainComponent.prototype.make_treeview = function () {
        var self = this;
        var tmp_data = JSON.stringify(this.list_to_tree(this.allcategory));
        var tree_str = tmp_data.replace(/\"nodes\":\[\],/g, '');
        var tree_data = JSON.parse(tree_str);
        $('#category-tree').treeview({
            data: tree_data,
            levels: 10,
            expandIcon: 'fa fa-plus',
            collapseIcon: 'fa fa-minus',
            emptyIcon: 'fa',
            nodeIcon: '',
            selectedIcon: '',
            checkedIcon: 'glyphicon glyphicon-check',
            uncheckedIcon: 'glyphicon glyphicon-unchecked',
            color: undefined,
            backColor: undefined,
            borderColor: '#dddddd',
            onhoverColor: '#F5F5F5',
            enableLinks: false,
            highlightSelected: true,
            showBorder: true,
            showIcon: true,
        });
        $('#category-tree').on('nodeSelected', function (event, data) {
            self.sel_category = data;
            self.sel_product = "0";
            //console.log("current Category", self.sel_category);
            self.load_product();
        });
    };
    // implement tree - recursive call
    MainComponent.prototype.list_to_tree = function (list) {
        var map = {}, node, roots = [], i;
        for (i = 0; i < list.length; i += 1) {
            map[list[i]._id] = i; // initialize the map
            list[i].nodes = []; // initialize the children
            list[i].text = list[i].category_name;
        }
        for (i = 0; i < list.length; i += 1) {
            node = list[i];
            if (node.parent_id != "0") {
                list[map[node.parent_id]].nodes.push(node);
            }
            else {
                roots.push(node);
            }
        }
        return roots;
    };
    // if user selects a category, load products in selected category
    MainComponent.prototype.load_product = function () {
        var _this = this;
        var self = this;
        var product_list;
        if (this.sel_category == '') {
            alert(' Please Select the Category');
        }
        else {
            this.category.id = this.sel_category['_id'];
            this.auth.getproduct(this.category).subscribe(function (res) {
                console.log('product list', res);
                _this.allproduct = res;
                product_list = "";
                for (var i = 0; i < _this.allproduct.length; i++) {
                    product_list = product_list + "<button class='list-group-item list-group-item-action product_list' id='" + _this.allproduct[i]._id + "' > " + _this.allproduct[i].product_name;
                    if (_this.allproduct[i].keywords.length > 0)
                        product_list = product_list + "<span class='keywords'>(" + _this.allproduct[i].keywords + ")</span>";
                    product_list = product_list + "</button>";
                }
                $("#product_list").html(product_list);
                $('.product_list').on("click", function (e) {
                    self.sel_product = e.target.id;
                    console.log(self.sel_product);
                });
            }, function (err) {
                console.error(err);
            });
        }
    };
    // open change -category dialog
    MainComponent.prototype.editmodal = function () {
        if (this.sel_category == undefined) {
            alert('Select the Category');
            return;
        }
        else {
            $("#editCategories").modal("show");
            $("#edit_category_name").val(this.sel_category['category_name']);
            $("#edit_parent_id").val(this.sel_category['parent_id']);
            $("#edit_category_id").val(this.sel_category['_id']);
        }
    };
    //  send add-category request to server, and relaod category_list
    MainComponent.prototype.addcategory = function () {
        var _this = this;
        if ($("#category_name").val() != "") {
            this.category.category_name = $("#category_name").val();
            this.category.parent_id = $("#parent_id").val();
            this.auth.addcategory(this.category).subscribe(function () {
                _this.fill_parent_category();
            }, function (err) {
                console.error(err);
            });
            $("#category_name").val("");
        }
        $("#addCategories").modal("hide");
    };
    // send edit-category request to server, and reload category_list
    MainComponent.prototype.editcategory = function () {
        var _this = this;
        if ($("#edit_category_name").val() != "") {
            this.category.category_name = $("#edit_category_name").val();
            this.category.parent_id = $("#edit_parent_id").val();
            this.category.id = $("#edit_category_id").val();
            this.auth.editcategory(this.category).subscribe(function () {
                _this.fill_parent_category();
            }, function (err) {
                console.error(err);
            });
            $("#edit_category_name").val("");
        }
        $("#editCategories").modal("hide");
    };
    //  send delete category request, reload category_list
    MainComponent.prototype.delcategory = function () {
        var _this = this;
        if (this.sel_category == undefined || this.sel_category['parent_id'] == "0") {
            alert('Select the Category');
            return;
        }
        else {
            this.category.id = this.sel_category['_id'];
            this.auth.delcategory(this.category).subscribe(function () {
                _this.fill_parent_category();
            }, function (err) {
                console.error(err);
            });
        }
    };
    //  send add product request, reload product_list
    MainComponent.prototype.additem = function () {
        var _this = this;
        var keywords_str = $("#keywords").val().toString();
        if (keywords_str.trim() != '')
            var keywords_array = keywords_str.split(','); //make string to array
        if (this.sel_category == '' || this.sel_category == undefined) {
            alert('Select the Category');
            return;
        }
        else {
            if ($("#item_name").val() != "") {
                this.product.product_name = $("#item_name").val();
                this.product.category_id = this.sel_category['_id'];
                this.product.keywords = keywords_array;
                // call service
                this.auth.addproduct(this.product).subscribe(function () {
                    _this.load_product();
                }, function (err) {
                    console.error(err);
                });
            }
            else {
                alert('Input the Product Name');
                return;
            }
            // this.flashM.show(this.auth.getUserDetails().email +' added Products', {cssClass : 'alert-danger'});
            $("#item_name").val("");
            $("#keywords").val("");
            $("#addItems").modal("hide");
        }
    };
    //  send delete product request, reload product_list
    MainComponent.prototype.delprodudct = function () {
        var _this = this;
        if (this.sel_product == undefined || this.sel_product == "0") {
            alert('Select the Product');
            return;
        }
        else {
            this.product.id = this.sel_product;
            this.auth.delproduct(this.product).subscribe(function () {
                _this.load_product();
            }, function (err) {
                console.error(err);
            });
        }
    };
    MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/main/main.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"], angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"]])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/service/authentication.service.ts":
/*!***************************************************!*\
  !*** ./src/app/service/authentication.service.ts ***!
  \***************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");






/// this service is between frontend and backend.
var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http, router) {
        this.http = http;
        this.router = router;
        this.api_url = '/api';
        Pusher.logToConsole = true;
        this.pusher = new Pusher(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].pusher.key, {
            cluster: _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].pusher.cluster,
            forceTLS: true
        });
        this.channel = this.pusher.subscribe('category-channel');
    }
    // from here, get and save user token, and get userdetail
    AuthenticationService.prototype.saveToken = function (token) {
        localStorage.setItem('plann-token', token);
        this.token = token;
    };
    AuthenticationService.prototype.getToken = function () {
        if (!this.token) {
            this.token = localStorage.getItem('plann-token');
        }
        return this.token;
    };
    AuthenticationService.prototype.getUserDetails = function () {
        var token = this.getToken();
        var payload;
        if (token) {
            payload = token.split('.')[1];
            payload = window.atob(payload);
            return JSON.parse(payload);
        }
        else {
            return null;
        }
    };
    AuthenticationService.prototype.isLoggedIn = function () {
        var user = this.getUserDetails();
        if (user) {
            return user.exp > Date.now() / 1000;
        }
        else {
            return false;
        }
    };
    // send http request from frontend to backend
    AuthenticationService.prototype.request = function (method, type, user) {
        var _this = this;
        var base;
        if (method === 'post') {
            base = this.http.post(this.api_url + ("" + type), user);
        }
        else {
            base = this.http.get(this.api_url + ("" + type), { headers: { Authorization: "Bearer " + this.getToken() } });
        }
        var request = base.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            if (data.token) {
                _this.saveToken(data.token);
            }
            return data;
        }));
        return request;
    };
    AuthenticationService.prototype.login = function (user) {
        return this.request('post', 'login', user);
    };
    AuthenticationService.prototype.logout = function () {
        this.token = '';
        window.localStorage.removeItem('plann-token');
        this.router.navigateByUrl('/');
    };
    //// main service  :
    // From here ,send CRUD request to server (Category,product)
    AuthenticationService.prototype.getallcategory = function () {
        return this.http.get(this.api_url + 'getallcategory', { headers: { Authorization: "Bearer " + this.getToken() } });
    };
    AuthenticationService.prototype.addcategory = function (category) {
        return this.http.post(this.api_url + 'addcategory', category);
    };
    AuthenticationService.prototype.editcategory = function (category) {
        return this.http.post(this.api_url + 'editcategory', category);
    };
    AuthenticationService.prototype.delcategory = function (category) {
        return this.http.post(this.api_url + 'delcategory', category);
    };
    //
    AuthenticationService.prototype.addproduct = function (product) {
        return this.http.post(this.api_url + 'addproduct', product);
    };
    AuthenticationService.prototype.getproduct = function (category) {
        return this.http.post(this.api_url + 'getproduct', category);
    };
    AuthenticationService.prototype.delproduct = function (product) {
        return this.http.post(this.api_url + 'delproduct', product);
    };
    AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AuthenticationService);
    return AuthenticationService;
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
    pusher: {
        key: 'a32cebd878d11b399d4c',
        cluster: 'us3',
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

module.exports = __webpack_require__(/*! /Users/mac/Desktop/code/crudmeanapp/crudmeanapp/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map