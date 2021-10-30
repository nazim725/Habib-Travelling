import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import AuthProvider from '../../Context/AuthProvider';
import AddHotel from '../AddHotels/AddHotel';
import AddService from '../AddService/AddService';
import DashBoardBannar from '../DashBoardBannar/DashBoardBannar';
import ManageOrder from '../Manage Orders/ManageOrder';
import MyOrders from '../MyOrders/MyOrders';
import Navbar from '../Navbar/Navbar';
import UpdateStatus from '../UpdateStatus/UpdateStatus';

const DashBoard = () => {
    return (
        <div>
            <AuthProvider>
                <Router>
                    <Navbar></Navbar>


                    <Switch>
                        <Route exact path='/dashboard/'>
                            <DashBoardBannar></DashBoardBannar>
                        </Route>
                        <Route path='/myOrders'>
                            <MyOrders></MyOrders>
                        </Route>
                        <Route path='/manageOrder'>
                            <ManageOrder></ManageOrder>

                        </Route>
                        <Route path='/addHotel'>
                            <AddHotel></AddHotel>
                        </Route>
                        <Route path='/addService'>
                            <AddService></AddService>
                        </Route>

                        <Route path='/updateStatus/:statusId'>
                            <UpdateStatus></UpdateStatus>
                        </Route>

                    </Switch>
                </Router>
            </AuthProvider>
        </div>
    );
};

export default DashBoard;