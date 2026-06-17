import { useEffect, useState } from "react";
import { itemService } from "../services/item.service";
import type { Item } from "../types/item";

export function useItems(listId: string) {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    const loadedItems = itemService.getByListId(listId);

    setItems(loadedItems);
  }, [listId]);

  const createItem = (name: string) => {
    const newItem: Item = {
      id:crypto.randomUUID(),
      listId,
      name,
      status: "pending",
      createdAt: new Date().toISOString(),
    }

    const allItems = itemService.getAll();

    const updatedItems = [
      ...allItems,
      newItem,
    ];

    itemService.saveAll(updatedItems);

    setItems(itemService.getByListId(listId));
  };

  return {
    items,
    createItem,
  };
}
