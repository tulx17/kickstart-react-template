import { useRoutes } from 'react-router-dom';

import { routes } from './configurations';

function Router () {
    const router = useRoutes(routes);

    return router;
}

export default Router;