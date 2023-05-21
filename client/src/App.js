import "./App.css";
import Root from "./routes/root";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ForeingCountries from "./components/ForeingCountries";
import RussianCities from "./components/RussianCities";
import ErrorPage from "./components/ErrorPage";
import PopularTours from "./components/PopularTours";
import AviaTickets from "./components/AviaTickets";
import ForeingCities from "./components/ForeingCities";
import Excursions from "./components/Excursions";
import Sales from "./components/FCity";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    // если хотим чтобы навигация не пропадала при переходе к новому компоненту - добавляем дочерние компоненты к компоненту навигации с помощью ключа children
  },
  {
    path: "/russian-cities",
    element: <RussianCities />,
  },
  {
    path: "/foreing-countries",
    element: <ForeingCountries />,
  },
  {
    path: "/popular-tours",
    element: <PopularTours />,
  },
  {
    path: "/avia-tickets",
    element: <AviaTickets />,
  },
  {
    path: "/excursions",
    element: <Excursions />,
  },
  {
    path: "/sales",
    element: <Sales />,
  },
  {
    path: "/foreing-cities",
    element: <ForeingCities />,
  },
]);

function App() {
  return (
    <div className="App">
      <div className="selection">
        {/* <div className='russia'></div>
        <div className='globus'></div> */}
      </div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
