import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import RecipeSearch from './pages/RecipeSearch'
import RecipeGuide from './pages/RecipeGuide'

import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import 'react-tooltip/dist/react-tooltip.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "home",
    element: <HomePage/>,
  },
  {
    path: "about",
    element: <AboutPage/>,
  },
  {
  path: "search",
  element: <RecipeSearch/>,
  },
  {
  path: "guide",
  element: <RecipeGuide/>,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
