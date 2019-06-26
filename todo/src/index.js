import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//redux imports
import { createStore } from 'redux'
import { Provider } from 'react-redux'

//importing our reducer
import reducer from './reducers/reducer'

const store = createStore(reducer)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
