import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import AdminRoutes from './Routes/AdminRoutes';
import ServiceRoutes from './Routes/ServiceRoutes';
import PageNotFound from './Pages/PageNotFound';
import Nav from './Components/Nav/Nav';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div>
      
      <BrowserRouter>
        <Routes >

          <Route path="/*" element={<ServiceRoutes />} />
          <Route path="/admin/*" element={<AdminRoutes />} />
          <Route path="*" element={<PageNotFound />} />

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
