import PageURL from 'app/PageURL';
import { Route } from 'types/route';
import Dashboard from 'views/pages/Dashboard';

const PrivateRoute: Route[] = [
  {
    path: PageURL.Dashboard,
    element: Dashboard,
  },
];

export default PrivateRoute;
