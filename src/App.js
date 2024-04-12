import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
  Link,
  BrowserRouter,
  Navigate
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
  const {currentUser} = useContext(AuthContext)
  const ProtectedRoute = ({children}) => {
    if(!currentUser){
      return <Navigate to="/login" />
    }
    return children
  };
  // const ProtectedRoute = ({ children }) => {
  //   return currentUser ? children : <Navigate to="/login" />;
  // };

  return (
      // {/* <Login /> */} 
      // {/* <Register />  */}
      // {/* <Home /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />         
        </Routes>
      </BrowserRouter>
    
  );
}

export default App;
