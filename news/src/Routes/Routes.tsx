import LazyLoader from './LazyLoader';
import { lazy } from 'react';


const HomePage = LazyLoader(lazy(async () => await import('../components/Homepage')));
const NewsDetail = LazyLoader(lazy(async () => await import('../components/NewsDetail')));





const Routes = [
    {
      path: '/',
      element: <HomePage />,
    },
    {
      path: '/newsDetail/:id',// Assuming you want dynamic parameters for news items
      element: <NewsDetail />,
    },
  ];

  export default Routes;