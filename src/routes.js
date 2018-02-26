
const React = require('react');
const Router = require('react-router');

const { DefaultRoute, Route } = Router;

const routes = (
    <Route name="app" path="/" handler={require('./components/app')}>
        <DefaultRoute handler={require('./components/homePage')}/>
        <Route name="authors" handler={require('./components/authors/authorPage')}/>
        <Route name="about" handler={require('./components/about/aboutPage')}/>
    </Route>
);

module.exports = routes;