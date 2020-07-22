import { Readable } from "stream";
import { uuid } from "uuidv4";

export function generateUniqueId(): string {
  return uuid().replace(/-/g, "");
}

export function streamFromBuffer(buffer: Buffer) {
  const stream = new Readable();
  // tslint:disable-next-line: no-empty
  stream._read = () => {}; // _read is required but you can noop it
  stream.push(buffer);
  stream.push(null);

  return stream;
}
