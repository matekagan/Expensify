import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import ExpenseDashboardPage from '../components/pages/ExpenseDashboardPage';
import AddExpensesPage from '../components/pages/AddExpensePage';
import EditExpensesPage from '../components/pages/EditExpensePage';
import HelpPage from '../components/pages/HelpPage';
import SignInPage from '../components/pages/LoginPage';
import NotFoundPage from '../components/pages/NotFoundPage';
import NavHeader from '../components/presentational/Header';
import { PrivateRoute } from './PrivateRoute';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <NavHeader />
            <Switch>
                <Route
                    path="/"
                    component={SignInPage}
                    exact={true}
                />
                <PrivateRoute
                    path="/dashboard"
                    component={ExpenseDashboardPage}
                />
                <PrivateRoute
                    path="/create"
                    component={AddExpensesPage}
                />
                <PrivateRoute
                    path="/edit/:id"
                    component={EditExpensesPage}
                />
                <Route
                    path="/help"
                    component={HelpPage}
                />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;
