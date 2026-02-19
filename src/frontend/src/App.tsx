import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createRouter, RouterProvider, createRoute, createRootRoute, Outlet } from '@tanstack/react-router';
import HomePage from './pages/HomePage';
import CommunityPage from './pages/CommunityPage';
import HousingPage from './pages/HousingPage';
import SupportPage from './pages/SupportPage';
import VolunteerPage from './pages/VolunteerPage';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Layout component that wraps all pages
function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

// Define routes
const rootRoute = createRootRoute({
  component: Layout,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
});

const communityRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/community',
  component: CommunityPage,
});

const housingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/housing',
  component: HousingPage,
});

const supportRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/support',
  component: SupportPage,
});

const volunteerRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/volunteer',
  component: VolunteerPage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  communityRoute,
  housingRoute,
  supportRoute,
  volunteerRoute,
]);

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
