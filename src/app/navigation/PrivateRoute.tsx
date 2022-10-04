import PageURL from 'app/PageURL';
import { lazy } from 'react';
import { Route } from 'types/route';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CategoryIcon from '@mui/icons-material/Category';
import DescriptionIcon from '@mui/icons-material/Description';
import CodeIcon from '@mui/icons-material/Code';

const PrivateRoute: Route[] = [
  {
    name: 'Page.Dashboard.Name',
    path: PageURL.Dashboard,
    icon: <DashboardIcon />,
    element: lazy(() => import('views/pages/Dashboard')),
  },
  {
    name: 'Page.Product.Name',
    path: PageURL.Product,
    icon: <DescriptionIcon />,
    element: lazy(() => import('views/pages/Dashboard')),
  },
  {
    name: 'Page.Category.Name',
    path: PageURL.Category,
    icon: <CategoryIcon />,
    element: lazy(() => import('views/pages/Dashboard')),
  },
  {
    name: "Developer",
    icon: <CodeIcon />,
    children: [
      {
        name: "Component Button",
        element: lazy(() => import('views/pages/Dashboard')),
        path: "user-group",
      },
      {
        name: "Component Table",
        element: lazy(() => import('views/pages/Dashboard')),
        path: "user-group",
      },
    ]
  },
];

export default PrivateRoute;
