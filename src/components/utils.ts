import { TRUNCATE_SIZE } from "./conts";

export function truncateText(text: string) {
  return text.substring(0, TRUNCATE_SIZE) + '...';
}
