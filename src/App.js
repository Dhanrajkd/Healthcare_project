
import './App.css';
import Navbar from './Navbar/Navbar';
import Navlink from './Navlink/Navlink';
import { Route,Routes } from 'react-router-dom';
import Footer from './Footer/Footer';
import Home from './Home/Home';
import Aboutus from './aboutus/Aboutus';
import Newproduct from './Newproduct/Newproduct';
import Parentcontext from './Parentcomponent/Parentcontext';
import Readmore from './readmore/Readmore';
import Productimages from './Productimages';
import Contactus from './Contactus/Contactus';
import Carrier from './Carrier/Carrier';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Navlink/>
      <Parentcontext>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path='/about' element={<Aboutus/>}/>
          <Route path='/product-detail/:category' element={<Newproduct/>}/>
          <Route path='/readmore/:id/:category' element={<Readmore/>}/>
          <Route path='/product_images' element={<Productimages/>} />
          <Route path='/contactus' element={<Contactus/>}/>
          <Route path='/carrier' element={<Carrier/>} />
        </Routes>
      </Parentcontext>
      <Footer/>  
    </div>
  );
}

export default App;
