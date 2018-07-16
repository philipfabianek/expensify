import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import createHistory from "history/createBrowserHistory";

import LoginPage from "./../components/login/LoginPage";
import Dashboard from "./../components/dashboard/Dashboard";
import AddExpense from "./../components/add-expense/AddExpense";
import EditExpense from "./../components/edit-expense/EditExpense";
import Important from "./../components/important/Important";
import NotFoundPage from "./../components/not-found/NotFoundPage";

import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path="/" exact={true} component={LoginPage} />
                <PrivateRoute path="/create" component={AddExpense} />
                <PrivateRoute path="/dashboard" component={Dashboard} />
                <PrivateRoute path="/edit" exact={true} component={EditExpense} />
                <PrivateRoute path="/edit/:id" component={EditExpense} />
                <PrivateRoute path="/important" component={Important} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;
