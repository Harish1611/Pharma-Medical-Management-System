import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import AdminRoutes from './Routes/AdminRoutes';
import ServiceRoutes from './Routes/ServiceRoutes';
import PageNotFound from './Pages/PageNotFound';

function App() {
  return (
    <div>
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route path="/*" element={<ServiceRoutes />} />
          <Route path="/admin/*" element={<AdminRoutes />} />
          <Route path="*" element={<PageNotFound />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
