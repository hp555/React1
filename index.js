var React = require('react');
var ReactDOM = require('react-dom');
import App from './App.jsx';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);
