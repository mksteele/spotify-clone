import { Song } from "../models/song";

// A post request should not contain an id.
// export type SongCreateParams = Pick<Song, "email" | "name" | "phoneNumbers">;

export class SongsService {
  public get(id: string, name?: string): Song {
    return {
      id,
    };
  }

  // TODO: Accept parts of a song
  public create(songCreationParams: Song): Song {
    return {
      id: Math.floor(Math.random() * 10000), // Random
      status: "Happy",
      ...songCreationParams,
    };
  }
}
