import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AddService from './Components/AddService/AddService';
import BookingService from './Components/BookingService/BookingService';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import MyOrders from './Components/MyOrders/MyOrders';
import Services from './Components/Services/Services';
import AuthProvider from './Context/AuthProvider';
import ManageOrderItem from './Components/ManageOrderItem/ManageOrderItem';
import ManageOrder from './Components/Manage Orders/ManageOrder';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import UpdateStatus from './Components/UpdateStatus/UpdateStatus';
import About from './Components/About/About';
import AddHotel from './Components/AddHotels/AddHotel';
import Hotels from './Components/Hotels/Hotels';
import DashBoard from './Components/DashBoard/DashBoard';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div>
     <AuthProvider>
     <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>

          <Route path='/addService'>
            <AddService></AddService>
          </Route>

          <Route path='/services'>
            <Services></Services>
          </Route>

          <PrivateRoute path='/bookingService/:serviceId'>
            <BookingService></BookingService>
          </PrivateRoute>

          <Route path='/myOrders'>
            <MyOrders></MyOrders>
          </Route>

          <Route path='/manageOrder'>
            <ManageOrder></ManageOrder>

          </Route>

          <Route path='/updateStatus/:statusId'>
           <UpdateStatus></UpdateStatus>
          </Route>
          <Route path='/about'>
            <About></About>
          </Route>

          <Route path='/addHotel'>
            <AddHotel></AddHotel>
          </Route>
          <Route path='/hotels'>
            <Hotels></Hotels>
          </Route>
          <Route path='/dashBoard'>
            <DashBoard></DashBoard>
          </Route>

          <Route path='/footer'>
            <Footer></Footer>
          </Route>



        </Switch>
        <Footer></Footer>
      </Router>
     </AuthProvider>


    </div>
  );
}

export default App;
