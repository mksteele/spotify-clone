// Database access for songs
import { Song } from "../domain/models/song";

const songs: Song[] = [
  {
    id: "abc",
    title: "Hotline Bling",
    artist: "Drake",
    releaseDate: new Date("2015-07-31"),
    genres: ["Pop", "R&B"],
    trackDurationInMillis: 267000,
  },
];

export function getSongs(): Song[] {
  return songs;
}

export function getSongById(id: string): Song {
  const song = songs.find((x) => x.id === id);

  if (!song) {
    // TODO: Instead of generic Error, return bad request
    throw new Error(`no song found with id ${id}`);
  }

  return song;
}
