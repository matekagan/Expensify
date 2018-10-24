import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import ExpenseDashboardPage from '../components/pages/ExpenseDashboardPage';
import AddExpensesPage from '../components/pages/AddExpensePage';
import EditExpensesPage from '../components/pages/EditExpensePage';
import SignInPage from '../components/pages/LoginPage';
import NotFoundPage from '../components/pages/NotFoundPage';
import PrivatePage from './PrivateRoute';
import PublicPage from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicPage
                    path="/"
                    component={SignInPage}
                    exact={true}
                />
                <PrivatePage
                    path="/dashboard"
                    component={ExpenseDashboardPage}
                />
                <PrivatePage
                    path="/create"
                    component={AddExpensesPage}
                />
                <PrivatePage
                    path="/edit/:id"
                    component={EditExpensesPage}
                />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;
