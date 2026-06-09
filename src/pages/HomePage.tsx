import { AppLayout } from "../layouts/AppLayout";
import { useShoppingLists } from "../hooks/useShoppingLists";
import { CreateListForm } from "../components/shopping/CreateListForm";
import { Link } from "react-router-dom";

export function HomePage() {
  const {
    lists,
    createList,
    deleteList,
  } = useShoppingLists();

  return (
    <AppLayout>
      <div className="p-4">
        <h1 className="text-2xl font-bold">
          Mis Listas
        </h1>

        <div className="mt-4">
          <CreateListForm
            onCreate={createList}
          />
        </div>

        <div className="mt-6 space-y-2">
          {lists.map((list) => (
            <div
              key={list.id}
              className="flex items-center justify-between rounded border p-3"
            >
              {/* <span>
                {list.name}
              </span> */}

              <Link to={`/list/${list.id}`}>
                {list.name}
              </Link>  
              <button
                onClick={() =>
                  deleteList(list.id)
                }
                className="text-red-600"
              >
                Eliminar
              </button>
            </div>
          ))}
        </div>
      </div>
    </AppLayout>
  );
}