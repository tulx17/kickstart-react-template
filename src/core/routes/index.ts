import { RouteObject } from 'react-router-dom';
import adminRoutes from './admin';
import othersRoutes from './others';

const routes: RouteObject[] = [
    {
        path: '/',
        element: 'Home',
    },
    ...adminRoutes,
    ...othersRoutes,
];

export default routes;