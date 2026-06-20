import { ITEM_STATUS } from "../constants/item-status";

export type ItemStatus = typeof ITEM_STATUS[keyof typeof ITEM_STATUS];

  export interface Item {
    id: string;
    listId: string;
    name: string;
    status: ItemStatus;
    createdAt: string;  
  }