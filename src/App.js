import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Navbar from "./Components/Navbar";
import Home from './Components/Home';
import Service from './Components/Service';
import About from './Components/About';
import Contact from './Components/Contact';
import Signin from './Components/Signin';
import "./App.css";
function App() {
  return (
    <div className="App">
      <header className="App-header">
       <BrowserRouter>
       <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/service' element={<Service/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/signin' element={<Signin/>}></Route>
        </Routes>
       </BrowserRouter>
      </header>
    </div>
  );
}
export default App;
