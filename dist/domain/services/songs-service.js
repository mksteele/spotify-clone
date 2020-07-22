"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = exports.getSongById = exports.getSongs = void 0;
const songDao = __importStar(require("../../dao/songs"));
const utils_1 = require("../../utils");
// A post request should not contain an id.
// export type SongCreateParams = Pick<Song, "email" | "name" | "phoneNumbers">;
function getSongs() {
    return songDao.getSongs();
}
exports.getSongs = getSongs;
function getSongById(id) {
    return songDao.getSongById(id);
}
exports.getSongById = getSongById;
// TODO: Accept parts of a song, rather than whole song
function create(songCreationParams) {
    return Object.assign(Object.assign({}, songCreationParams), { id: utils_1.generateUniqueId() });
}
exports.create = create;
//# sourceMappingURL=songs-service.js.map