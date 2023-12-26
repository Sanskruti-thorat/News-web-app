// Routes.tsx
import PrivateRoute from '../Auth/PrivateRoute';
import LazyLoader from './LazyLoader';
import { lazy } from 'react';

const HomePage = LazyLoader(lazy(async () => await import('../components/Homepage')));
const NewsDetail = LazyLoader(lazy(async () => await import('../components/NewsDetail')));
const Dashboard = LazyLoader(lazy(async () => await import('../components/Dashboard')));
const AddNews = LazyLoader(lazy(async () => await import('../components/AddNews')));
const AdminDash = LazyLoader(lazy(async () => await import('../components/AdminDash')));
const ErrorPage = LazyLoader(lazy(async () => await import('../components/ErrorPage')));
const AnnouncementDash = LazyLoader(lazy(async () => await import('../components/AnnouncementDash')));

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
    path: '/dashboard',
    element: (
      <PrivateRoute path="/dashboard">
        <Dashboard />
      </PrivateRoute>
    ),
  },
  {
    path: '/addNews',
    element: (
      <PrivateRoute path="/addNews">
        <AddNews />
      </PrivateRoute>
    ),
  },
  {
    path: '/adminDash',
    element: (
      <PrivateRoute path="/adminDash">
        <AdminDash />
      </PrivateRoute>
    ),
  },
  {
    path: '/annouceDash',
    element: (
      <PrivateRoute path="/annouceDash">
        <AnnouncementDash />
      </PrivateRoute>
    ),
  },
  {
    path: '*',
    element: <ErrorPage />,
  },
];

export default Routes;
