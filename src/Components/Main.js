import React, { Component } from 'react';
import BurgerBuilder from './BurgerBuilder/BurgerBuilder';
import Header from './Header/Header';
import { Route, Switch, Redirect } from 'react-router-dom';
import Orders from './Orders/Orders';
import Checkout from './Orders/Checkout/Checkout';
import Auth from './Auth/Auth';
import { connect } from 'react-redux';
import { authCheck } from '../redux/authActionCreators';
import Logout from './Auth/Logout';

const mapStateToProps = state => {
    return {
        token: state.token
    }
}

const mapDispatchToProps = dispatch => {
    return {
        authCheck: () => dispatch(authCheck())
    }
}

class Main extends Component {
    componentDidMount() {
        this.props.authCheck();
    }
    render() {
        let routes = null;
    if(this.props.token === null) {
        routes = (
            <Switch>
                <Route path="/login" component={Auth}></Route>
                <Redirect to="/login" />
            </Switch>
        )
    } else {
        routes = (
            <Switch>
                <Route path="/orders" component={Orders}></Route>
                <Route path="/checkout" component={Checkout}></Route>
                <Route path="/logout" component={Logout}></Route>
                <Route path="/" exact component={BurgerBuilder}></Route>
                <Redirect to="/" />
            </Switch>
        )
    }
    return (
        <div>
            <Header></Header>
            <div className="container">
                {routes}
            </div>
        </div>
    )
    }
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);