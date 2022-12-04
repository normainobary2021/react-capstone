import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import React from 'react';
import store from '../redux/configureStore';
import Home from '../components/Coins/coins';

describe('Testing coins component if: ', () => {
  it('It renders all the coins', () => {
    const bundle = render(
      <React.StrictMode>
        <Provider store={store}>
          <Router>
            <Home />
          </Router>
        </Provider>
      </React.StrictMode>,
    );
    expect(bundle).toMatchSnapshot();
  });
});
