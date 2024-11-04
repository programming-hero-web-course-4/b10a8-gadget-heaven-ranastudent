import { createBrowserRouter } from 'react-router-dom'

import MainLayout from '../layouts/MainLayout'
import Home from '../Pages/Home'
import Statistics from '../Pages/Statistics'
import Dashboard from '../Pages/Dashboard'
import GadgetCard from '../components/GadgetCard'
import ProductDetails from '../Pages/ProductDetails'
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
                              path:'/',
                              element:<GadgetCard/>,
                              loader: ()=>fetch('../gadget.json'),
                        },
                        {
                              path:'/cards/:category',
                              element:<GadgetCard/>,
                              loader: ()=>fetch('../gadget.json'),
                        },
                        // {
                        //       path:'/cards/Smart%20Watches',
                        //       element:<NotFoundProducts/>,
                              
                        // },
                  ],
            },
            {
                  path: '/statistics',
                  element: <Statistics/>
            },
            {
                  path: '/dashboard',
                  element: <Dashboard/>,
            },
            { path: '/card/:product_id', 
            element: <ProductDetails />, 
            loader: () => fetch('../gadget.json').then(res => res.json()), 
            },
        ]
      },
    ])

export default routes