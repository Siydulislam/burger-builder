import React from 'react';
import BurgerBuilder from './BurgerBuilder/BurgerBuilder';
import Header from './Header/Header';
import { Route } from 'react-router-dom';
import Orders from './Orders/Orders';
import Checkout from './Orders/Checkout/Checkout';
import Auth from './Auth/Auth';

const Main = props => {
    return (
        <div>
            <Header></Header>
            <div className="container">
                <Route path="/orders" component={Orders}></Route>
                <Route path="/checkout" component={Checkout}></Route>
                <Route path="/login" component={Auth}></Route>
                <Route path="/" exact component={BurgerBuilder}></Route>
            </div>
        </div>
    )
}

export default Main;