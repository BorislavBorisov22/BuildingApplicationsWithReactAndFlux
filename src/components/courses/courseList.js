const React = require('react');
const { Link } = require('react-router');

class CourseList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        
        const createCourseRow = (course) => {
            return (
                <tr key={course.id}>
                    <td><a href={course.watchHref}>Watch</a></td>
                    <td><a href={course.watchHref}>Delete</a></td>
                    <td><Link to="manageAuthor" params={{id: course.id}}>{course.id}</Link></td>
                    <td>{course.title}</td>
                    <td>{course.category}</td>
                    <td>{course.lenght}</td>
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