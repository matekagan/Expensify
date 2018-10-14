import React from 'react';
import {
    BrowserRouter, Route, Switch
} from 'react-router-dom';
import ExpenseDashboardPage from '../components/pages/ExpenseDashboardPage';
import AddExpensesPage from '../components/pages/AddExpensePage';
import EditExpensesPage from '../components/pages/EditExpensePage';
import HelpPage from '../components/pages/HelpPage';
import NotFoundPage from '../components/pages/NotFoundPage';
import Header from '../components/presentational/Header';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route
                    path="/"
                    component={ExpenseDashboardPage}
                    exact={true}
                />
                <Route
                    path="/create"
                    component={AddExpensesPage}
                />
                <Route
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
    </BrowserRouter>
);

export default AppRouter;
