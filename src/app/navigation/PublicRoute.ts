import PageURL from 'app/PageURL';
import { Route } from 'types/route';
import Login from 'views/pages/Login';

const PublicRoute: Route[] = [
  {
    path: PageURL.Login,
    element: Login,
  },
];

export default PublicRoute;
