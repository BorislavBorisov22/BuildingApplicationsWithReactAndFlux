const Dispatcher = require('../dispatcher/appDispatcher');
const ActionTypes = require('../constants/actionTypes');
const { EventEmitter}  = require('events');

const CHANGE_EVENT = 'change';

let courses = [];

const CourseStore = Object.assign({}, EventEmitter.prototype, {
    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },
    emitChange(callback) {
        this.emit(CHANGE_EVENT);
    },
    getAllCourses() {
        return courses;
    },
    getCourseById(id) {
        return courses.find(a => a.id === id) || {};
    }
});

Dispatcher.register((action) => {
    switch(action.actionType) {
        case ActionTypes.CREATE_COURSE:
            courses.push(action.data);
            CourseStore.emitChange();
            break;
        case ActionTypes.INITIALIZE:
            courses = action.initialData.courses;
            CourseStore.emitChange();
            break;
        case ActionTypes.DELETE_COURSE:
            const courseId = action.data;
            const targetIndex = courses.findIndex(c => c.id === courseId);
            if (targetIndex >= 0) {
                courses.splice(targetIndex, 1);
                CourseStore.emitChange();
            }
            break;
        default: break;
    }
});

module.exports = CourseStore;
