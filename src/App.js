import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import AddService from "./Components/AddService/AddService";
import AddReview from "./Components/AddReview/AddReview";
import PayMent from "./Components/Payment/PayMent";
import Login from "./Components/Login/Login";
import MyOrder from "./Components/MyOrder/MyOrder";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Register from "./Components/Register/Register";
import AuthProvider from "./context/AuthProvider";
import ManageAllOrder from "./Components/ManageAllOrder/ManageAllOrder";
import AllProducts from "./Components/AllProducts/AllProducts";
import MakeAdmin from "./Components/MakeAdmin/MakeAdmin";
import Shipping from "./Components/Shipping/Shipping";


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
      <Route exact path = "/addService">
      <AddService></AddService>
      </Route>
       <Route exact path="/Register">
      <Register></Register>
      </Route> 
      <Route exact path="/Shipping">
      <Shipping></Shipping>
      </Route> 
      <PrivateRoute exact path="/AddService">
      <AddService></AddService>
      </PrivateRoute> 
      <PrivateRoute exact path="/MakeAdmin">
      <MakeAdmin></MakeAdmin>
      </PrivateRoute> 
         
      <PrivateRoute exact path="/Dashboard">
      <Dashboard></Dashboard>
      </PrivateRoute> 
      <PrivateRoute exact path="/AddReview">
      <AddReview></AddReview>
      </PrivateRoute> 
      <PrivateRoute exact path="/ManageAllOrder">
      <ManageAllOrder></ManageAllOrder>
      </PrivateRoute> 
      <PrivateRoute exact path="/AllProducts">
      <AllProducts></AllProducts>
      </PrivateRoute> 
      <PrivateRoute exact path="/PayMent">
      <PayMent></PayMent>
      </PrivateRoute> 
      <PrivateRoute path = "/MyOrder">
         <MyOrder></MyOrder>
      </PrivateRoute> 
      </Switch>    
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
