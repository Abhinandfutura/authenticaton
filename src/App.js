import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import Protected from "./Auth/Protected";
import Home from "../src/Auth/Home";
import { ToastContainer } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route element={<Protected />}>
            <Route path="/home" element={<Home />} />
          </Route>

          {/* <Route   path='/home'  element={<Protected component={{Home}} />}/> */}

          {/* <Protected exact path='/home' element={<Home  component={Home} />}/> */}

          {/* <Protected exact path='/home' element={ Home}/> */}

          {/* <Route path="*" element={<p>There's nothing here: 404!</p>} /> */}
        </Routes>

        <ToastContainer />
      </BrowserRouter>
    </div>
  );
}

export default App;
