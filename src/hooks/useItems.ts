import { useEffect, useState } from "react";
import { itemService } from "../services/item.service";
import type { Item } from "../types/item";

import { getNextStatus } from "../utils/item-status";
import { ITEM_STATUS } from "../constants/item-status";

export function useItems(listId: string) {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    const loadedItems = itemService.getByListId(listId);

    setItems(loadedItems);
  }, [listId]);

  const createItem = (name: string) => {
    const newItem: Item = {
      id: crypto.randomUUID(),
      listId,
      name,
      status: ITEM_STATUS.PENDING,
      createdAt: new Date().toISOString(),
    };

    const allItems = itemService.getAll();

    const updatedItems = [...allItems, newItem];

    itemService.saveAll(updatedItems);

    setItems(itemService.getByListId(listId));
  };

  const updateItemStatus = (itemId: string) => {
    const allItems = itemService.getAll();

    const updatedItems = allItems.map((item) => {
      if (item.id !== itemId) {
        return item;
      }

      return {
        ...item,
        status: getNextStatus(item.status),
      };
    });

    itemService.saveAll(updatedItems);

    setItems(itemService.getByListId(listId));
  };

  return {
    items,
    createItem,
    updateItemStatus
  };
}
