import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './app/home/Home';

const router = createBrowserRouter(([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Home />
      }
    ]
  }
]))

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

