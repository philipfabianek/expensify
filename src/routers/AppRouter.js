import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import createHistory from "history/createBrowserHistory";

import AddExpense from "./../components/add-expense/AddExpense";
import EditExpense from "./../components/edit-expense/EditExpense";
import Dashboard from "./../components/dashboard/Dashboard";
import LoginPage from "./../components/login/LoginPage";
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
                <PrivateRoute path="/edit/:id" component={EditExpense} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;
