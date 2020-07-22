import { Controller, Get, Route, Tags } from "tsoa";
// TODO
// import { ServerError } from "../utils/server-error";

export interface IWidget {
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

@Route("songs")
export class SongController extends Controller {
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
      throw new Error(`no widget found with id ${widgetId}`);
    }

    return widget;
  }
}
