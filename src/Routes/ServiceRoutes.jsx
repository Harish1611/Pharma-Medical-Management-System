import React from 'react'
import {    BrowserRouter,
    Routes, Route } from "react-router-dom";
import PageNotFound from '../Pages/PageNotFound';
import BatchProcessing from '../Components/BatchProcessing/BatchProcessing';
import ReportGeneration from '../Components/ReportGeneration/ReportGeneration';
import Manufacturing from '../Components/Manufacturing/Manufacturing';
import PackagingAndShipping from '../Components/PackagingAndShipping/PackagingAndShipping';
import Home from '../Pages/Home';
import Nav from '../Components/Nav/Nav';
import Footer from '../Components/Footer/Footer';
import RawMaterialResources from '../Components/RawMaterialResources/RawMaterialResources';
import ResearchAndDevelopment from '../Components/ResearchAndDevelopment/ResearchAndDevelopment';
import Profile from '../Components/Profile/Profile';
import Login from '../Pages/Login';
import NewRawMaterial from '../Components/RawMaterialResources/NewRawMaterial';

const ServiceRoutes = () => {
  return (
    <div>


        <Nav />
        <Routes>
            
           <Route path="/" element={<Home />}></Route>
           <Route path="/login" element={<Login />}></Route>
            <Route path="/batch-processing" element={<BatchProcessing />}></Route>
            <Route path="/report-generation" element={<ReportGeneration />}></Route>
            <Route path="/manufacturing" element={<Manufacturing />}></Route>
            <Route path="/packaging-shipping" element={<PackagingAndShipping />}></Route>
            <Route path="/raw-material-resources" element={<RawMaterialResources />}></Route>
            <Route path="/raw-material-resources/create-new-resource" element={<NewRawMaterial />}></Route>

            <Route path="/research-development" element={<ResearchAndDevelopment />}></Route>
            <Route path="/profile" element={<Profile />}></Route>




            <Route path="/*" element={<PageNotFound />}></Route>

        </Routes>
        <Footer />
    </div>
  )
}

export default ServiceRoutes