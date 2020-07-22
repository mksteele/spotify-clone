"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SongController = void 0;
const tsoa_1 = require("tsoa");
const widgets = [
    {
        color: "blue",
        id: 1,
        label: "first widget",
    },
];
let SongController = class SongController extends tsoa_1.Controller {
    listSongs() {
        return __awaiter(this, void 0, void 0, function* () {
            return widgets;
        });
    }
    GetWidget(widgetId) {
        return __awaiter(this, void 0, void 0, function* () {
            const widget = widgets.find((w) => w.id === widgetId);
            if (!widget) {
                throw new Error(`no widget found with id ${widgetId}`);
            }
            return widget;
        });
    }
};
__decorate([
    tsoa_1.Get(),
    tsoa_1.Tags("Widgets")
], SongController.prototype, "listSongs", null);
__decorate([
    tsoa_1.Get("{widgetId}"),
    tsoa_1.Tags("Widgets")
], SongController.prototype, "GetWidget", null);
SongController = __decorate([
    tsoa_1.Route("songs")
], SongController);
exports.SongController = SongController;
//# sourceMappingURL=songs.js.map