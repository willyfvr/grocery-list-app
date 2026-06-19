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

export function getNextStatus(status: ItemStatus): ItemStatus {

  switch (status) {
    case "pending" :
      return "buying";
    
    case "buying":
      return "purchased";

    case "purchased":
      return "pending";
  }
}
