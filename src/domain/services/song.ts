import { Song } from "../models/song";
import * as songDao from "../../dao/song";

const filesDirectory = __dirname + "/../../../../files/songs/";

export async function getSongs(): Promise<Song[]> {
  return songDao.getSongs();
}

export async function getSongById(id: string): Promise<Song> {
  const dbSong = await songDao.getSongById(id);

  if (!dbSong) {
    // TODO: Instead of generic Error, return bad request
    throw new Error(`No song found with id ${id}`);
  }

  return dbSong;
}

export async function getSongFilenameById(id: string): Promise<string> {
  const song = await getSongById(id); // Throws error if song doesn't exist
  return filesDirectory + song.filename;
}

// Not all Song properties can be passed in upon creation
type SongCreateParams = Pick<
  Song,
  "title" | "artist" | "releaseDate" | "genres" | "trackDurationInMillis"
>;

export function create(songCreationParams: SongCreateParams): Song {
  throw new Error("Not yet implemented");
}
