import React from 'react';
import PageNotFound from '../Pages/PageNotFound';
import {    BrowserRouter,
  Routes, Route } from "react-router-dom";
import Admin from '../Admin/Admin';
const AdminRoutes = () => {
  return (
    
    <div>

    <Routes>
        
        <Route path="/" element={<Admin />} ></Route>
        <Route path="/*" element={<PageNotFound />}></Route>

    </Routes>

</div>
  )
}

export default AdminRoutes