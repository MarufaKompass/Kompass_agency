import Loadable from 'components/Loadable';

import { Suspense, lazy } from 'react';
import Typography from 'themes/overrides/Typography';

const DashboardDefault = Loadable(lazy(() => import('pages/dashboard')));
const DeActive = Loadable(lazy(() => import('pages/components-overview/agent/DeActive')));
const Active = Loadable(lazy(() => import('pages/components-overview/agent/Active')));
const MainLayout = Loadable(lazy(() => import('layout/MainLayout')));
const PrivateRoutes = Loadable(lazy(() => import('components/privateRoute/PrivateRoutes')));
const AgentBoard = Loadable(lazy(() => import('pages/components-overview/agentBoard/AgentBoard')));
const CreateAgentBoard = Loadable(lazy(() => import('pages/components-overview/agentBoard/CreateAgentBoard')));
const MainRoutes = {
  path: '/',
  element: (
    <Suspense fallback={<Typography>Loading...</Typography>}>
      <PrivateRoutes>
        <MainLayout />
      </PrivateRoutes>
    </Suspense>
  ),
  children: [
    {
      path: '/',
      element: (
        <Suspense fallback={<Typography>Loading...</Typography>}>
          <DashboardDefault />
        </Suspense>
      )
    },
    {
      path: 'dashboard',
      children: [
        {
          path: '',
          element: (
            <PrivateRoutes>
              <DashboardDefault />
            </PrivateRoutes>
          )
        }
      ]
    },
    {
      path: 'active',
      element: (
        <Suspense fallback={<Typography>Loading...</Typography>}>
          {' '}
          <PrivateRoutes>
            <Active></Active>
          </PrivateRoutes>
        </Suspense>
      )
    },
    {
      path: 'deactive',
      element: (
        <Suspense fallback={<Typography>Loading...</Typography>}>
          {' '}
          <PrivateRoutes>
            <DeActive></DeActive>
          </PrivateRoutes>
        </Suspense>
      )
    },
    {
      path: 'agent_board',
      element: (
        <Suspense fallback={<Typography>Loading...</Typography>}>
          {' '}
          <PrivateRoutes>
            <AgentBoard></AgentBoard>
          </PrivateRoutes>
        </Suspense>
      )
    },
    {
      path: 'create_agent',
      element: (
        <Suspense fallback={<Typography>Loading...</Typography>}>
          {' '}
          <PrivateRoutes>
            <CreateAgentBoard></CreateAgentBoard>
          </PrivateRoutes>
        </Suspense>
      )
    }
  ]
};

export default MainRoutes;
