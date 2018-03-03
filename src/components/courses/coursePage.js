
const React = require('react');
const CourseApi = require('../../api/courseApi');
const CourseList = require('./courseList');
const { Link } = require('react-router');
const CourseStore = require('../../stores/courseStore');

class CoursePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            courses: CourseStore.getAllCourses()
        };
    }

    _onChange() {
        this.setState({
            courses: CourseStore.getAllCourses()
        });
    }

    componentWillMount() {
        CourseStore.addChangeListener(this._onChange.bind(this));
    }

    componentWillUnmount() {
        CourseStore.removeChangeListener(this._onChange.bind(this));
    }

    render() {
        return (
            <div>
                <h1>Course Page</h1>
                <Link to="addCourse" className="btn btn-default">Add Course</Link>
                <CourseList courses={this.state.courses}/>
            </div>
        );
    }
}

module.exports = CoursePage;