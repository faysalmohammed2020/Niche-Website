import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import MyOrder from "./Components/MyOrder/MyOrder";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Register from "./Components/Register/Register";
import AuthProvider from "./context/AuthProvider";

function App() {
  return (
   
    <AuthProvider>
      <BrowserRouter>
     <Header></Header>
      <Switch>
      <Route exact path="/">
      <Home></Home>
      </Route>
      <Route exact path="/Home">
      <Home></Home>
      </Route>
      <Route exact path="/Login">
      <Login></Login>
      </Route>
       <Route exact path="/Register">
      <Register></Register>
      </Route> 
      <PrivateRoute path = "/MyOrder">
         <MyOrder></MyOrder>
      </PrivateRoute>
      </Switch>    
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
