import { createBrowserRouter } from 'react-router-dom'

import MainLayout from '../layouts/MainLayout'
import Home from '../Pages/Home'
import Statistics from '../Pages/Statistics'
import Dashboard from '../Pages/Dashboard'
import GadgetCard from '../components/GadgetCard'
const routes = createBrowserRouter([
      {
        path: '/',
        element: <MainLayout/>,
        children: [
            {
                  path: '/',
                  element: <Home/>,
                  loader: ()=>fetch('../categories.json'),
                  children: [
                        {
                              path:'/cards/:category',
                              element:<GadgetCard/>,
                              loader: ()=>fetch('../gadget.json'),
                        },
                  ],
            },
            {
                  path: '/statistics',
                  element: <Statistics/>
            },
            {
                  path: '/dashboard',
                  element: <Dashboard/>
            },
        ]
      },
    ])

export default routes