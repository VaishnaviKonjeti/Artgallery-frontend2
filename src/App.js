import './App.css';
import Loginform from './components/Login';
import {BrowserRouter, Routes , Route} from "react-router-dom"
import Registration from './components/Registration';
import Front from './components/front';
import Navbar from './components/Navbar';
import About from './components/About';
import Author from './components/Artists';
import Drawings from './components/Drawings';
import ContactUs from './components/Contactus';
import Sculptures from './components/Sculptures';
import Paintings from './components/Paintings';
import Payment from './components/Payment';
import  Exhibitions  from './components/Exhibitions';

function App() {

  return (
    <div>
      <Navbar/>
      <BrowserRouter>
     <Routes>
              <Route path='/' element={<Front/>}/>
              <Route path='/Loginform' element={<Loginform/>}/>
              <Route path='/reg' element={<Registration/>}/>
              <Route path='/About' element={<About/>}/> 
              <Route path='/Contactus' element={<ContactUs/>}/>   
              <Route path='/Payment' element={<Payment/>}/>
              <Route path='/Artist' element={<Author/>}/>
              <Route path='/Sculptures' element={<Sculptures/>}/>
              <Route path='/Paintings' element={<Paintings/>}/>
              <Route path='/Drawings' element={<Drawings/>}/>
              <Route path="/payment" component={Payment} />
              <Route path="/Exhibitions" element={<Exhibitions/>}/>
      </Routes>


            </BrowserRouter>
            
    </div>
  
   
  );
}

export default App;