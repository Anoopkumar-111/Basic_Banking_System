import React from 'react';
import { NavLink } from 'react-router-dom';

import cc from '../Images/cc.png';
import '../index.css';
const Home = () => {
    return (
        <div className="py-4">
        <img src={cc} className="img-fluid hars" alt="Responsive"></img>
        <div className="qq">
            <h1 className="heading">
                BASIC
                BANKING
                SYSTEM
            </h1>
            <div><div>
            <p className="subheading">
                Transfer Money Anytime Anywhere
            </p></div>
            <div className="row">
                <div className=" col-4">
                <NavLink className="btn btn-info my-sm-0" exact to="/viewCustomer" role="button">View All Customers</NavLink>
                </div>
                <div className=" col-4">
                <NavLink className="btn btn-success  my-sm-0" exact to="/transfer" role="button">Transfer to Another Account</NavLink>
                </div>
                <div className="col-4">
                <NavLink className="btn btn-warning  my-sm-0" exact to="/transactions" role="button">Transactions History</NavLink>
                </div>
            </div>
        </div>
    </div>
</div>
    );
};

export default Home;
