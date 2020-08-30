import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
    msg =  React.createElement('h1', {className: 'site-heading'}, 'Hello, React!');

    render() {
        return (
            React.createElement('div', {className: 'container'}, this.msg)
        )
    }
}

export default App