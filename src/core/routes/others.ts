import { RouteObject } from 'react-router-dom';

const routes: RouteObject[] = [
    {
        path: '/others',
        element: 'Others',
    },
    {
        path: '/others/about',
        element: 'About',
    },
    {
        path: '/others/meta',
        element: 'Meta',
    },
    {
        path: '*',
        element: 'NotFound',
    }
];

export default routes;