import { useParams } from "react-router-dom";
import { AppLayout } from "../layouts/AppLayout";
import { shoppingListService } from "../services/shopping-list.service";

export function ListDetailPage() {
  const { id } = useParams();
  /* TODO: this line should be delete  */
  //const lists = shoppingListService.getAll();

  const list = id
    ? shoppingListService.getById(id)
    : undefined;

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
