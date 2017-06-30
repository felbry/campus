import Login from '../components/teacher/login';
import Index from '../components/teacher/index';

const teacherRouter = [
    {
        path: '/login-for-teacher',
        component: Login
    },
    {
        path: '/teacher',
        component: Index
    },
];

export {teacherRouter};
