import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import HomeCards from './components/HomeCards';
import JobListings from './components/JobListings';
import ViewAllJobs from './components/ViewAllJobs';
import { createBrowserRouter, createRoutesFromChildren, Route, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromChildren(
    <Route index element={<h1>Hello World</h1>} />
  )
);

const App = () => {
  return (
    <RouterProvider router={router} />
  );
}

export default App;