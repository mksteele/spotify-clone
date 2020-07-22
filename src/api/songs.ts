import { Request, Response } from "express";
import { AbstractController } from "./abstract-controller";

import { Get, Route, Tags } from "tsoa";
// TODO
// import { ServerError } from "../utils/server-error";

@Route("songs")
export class SongController extends AbstractController {

}

export interface ISong {
  id: number;
  label: string;
  color: string;
}

const widgets: IWidget[] = [
  {
    color: "blue",
    id: 1,
    label: "first widget",
  },
];

  @Get()
  @Tags("Widgets")
  public async listSongs(): Promise<IWidget[]> {
    return widgets;
  }

  @Get("{widgetId}")
  @Tags("Widgets")
  public async GetWidget(widgetId: number): Promise<IWidget> {
    const widget = widgets.find((w) => w.id === widgetId);
    if (!widget) {
      throw new ServerError(`no widget found with id ${widgetId}`);
    }

    return widget;
  }
}
