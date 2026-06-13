import type { ShoppingList } from "../types/shopping-list";

const STORAGE_KEY = "shopping_lists";

export const shoppingListService = {
  getAll(): ShoppingList[] {
    const data = localStorage.getItem(STORAGE_KEY);

    if (!data) {
      return [];
    }

    return JSON.parse(data);
  },
  
  getById(id: string): ShoppingList | undefined {
    const lists = this.getAll();
    return lists.find(
      (list) => {
        list.id === id
      })
  },
  
  saveAll(lists: ShoppingList[]) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(lists));
  },
};
