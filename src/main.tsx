import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import HomeRoute from './routes/home';
import EventsRoute from './routes/events';
import SignupRoute from './routes/sign-up';
import NotFound from './components/utils/NotFound';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeRoute />,
  },
  {
    path: "/events",
    element: <EventsRoute />,
  },
  {
    path: "/sign-up",
    element: <SignupRoute />,
  },
  {
    path:"*",
    element: <NotFound />
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
