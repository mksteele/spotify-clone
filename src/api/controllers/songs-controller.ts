import * as fs from "fs";
import { Readable } from "stream";
import { Controller, Get, Route, Tags } from "tsoa";
import { ISong } from "../data-contracts/song";
import * as songService from "../../domain/services/song";

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

  @Get("/{songId}/stream")
  @Tags("Songs")
  public async streamSongById(songId: string): Promise<Readable> {
    // TODO Probably better to move this into its own file service?
    const filename = await songService.getSongFilenameById(songId);

    this.setHeader("Content-Type", "audio/mpeg");

    return fs.createReadStream(filename);
  }
}
