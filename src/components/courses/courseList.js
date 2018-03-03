const React = require('react');
const { Link } = require('react-router');
const CourseActions = require('../../actions/courseActions');

class CourseList extends React.Component {
    constructor(props) {
        super(props);
    }

    deleteCourse(courseId, event) {
        CourseActions.deleteCourse(courseId);
    }

    render() {
        
        const createCourseRow = (course) => {
            return (
                <tr key={course.id}>
                    <td><a href={course.watchHref}>Watch</a></td>
                    <td><a onClick={(event) => this.deleteCourse(course.id, event)}>Delete</a></td>
                    <td><Link to="manageCourse" params={{id: course.id}}>{course.title}</Link></td>
                    <td>{course.author.name}</td>
                    <td>{course.category}</td>
                    <td>{course.length}</td>
                </tr>
            );
        };

        return (
            <table className="table">
                    <thead>
                        <th></th>
                        <th></th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Category</th>
                        <th>Length</th>
                    </thead>
                    <tbody>
                        {this.props.courses.map(createCourseRow)}
                    </tbody>
            </table>
        );
    }
}

module.exports = CourseList;