const $ = jQuery = require('jquery');
const React = require('react');
const Router = require('react-router');
const routes = require('./routes');

const initApp = require('./actions/initializeActions');
initApp.initApp();

Router.run(routes, (Handler) => {
    React.render(<Handler/>, document.getElementById('app'));
});