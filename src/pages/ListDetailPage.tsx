import { useParams } from "react-router-dom";
import { useItems } from "../hooks/useItems";
import { AppLayout } from "../layouts/AppLayout";
import { shoppingListService } from "../services/shopping-list.service";
import { CreateItemForm } from "../components/shopping/CreateItemForm";

export function ListDetailPage() {
  const { id } = useParams();

  console.log("ID URL: ", id);
  /* TODO: this line should be delete  */
  const lists = shoppingListService.getAll();
  console.log("LISTAS: ", lists);

  const list = id ? shoppingListService.getById(id) : undefined;

  const { items, createItem } = useItems(list?.id ?? "");

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

      <div className="mt-4">
        {items.map((item) => (
          <div key={item.id} className="border rounded p-2 mt-2">
            {item.name}
          </div>
        ))}
      </div>
    </AppLayout>
  );
}
