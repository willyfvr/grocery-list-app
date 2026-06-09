import {createBrowserRouter} from "react-router-dom";
import {HomePage} from "../pages/HomePage";
import {ListDetailPage} from "../pages/ListDetailPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/list/:id",
    element: <ListDetailPage />
  }

]);