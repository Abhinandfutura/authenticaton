import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Login from './Auth/Login';
import Register from './Auth/Register';
import Protected from './Auth/Protected';
import Home from '../src/Auth/Home' 
import {ToastContainer} from 'react-toastify'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">

      
      <BrowserRouter>
    
      
      <Routes>

        <Route exact  path='/' element={<Login/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/register' element={<Register/>}/>
        

        <Route path='/home' element={<Protected component={Home} />} />
        
 

        {/* <Protected exact path='/home' element={ Home}/> */}
      

        </Routes>
        <ToastContainer/>
      
        </BrowserRouter>
    
    </div>
  );
}

export default App;
