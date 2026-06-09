export type ItemStatus =
  | "pending"
  | "buying"
  | "purchased";

  export interface Item {
    id: string;
    listId: string;
    name: string;
    status: ItemStatus;
    createdAt: string;  
  }