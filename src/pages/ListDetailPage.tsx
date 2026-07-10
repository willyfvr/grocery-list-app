import { useState } from "react";
import { useParams } from "react-router-dom";
import { CreateItemForm } from "../components/shopping/CreateItemForm";
import { ShoppingItemCard } from "../components/shopping/ShoppingItemCard";
import { ITEM_STATUS } from "../constants/item-status";
import { useItems } from "../hooks/useItems";
import { AppLayout } from "../layouts/AppLayout";
import { shoppingListService } from "../services/shopping-list.service";

export function ListDetailPage() {
  const [showPurchased, setShowPurchased] = useState(true);

  const { id } = useParams();

  const list = id ? shoppingListService.getById(id) : undefined;

  const { items, createItem, updateItemStatus } = useItems(list?.id ?? "");

  console.log("showPurchased: ", showPurchased);

  const visibleItems = showPurchased
    ? items
    : items.filter((item) => item.status !== ITEM_STATUS.PURCHASED);

  console.log("visibleItems:", visibleItems);

  if (!list) {
    return (
      <AppLayout>
        <div className="p-4">
          <h1>Lista no encontrada</h1>
        </div>
      </AppLayout>
    );
  }

  return (
    <AppLayout>
      <div className="p-4">
        <h1>Lista: {list?.name}</h1>
      </div>

      <CreateItemForm onCreate={createItem} />

      <p>Cantidad de items: {items.length} </p>

      <label className="flex items-center gap-2 mt-4">
        <input
          type="checkbox"
          checked={showPurchased}
          onChange={(e) => setShowPurchased(e.target.checked)}
        />
        Mostrar productos comprados
      </label>

      <div className="mt-4">
        {visibleItems.map((item) => (
          <ShoppingItemCard
            key={item.id}
            item={item}
            onStatusChange={updateItemStatus}
          />
        ))}
      </div>
    </AppLayout>
  );
}
