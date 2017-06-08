//@flow
const React = require('react');
const ReactDOM = require('react-dom');
const TestApp = require('./TestApp');

// eslint-disable-next-line
if(process.env.NODE_ENV !== 'production') {
    window.perf = require('react-addons-perf');
}

ReactDOM.render(
    <TestApp />,
    document.getElementById('app-container')
);
