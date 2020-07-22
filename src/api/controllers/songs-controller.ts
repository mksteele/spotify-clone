import { Controller, Get, Route, Tags } from "tsoa";
import { ISong } from "../data-contracts/song";
import * as songService from "../../domain/services/songs-service";

@Route("songs")
export class SongController extends Controller {
  @Get()
  @Tags("Songs")
  public async listSongs(): Promise<ISong[]> {
    return songService.getSongs();
  }

  @Get("/{songId}")
  @Tags("Songs")
  public async listSongById(songId: string): Promise<ISong> {
    return songService.getSongById(songId);
  }
}
