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
    },
];
function getSongs() {
    return songs;
}
exports.getSongs = getSongs;
function getSongById(id) {
    const song = songs.find((x) => x.id === id);
    if (!song) {
        // TODO: Instead of generic Error, return bad request
        throw new Error(`no song found with id ${id}`);
    }
    return song;
}
exports.getSongById = getSongById;
//# sourceMappingURL=songs.js.map