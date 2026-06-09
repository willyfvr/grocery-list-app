import { useParams } from "react-router-dom";
import { AppLayout } from "../layouts/AppLayout";
import { shoppingListService } from "../services/shopping-list.service";

export function ListDetailPage() {
  const { id } = useParams();
  const lists = shoppingListService.getAll();

  const list = lists.find((list) => list.id === id);

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
    </AppLayout>
  );
}
