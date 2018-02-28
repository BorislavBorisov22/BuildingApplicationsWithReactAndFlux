const React = require('react');
const { Link } = require('react-router');

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav className="navbar navbar-efault">
                <div className="container-fluid">
                    <ul className="nav navbar-nav">
                        <li><Link to="app">Home</Link></li>
                        <li><Link to="about">About</Link></li>
                        <li><Link to="authors">Authors</Link></li>
                        <li><Link to="courses">Courses</Link></li>
                    </ul>
                </div>
            </nav>
        );
    }
}

module.exports = Header;