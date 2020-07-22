"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SongsService = void 0;
// A post request should not contain an id.
// export type SongCreateParams = Pick<Song, "email" | "name" | "phoneNumbers">;
class SongsService {
    get(id, name) {
        return {
            id,
        };
    }
    // TODO: Accept parts of a song
    create(songCreationParams) {
        return Object.assign({ id: Math.floor(Math.random() * 10000), status: "Happy" }, songCreationParams);
    }
}
exports.SongsService = SongsService;
//# sourceMappingURL=songs-service.js.map