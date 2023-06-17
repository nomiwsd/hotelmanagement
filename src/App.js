
import './App.css';
import { Routes,Route, BrowserRouter} from 'react-router-dom'
import Homepage from './Components/Homepage/Homepage';
import Booktable from './Components/BookTable/Booktable';
import Login from './Components/Loginpage/Login';
import Signup from './Components/Signuppage/Signup';
import Order from './Components/Order/Order';
function App() {
  return (
    <div className="App">
<BrowserRouter>
<Routes>
  <Route exact path='/Homepage' element={<Homepage/>}/>
  <Route exact path='/' element={<Homepage/>}/>
  <Route exact path='/Booktable' element={<Booktable/>}/>
  <Route exact path='/Login' element={<Login/>}/>
  <Route exact path='/Signup' element={<Signup/>}/>
  <Route exact path='/Order' element={<Order/>}/>
  
  </Routes>
  </BrowserRouter>
      
    </div>
  );
}

export default App;
