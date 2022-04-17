import { RouteObject } from 'react-router-dom';

const routes: RouteObject[] = [
    {
        path: '/admin',
        element: 'Admin Home',
    },
    {
        path: '/admin/users',
        element: 'Admin Users',
    }
];

export default routes;