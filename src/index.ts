import React from 'react'
import ReactDOM from 'react-dom'

import App from './app'
import './index.css'

//ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(App, document.getElementById('root'));
ReactDOM.render(React.createElement('div', {className: 'container'}, "Hello"), document.getElementById('root'));
