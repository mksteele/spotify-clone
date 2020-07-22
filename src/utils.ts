import { uuid } from "uuidv4";

export function generateUniqueId(): string {
  return uuid().replace(/-/g, "");
}
