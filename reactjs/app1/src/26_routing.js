import ReactDOM from 'react-dom/client';
import Home from './components/home';
import Aboutus from './components/aboutus';
import Product from './components/products';
import Service from './components/services';
import Contactus from './components/contactus';
import PageNotFound from './components/pagenotfound';
import './site.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
function MyRouter()
{
    return (<BrowserRouter>
        <Routes>
            {/* home page */}
            <Route path='/' index element={<Home />} />
            <Route path='/aboutus' element={<Aboutus />} />
            <Route path='/product' element={<Product />} />
            <Route path='/Service' element={<Service />} />
            <Route path='/Contactus' element={<Contactus />} />
            
            { /* define 404 Route */ }
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    </BrowserRouter>)
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(MyRouter());