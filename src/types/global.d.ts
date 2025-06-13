
import { invoke } from "@tauri-apps/api";

declare global {
  interface Window {
    invoke: typeof invoke;
  }
}
