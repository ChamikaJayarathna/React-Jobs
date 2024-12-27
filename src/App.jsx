import React from 'react';
import { createBrowserRouter, createRoutesFromChildren, Route, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MainLayout from './layouts/MainLayout';
import JobsPage from './pages/JobsPage';

const router = createBrowserRouter(
  createRoutesFromChildren(
    <Route path='/' element={<MainLayout/>} >
        <Route index element={<HomePage/>} />
        <Route path='/jobs' element={<JobsPage/>}/>
    </Route>
  )
);

const App = () => {
  return (
    <RouterProvider router={router} />
  );
}

export default App;