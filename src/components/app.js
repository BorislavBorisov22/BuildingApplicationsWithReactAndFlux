const React = require('react');

const Home = require('./homePage');
const Header = require('./common/header');
const { RouteHandler } = require('react-router');

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div>
                <Header />
                <RouteHandler />
            </div>
        );
    }
}

module.exports = App;