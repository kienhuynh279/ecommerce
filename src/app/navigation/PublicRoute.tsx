import PageURL from 'app/PageURL';
import { IRoute } from 'types/route';
import Login from 'views/pages/Login';

const PublicRoute: IRoute[] = [
  {
    path: PageURL.Login,
    element: Login,
  },
];

export default PublicRoute;
