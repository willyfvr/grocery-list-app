import { useEffect, useState } from "react";
import { shoppingListService } from "../services/shopping-list.service";
import type { ShoppingList } from "../types/shopping-list";

export function useShoppingLists() {
  const [lists, setLists] = useState<ShoppingList[]>([]);

  useEffect(() => {
    setLists(shoppingListService.getAll());
  }, []);

  const createList = (name: string) => {
    const newList: ShoppingList = {
      id: crypto.randomUUID(),
      name,
      createdAt: new Date().toISOString(),
    };

    const updatedLists = [...lists, newList];

    setLists(updatedLists);

    shoppingListService.saveAll(updatedLists);
  };

  const deleteList = (id: string) => {
    const updatedLists = lists.filter((list) => list.id !== id);

    setLists(updatedLists);

    shoppingListService.saveAll(
      updatedLists
    )
  };

  return {
    lists,
    createList,
    deleteList
  };
}
