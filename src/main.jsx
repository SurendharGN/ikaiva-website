import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// importing the pages
import TheArtistsHub from './pages/projects/TheArtistsHub.jsx'
// importing ract-router-dom
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router=createBrowserRouter([
  {
    path:'/',
    element:<App/>
  },
  {
    path:'/TheArtistsHub',
    element:<TheArtistsHub/>
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
