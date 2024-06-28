import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore,applyMiddleware } from 'redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import rootReducer from './reducers';
import App from './pages/App';
import Tools from './pages/Tools';


const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/tools" element={<Tools />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);