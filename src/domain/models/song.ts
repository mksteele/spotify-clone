// It's nice to separate the domain models from the data-contracts so
// we can add properties like "filename" that are private to our API.
// These models could also be different from what we store in the db.
export interface Song {
  id: string;
  title: string;
  artist: string;
  releaseDate: Date;
  genres: string[];
  trackDurationInMillis: number;
  filename: string;
}
