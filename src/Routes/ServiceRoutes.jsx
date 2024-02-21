import React from 'react'
import {    BrowserRouter,
    Routes, Route } from "react-router-dom";
import PageNotFound from '../Pages/PageNotFound';
import BatchProcessing from '../Components/BatchProcessing/BatchProcessing';
import ReportGeneration from '../Components/ReportGeneration/ReportGeneration';
import Manufacturing from '../Components/Manufacturing/Manufacturing';
import PackagingAndShipping from '../Components/PackagingAndShipping/PackagingAndShipping';

const ServiceRoutes = () => {
  return (
    <div>

        <Routes>
            
            <Route path="/batch-processing" element={<BatchProcessing />}></Route>
            <Route path="/report-generation" element={<ReportGeneration />}></Route>
            <Route path="/manufacturing" element={<Manufacturing />}></Route>
            <Route path="/packaging-shipping" element={<PackagingAndShipping />}></Route>

            <Route path="/*" element={<PageNotFound />}></Route>

        </Routes>

    </div>
  )
}

export default ServiceRoutes