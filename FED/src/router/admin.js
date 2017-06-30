import IndexSuper from '../components/admin/index-super';
import IndexCampus from '../components/admin/index-campus';
import IndexAcademy from '../components/admin/index-academy';
import Login from '../components/admin/login';

const adminRouter = [
    {
        path: '/admin/super',
        component: IndexSuper,
    },
    {
        path: '/admin/campus',
        component: IndexCampus,
    },
    {
        path: '/admin/academy',
        component: IndexAcademy,
    },
    {
        path: '/login-for-admin',
        component: Login
    }
];

export {adminRouter};
