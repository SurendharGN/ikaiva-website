import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// importing the pages
import TheArtistsHub from './pages/projects/TheArtistsHub.jsx';
import AmplifyMediaHouse from './pages/projects/AmplifyMediaHouse.jsx';
import AstralisVentures from './pages/projects/AstralisVentures.jsx';
import AuraStudio from './pages/projects/AuraStudio.jsx';
import DavinciMedia from './pages/projects/DavinciMedia.jsx';
import EmberRoast from './pages/projects/EmberRoast.jsx';
import HarmonyStore from './pages/projects/HarmonyStore.jsx';
import Sample from './pages/projects/Sample.jsx';

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
  },{
    path:'/AmplifyMediaHouse',
    element:<AmplifyMediaHouse/>
  },{
    path:'/AstralisVentures',
    element:<AstralisVentures/>
  },{
    path:'/AuraStudio',
    element:<AuraStudio/>
  },{
    path:'/DavinciMedia',
    element:<DavinciMedia/>
  },{
    path:'/EmberRoast',
    element:<EmberRoast/>
  },{
    path:'/HarmonyStore',
    element:<HarmonyStore/>
  },{
    path:'/sample',
    element:<Sample/>
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
