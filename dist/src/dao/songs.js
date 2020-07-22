"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSongById = exports.getSongs = void 0;
const songs = [
    {
        id: "abc",
        title: "Hotline Bling",
        artist: "Drake",
        releaseDate: new Date("2015-07-31"),
        genres: ["Pop", "R&B"],
        trackDurationInMillis: 267000,
        filename: "../../files/songs/Drake-HotlineBling.mp3",
    },
];
function getSongs() {
    return songs;
}
exports.getSongs = getSongs;
function getSongById(id) {
    return songs.find((x) => x.id === id);
}
exports.getSongById = getSongById;
//# sourceMappingURL=songs.js.map