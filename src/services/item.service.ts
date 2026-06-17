//
import type { Item } from "../types/item";

const STORAGE_KEY = "items";

export const itemService = {
  getAll(): Item[] {
    const data = localStorage.getItem(STORAGE_KEY);

    if (!data) {
      return [];
    }

    return JSON.parse(data);
  },

  getById(id: string): Item | undefined {
    const items = this.getAll();

    return items.find((item) => item.id === id);
  },

  saveAll(items: Item[]) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  },

  getByListId(listId: string): Item[] {
    const items = this.getAll();

    return items.filter((item) => item.listId === listId);
  },
};
