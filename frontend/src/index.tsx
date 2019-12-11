import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import Sample from './components/Sample';
import configureStore from './configureStore';

interface IProps {}
const Root: React.FC<IProps> = () => {
    const history = createBrowserHistory();
    const initialState = window.initialReduxState;
    const store = configureStore(history, initialState);

    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <Switch>
                    <Route path="/" exact component={App} />
                    <Route path="/sample" component={Sample} />
                </Switch>
            </ConnectedRouter>
        </Provider>
    );
};

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
