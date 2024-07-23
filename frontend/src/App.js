import "./App.css";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import CartProvider from "./components/ContextReducer";


const router = createBrowserRouter(createRoutesFromElements(
<Route>
<Route path="/" element={<Home/>}/>
<Route path="/login" element={<Login/>}/>
<Route path="/signup" element={<Signup/>}/>

</Route>));

function App() {
  return <div className="App">
    <CartProvider>
    <RouterProvider router={router}/>
    </CartProvider>
    
  </div>;
}

export default App;
