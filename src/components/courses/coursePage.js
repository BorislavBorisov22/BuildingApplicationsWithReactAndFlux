
const React = require('react');
const CourseApi = require('../../api/courseApi');
const CourseList = require('./courseList');

class CoursePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            courses: CourseApi.getAllCourses()
        };
    }

    render() {
        console.log(this.state.courses);
        return (
            <div>
                <h1>Course Page</h1>
                <CourseList courses={this.state.courses}/>
            </div>
        );
    }
}

module.exports = CoursePage;