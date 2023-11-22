import { useRoutes } from 'react-router-dom';

// routes
import MainRoutes from './MainRoutes';
import PagesRoute from './PagesRoute';
import AuthenticationRoutes from './AuthenticationRoutes';

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
  return useRoutes([MainRoutes, PagesRoute, AuthenticationRoutes, ]);
}
