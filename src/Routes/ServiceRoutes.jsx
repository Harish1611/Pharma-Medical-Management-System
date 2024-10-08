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
import AvailableResources from '../Components/RawMaterialResources/AvailableResources/AvailableResources';
import ResourceRequests from '../Components/RawMaterialResources/ResourceRequests/ResourceRequests';
import RequestsOnHold from '../Components/RawMaterialResources/ResourceRequests/RequestsOnHold';
import ClosedRequests from '../Components/RawMaterialResources/ResourceRequests/ClosedRequests';
import ResourceIssues from '../Components/RawMaterialResources/ResourceIssues.jsx/ResourceIssues';
import IssuesOnHold from '../Components/RawMaterialResources/ResourceIssues.jsx/IssuesOnHold';
import ClosedIssues from '../Components/RawMaterialResources/ResourceIssues.jsx/ClosedIssues';
import StartBatch from '../Components/BatchProcessing/StartBatch/StartBatch';
import OnGoingBatches from '../Components/BatchProcessing/OnGoingBatches/OnGoingBatches';
import CompletedBatches from '../Components/BatchProcessing/CompletedBatches/CompletedBatches';

const ServiceRoutes = () => {
  return (
    <div>


        <Nav />
        <Routes>
            
           <Route path="/" element={<Home />}></Route>
           <Route path="/login" element={<Login />}></Route>
            <Route path="/batch-processing" element={<BatchProcessing />}></Route>
            <Route path="/batch-processing/start-batch" element={<StartBatch />}></Route>
            <Route path="/batch-processing/ongoing-batches" element={<OnGoingBatches />}></Route>
            <Route path="/batch-processing/completed-batches" element={<CompletedBatches />}></Route>

            <Route path="/report-generation" element={<ReportGeneration />}></Route>
            <Route path="/manufacturing" element={<Manufacturing />}></Route>
            <Route path="/packaging-shipping" element={<PackagingAndShipping />}></Route>
            <Route path="/raw-material-resources" element={<RawMaterialResources />}></Route>
            <Route path="/raw-material-resources/create-new-resource" element={<NewRawMaterial />}></Route>
            <Route path="/raw-material-resources/available-resources" element={<AvailableResources />}></Route>
            <Route path="/raw-material-resources/resource-requests" element={<ResourceRequests />}></Route>
            <Route path="/raw-material-resources/resource-on-hold" element={<RequestsOnHold />}></Route>
            <Route path="/raw-material-resources/closed-resources" element={<ClosedRequests />}></Route>
            <Route path="/raw-material-resources/resource-issues" element={<ResourceIssues />}></Route>
            <Route path="/raw-material-resources/issues-on-hold" element={<IssuesOnHold />}></Route>
            <Route path="/raw-material-resources/closed-issues" element={<ClosedIssues />}></Route>

            <Route path="/research-development" element={<ResearchAndDevelopment />}></Route>
            <Route path="/profile" element={<Profile />}></Route>




            <Route path="/*" element={<PageNotFound />}></Route>

        </Routes>
        <Footer />
    </div>
  )
}

export default ServiceRoutes