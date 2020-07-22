"use strict";
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
exports.getSongById = exports.getSongs = void 0;
const utils_1 = require("../utils");
// TODO: Would actually be fetching songs from a database here
// and the ids should be persistent.
const songs = [
    {
        id: utils_1.generateUniqueId(),
        title: "Hotline Bling",
        artist: "Drake",
        releaseDate: new Date("2015-07-31"),
        genres: ["Pop", "R&B"],
        trackDurationInMillis: 267000,
        filename: "Drake-HotlineBling.mp3",
    },
    {
        id: utils_1.generateUniqueId(),
        title: "Feels Like Summer",
        artist: "Childish Gambino",
        releaseDate: new Date("2018-07-11"),
        genres: ["R&B"],
        trackDurationInMillis: 267000,
        filename: "ChildishGambino-FeelsLikeSummer.mp3",
    },
];
// Making async to simulate database access
function getSongs() {
    return __awaiter(this, void 0, void 0, function* () {
        return songs;
    });
}
exports.getSongs = getSongs;
function getSongById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return songs.find((x) => x.id === id);
    });
}
exports.getSongById = getSongById;
//# sourceMappingURL=song.js.map