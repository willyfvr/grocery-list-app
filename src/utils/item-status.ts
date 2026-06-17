import type { ItemStatus } from "../types/item";

export function getStatusLabel(status: ItemStatus): string {
  switch (status) {
    case "pending":
      return "🟡 Pendiente";
      
    case "buying":
      return "🔵 Comprando";

    case "purchased":
      return "🟢 Comprado";

    default:
      return "";
  }
}
