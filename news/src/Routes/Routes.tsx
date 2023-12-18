import LazyLoader from './LazyLoader';
import { lazy } from 'react';


const HomePage = LazyLoader(lazy(async () => await import('../components/Homepage')));
const NewsDetail = LazyLoader(lazy(async () => await import('../components/NewsDetail')));
const Dashboard = LazyLoader(lazy(async () => await import('../components/Dashboard')));
const AddNews = LazyLoader(lazy(async () => await import('../components/AddNews')));
const AdminDash = LazyLoader(lazy(async () => await import('../components/AdminDash')));
const ErrorPage = LazyLoader(lazy(async () => await import('../components/ErrorPage')));





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
  
    },
    {
      path:'/addNews',
      element:<AddNews/>
    },
    {
     path:'/adminDash',
     element:<AdminDash/>
    },
    {
      path:'*',
      element:<ErrorPage/>
    }

  ];

  export default Routes;