import LazyLoader from './LazyLoader';
import { lazy } from 'react';


const HomePage = LazyLoader(lazy(async () => await import('../components/Homepage')));
const NewsDetail = LazyLoader(lazy(async () => await import('../components/NewsDetail')));
const Dashboard = LazyLoader(lazy(async () => await import('../components/Dashboard')));





const Routes = [
    {
      path: '/',
      element: <HomePage />,
    },
    {
      path: '/newsDetail/:id',
      element: <NewsDetail />,
    },
    {
    path:'/dashboard',
    element:<Dashboard/>
  
    }

  ];

  export default Routes;