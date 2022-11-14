import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Login from './components/login/Login';
import NotFound from './components/notfound/NotFound';
import About from './components/about/About';
import Appointments from './components/appointments/Appointments';
import store from './components/elements/store';
import Provider from 'react-redux/es/components/Provider';
import HomeAdmin from './components/admin/home/Home';
import PrivateRoutes from './components/admin/auth/Auth';
import Maintenance from './components/maintenance/Maintenance';

function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>        
          <Routes>
            <Route path='/auth' element={<PrivateRoutes />}>
              <Route path='/auth/admin' element={<HomeAdmin />} />
            </Route>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/about' element={<About />} />
            <Route path='/appointments' element={<Appointments />} />
            <Route path='/maintenance' element={<Maintenance />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
