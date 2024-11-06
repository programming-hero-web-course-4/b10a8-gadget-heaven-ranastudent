import { createBrowserRouter } from 'react-router-dom'

import MainLayout from '../layouts/MainLayout'
import Home from '../Pages/Home'
import Statistics from '../Pages/Statistics'
import Dashboard from '../Pages/Dashboard'
import GadgetCard from '../components/GadgetCard'
import ProductDetails from '../Pages/ProductDetails'
import AddCard from '../components/AddCard'
import ErrorPage from '../components/ErrorPage'
import AddWishList from '../components/AddWishList'
import About_Us from '../Pages/About_Us'
const routes = createBrowserRouter([
      {
            path: '/',
            element: <MainLayout />,
            errorElement: <ErrorPage />,
            children: [
                  {
                        path: '/',
                        element: <Home />,
                        loader: () => fetch('../categories.json'),
                        children: [
                              {
                                    path: '/',
                                    element: <GadgetCard />,
                                    loader: () => fetch('../gadget.json'),
                              },
                              {
                                    path: '/cards/:category',
                                    element: <GadgetCard />,
                                    loader: () => fetch('../gadget.json'),
                              },

                              // { 
                              //       path: 'card/:id', 
                              //       element: <ProductDetails />, 
                              //       loader: () => fetch('../gadget.json').then(res => res.json()), 
                              // },
                              // {
                              //       path:'/cards/Smart%20Watches',
                              //       element:<NotFoundProducts/>,

                              // },
                        ],
                  },
                  {
                        path: '/statistics',
                        element: <Statistics />
                  },
                  {
                        path:'about',
                        element:<About_Us/>
                  },
                  {
                        path: '/dashboard',
                        element: <Dashboard />,
                        children: [
                              {
                                    path: 'add_card',
                                    element: <AddCard />,
                                    loader: () => fetch('../gadget.json').then(res => res.json()),
                              },
                              {
                                    path: 'add_wish',
                                    element: <AddWishList />,
                                    loader: () => fetch('../gadget.json').then(res => res.json()),

                              },

                        ]
                  },
                  {
                        path: '/card/:product_id',
                        element: <ProductDetails />,
                        loader: () => fetch('../gadget.json').then(res => res.json()),
                  },
                  { 
                        path: '/cards/:category/card/:product_id', 
                        element: <ProductDetails />, 
                        loader: () => fetch('../gadget.json').then(res => res.json()), 
                  },

                  // { path: '/card/:product_id', 
                  // element: <ProductDetails />, 
                  // loader: () => fetch('../gadget.json').then(res => res.json()), 
                  // },
            ]
      },
])

export default routes