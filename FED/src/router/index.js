import {adminRouter} from './admin';
import {teacherRouter} from './teacher';

import Login from '../components/login';
import Register from '../components/register';
import Register1 from '../components/register1';
import Register2 from '../components/register2';
import Register3 from '../components/register3';
import Index from '../components/index';
// import Admin from '../components/admin';

import Home from '../components/home';
import ClassItem from '../components/class';
import Organization from '../components/organization';
import Campus from '../components/campus';
import Experiment from '../components/experiment';
import Message from '../components/message';
import Personal from '../components/personal';
import Settings from '../components/settings';

import ClassAll from '../components/catalog/class/class-all';
import ClassHomework from '../components/catalog/class/class-homework';
import ClassHomeworkDetail from '../components/catalog/class/class-homework-detail';
import ClassDiscuss from '../components/catalog/class/class-discuss';
import ClassDiscussDetail from '../components/catalog/class/class-discuss-detail';
import ClassResource from '../components/catalog/class/class-resource';

import OrganizationIndex from '../components/catalog/organization/index';
import OrganizationHome from '../components/catalog/organization/home';
import OrganizationDiscuss from '../components/catalog/organization/discuss';
import OrganizationActivity from '../components/catalog/organization/activity';
import OrganizationDiscussDetail from '../components/catalog/organization/discuss-detail';

import SettingsInfo from '../components/catalog/settings/settings-info';
import SettingsPhoto from '../components/catalog/settings/settings-photo';

const userRouter = [
    {
        path: '/',
        component: Index,
        children: [
            {
                path: '',
                redirect: 'home',
            },
            {
                path: 'home',
                component: Home,
            },
            {
                path: 'class',
                component: ClassItem,
                children: [
                    {
                        path: '',
                        redirect: 'all'
                    },
                    {
                        path: 'all',
                        component: ClassAll
                    },
                    {
                        path: 'homework',
                        component: ClassHomework
                    },
                    {
                        path: 'homework-detail',
                        component: ClassHomeworkDetail
                    },
                    {
                        path: 'discuss',
                        component: ClassDiscuss
                    },
                    {
                        path: 'discuss-detail',
                        component: ClassDiscussDetail
                    },
                    {
                        path: 'resource',
                        component: ClassResource
                    },
                ]
            },
            {
                path: 'organization',
                component: Organization
            },
            {
                path: 'organization/:id',
                component: OrganizationIndex,
                children: [
                    {
                        path: '',
                        redirect: 'home'
                    },
                    {
                        path: 'home',
                        component: OrganizationHome
                    },
                    {
                        path: 'discuss',
                        component: OrganizationDiscuss
                    },
                    {
                        path: 'discuss/:discussId',
                        component: OrganizationDiscussDetail
                    },
                    {
                        path: 'activity',
                        component: OrganizationActivity
                    },
                ]
            },
            {
                path: 'campus',
                component: Campus
            },
            {
                path: 'experiment',
                component: Experiment
            },
            {
                path: 'message',
                component: Message
            },
            {
                path: 'personal',
                component: Personal
            },
            {
                path: 'settings',
                component: Settings,
                children: [
                    {
                        path: '',
                        redirect: 'info'
                    },
                    {
                        path: 'info',
                        component: SettingsInfo
                    },
                    {
                        path: 'photo',
                        component: SettingsPhoto
                    },
                ]
            },
        ]
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/register',
        component: Register1
    },
    {
        path: '/verify-email',
        component: Register2
    },
    {
        path: '/patch-info',
        component: Register3
    },
];

const all = userRouter.concat(adminRouter, teacherRouter);

export {all}
