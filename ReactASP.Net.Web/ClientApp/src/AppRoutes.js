import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Services } from "./components/Services";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/counter',
    element: <Counter />
   },
   {
       path: '/services',
       element: <Services />
    },
   {
       path: '/contact',
       element: <Contact />
    },
    {
        path: '/about',
        element: <About />
   },
  {
    path: '/fetch-data',
    element: <FetchData />
  }
];

export default AppRoutes;
