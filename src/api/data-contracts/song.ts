export interface ISong {
  id: string;
  title: string;
  artist: string;
  releaseDate: Date;
  genres: string[];
  trackDurationInMillis: number;
}
