"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Photo = void 0;
/* eslint-disable @typescript-eslint/explicit-member-accessibility */
var typeorm_1 = require("typeorm");
var Photo = /** @class */ (function () {
    function Photo(params) {
        if (params) {
            var id = params.id, name = params.name, description = params.description, filename = params.filename, views = params.views;
            this.id = id;
            this.name = name;
            this.description = description;
            this.filename = filename;
            this.views = views;
        }
    }
    __decorate([
        typeorm_1.PrimaryColumn(),
        __metadata("design:type", Number)
    ], Photo.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Photo.prototype, "name", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Photo.prototype, "description", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Photo.prototype, "filename", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Photo.prototype, "views", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Boolean)
    ], Photo.prototype, "isPublished", void 0);
    Photo = __decorate([
        typeorm_1.Entity(),
        __metadata("design:paramtypes", [Object])
    ], Photo);
    return Photo;
}());
exports.Photo = Photo;
