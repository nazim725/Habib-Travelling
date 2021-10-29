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

          <Route path='/bookingService/:serviceId'>
            <BookingService></BookingService>
          </Route>

          <Route path='/myOrders'>
            <MyOrders></MyOrders>
          </Route>



        </Switch>
      </Router>
     </AuthProvider>


    </div>
  );
}

export default App;
