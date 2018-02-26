const $ = jQuery = require('jquery');
const React = require('react');

const Home = require('./components/homePage');
const About = require('./components/about/aboutPage');
const Authors = require('./components/authors/authorPage');
const Header = require('./components/common/header');

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        let ChildComponent;

        switch(this.props.route) {
            case 'about': ChildComponent = About; break;
            case 'authors': ChildComponent = Authors; break;
            default: ChildComponent = Home; break;
        }

        return (
            <div>
                <Header />
                <ChildComponent />
            </div>
        );
    }
}

const render = () => {
    const route = window.location.hash.substring(1);
    React.render(<App route={route}/>, document.getElementById('app'));
};

window.addEventListener('hashchange', render);
render();