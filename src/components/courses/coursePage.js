
const React = require('react');
const CourseApi = require('../../api/courseApi');
const CourseList = require('./courseList');
const { Link } = require('react-router');

class CoursePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            courses: CourseApi.getAllCourses()
        };
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