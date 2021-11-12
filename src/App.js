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
import NotFound from "./Components/NotFound/NotFound";
import Footer from "./Components/Footer/Footer";


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
      <Route  path="/Login">
      <Login></Login>
      </Route>
      <Route  path = "/addService">
      <AddService></AddService>
      </Route>
       <Route  path="/Register">
      <Register></Register>
      </Route> 
      <Route  path="/Shipping">
      <Shipping></Shipping>
      </Route> 
      <PrivateRoute  path="/AddService">
      <AddService></AddService>
      </PrivateRoute> 
      <PrivateRoute  path="/MakeAdmin">
      <MakeAdmin></MakeAdmin>
      </PrivateRoute> 
         
      <PrivateRoute  path="/Dashboard">
      <Dashboard></Dashboard>
      </PrivateRoute> 
      <PrivateRoute  path="/AddReview">
      <AddReview></AddReview>
      </PrivateRoute> 
      <PrivateRoute path="/ManageAllOrder">
      <ManageAllOrder></ManageAllOrder>
      </PrivateRoute> 
      <Route path="/AllProducts">
      <AllProducts></AllProducts>
      </Route> 
      
      <PrivateRoute exact path="/PayMent">
      <PayMent></PayMent>
      </PrivateRoute> 
      <PrivateRoute path = "/MyOrder">
         <MyOrder></MyOrder>
      </PrivateRoute> 
      <Route exact path="*">
      <NotFound></NotFound>
      </Route> 
      </Switch>   
      <Footer></Footer> 
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
