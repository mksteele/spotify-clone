import { Song } from "../domain/models/song";
import { generateUniqueId } from "../utils";

// TODO: Would actually be fetching songs from a database here
// and the ids should be persistent.
const songs: Song[] = [
  {
    id: generateUniqueId(),
    title: "Hotline Bling",
    artist: "Drake",
    releaseDate: new Date("2015-07-31"),
    genres: ["Pop", "R&B"],
    trackDurationInMillis: 232000,
    filename: "Drake-HotlineBling.mp3",
  },
  {
    id: generateUniqueId(),
    title: "Feels Like Summer",
    artist: "Childish Gambino",
    releaseDate: new Date("2018-07-11"),
    genres: ["R&B"],
    trackDurationInMillis: 267000,
    filename: "ChildishGambino-FeelsLikeSummer.mp3",
  },
];

// Making async to simulate database access
export async function getSongs(): Promise<Song[]> {
  return songs;
}

export async function getSongById(id: string): Promise<Song> {
  return songs.find((x) => x.id === id);
}
