import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import IntroPage from "../Views/IntroPage/IntroPage";
import Home from "../Views/Home/Home";
import Cardapio from "../Views/Cardapio/Cardapio";
import Salgados from "../Views/Cardapio/Salgados/Salgados";
import Bebidas from "../Views/Cardapio/Bebidas/Bebidas";
import DocesEBolos from "../Views/Cardapio/Doces&Bolos/DocesEBolos";
import Ued from "../Views/Cardapio/Ued/Ued";
import { SALGADOSFRITOS_MOCK } from "./mock/SalgadosMock";
import { BEBIDAS_MOCK } from "./mock/BebidasMock";
import { DOCES_MOCK } from "./mock/DocesMock";
import { UTLEQUIPAMENTOS_MOCK } from "./mock/UtlEquipamentosMock";
import { DESCARTAVEIS_MOCK } from "./mock/DescartaveisMock";

const router = createBrowserRouter([
  {
    path: "/",
    element: <IntroPage />,
  },
  {
    path: "/Home",
    element: <Home />,
  },
  {
    path: "/Cardapio",
    element: <Cardapio />,
    children: [
      {
        path: "Salgados",
        element: <Salgados data={SALGADOSFRITOS_MOCK}/>,
      },
      {
        path: "Bebidas", 
        element: <Bebidas data={BEBIDAS_MOCK}/>,
      },
      {
        path: "Doces&Bolos",
        element: <DocesEBolos data={DOCES_MOCK}/>,
      },
      {
        path: "Ued",
        element: <Ued data={[...UTLEQUIPAMENTOS_MOCK, ...DESCARTAVEIS_MOCK]}/>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
