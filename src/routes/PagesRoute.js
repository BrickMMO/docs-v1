import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
// import { element } from 'prop-types';
//import OverView from 'views/getting-started/overview';
// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// Getting-started routing
const OverView = Loadable(lazy(() => import('views/getting-started/overview') ));
const Installation = Loadable(lazy(() => import('views/getting-started/installation') ));
const Units = Loadable(lazy(() => import('views/getting-started/units') ));

// building routing
const BuildingOverView = Loadable(lazy(() => import('views/building/overview') ));
const Blocks = Loadable(lazy(() => import('views/building/blocks') ));
const Satellite = Loadable(lazy(() => import('views/building/satellite') ));

// Cli routing
const CLIInstallation = Loadable(lazy(()=> import('views/cli/installation')))
// ==============================|| Page ROUTING ||============================== //

const PagesRoute = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    {
      path: 'getting-started',
      children: [
        {
          path: 'overview',
          element: <OverView />
        },
        {
          path: 'installation',
          element: <Installation />
        },
        {
          path: 'units',
          element: <Units />
        }
      ]
    },
    {
      path: 'building',
      children: [
        {
          path: 'overview',
          element: <BuildingOverView />
        },
        {
          path: 'blocks',
          element: <Blocks />
        },
        {
          path: 'satellite',
          element: <Satellite />
        }
      ]
    },
    {
      path: 'cli',
      children: [
        {
          path: 'installation',
          element: <CLIInstallation />
        }
      ]
    }
  ]
};

export default PagesRoute;
