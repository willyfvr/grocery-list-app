import { ITEM_STATUS } from "../constants/item-status";
import type { ItemStatus } from "../types/item";

export function getStatusLabel(status: ItemStatus): string {
  switch (status) {
    case ITEM_STATUS.PENDING:
      return "🟡 Pendiente";
      
    case ITEM_STATUS.BUYING:
      return "🔵 Comprando";

    case ITEM_STATUS.PURCHASED:
      return "🟢 Comprado";

    default:
      return "";
  }
}

export function getNextStatus(status: ItemStatus): ItemStatus {

  switch (status) {
    case ITEM_STATUS.PENDING :
      return ITEM_STATUS.BUYING;
    
    case ITEM_STATUS.BUYING:
      return ITEM_STATUS.PURCHASED;

    case ITEM_STATUS.PURCHASED:
      return ITEM_STATUS.PENDING;
  }
}
