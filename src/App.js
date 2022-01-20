import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from './Container/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Container/Navbar';
import ViewCustomer from "./Container/ViewCustomer";
import Transfer from './Container/Transfer';
import PageNotFound from './Container/PageNotFound';
import Transactions from "./Container/History";

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/viewCustomer" component={ViewCustomer}/>
                    <Route exact path="/transfer" component={Transfer}/>
                    <Route exact path="/transactions" component={Transactions} />
                    <Route component={PageNotFound}/>
                </Switch>
            </div>
        </Router>
    )
}

export default App;