import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { Layout } from '../components/Layout';

export const Route = createRootRoute({
  component: () => {
    return (
      <>
        <Layout>
          <Outlet />
        </Layout>
        <TanStackRouterDevtools />
      </>
    );
  },
});
