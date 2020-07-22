import { Song } from "../models/song";
import * as songDao from "../../dao/songs";
import { generateUniqueId } from "../../utils";

// A post request should not contain an id.
// export type SongCreateParams = Pick<Song, "email" | "name" | "phoneNumbers">;

export function getSongs(): Song[] {
  return songDao.getSongs();
}

export function getSongById(id: string): Song {
  return songDao.getSongById(id);
}

// TODO: Accept parts of a song, rather than whole song
export function create(songCreationParams: Song): Song {
  return {
    ...songCreationParams,
    id: generateUniqueId(),
  };
}
