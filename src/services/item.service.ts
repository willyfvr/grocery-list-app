// 
import type { Item } from "../types/item";

const STORAGE_KEY = "item";

export const itemService = {
  getAll(): Item[] {
    const data = localStorage.getItem(STORAGE_KEY);

    if (!data) {
      return [];
    }

    return JSON.parse(data);
  },

  saveAll(item: Item[]) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(item));
  },
};
