/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root';
import { Route as DetailImport } from './routes/detail';
import { Route as LayoutImport } from './routes/_layout';
import { Route as IndexImport } from './routes/index';

// Create/Update Routes

const DetailRoute = DetailImport.update({
  path: '/detail',
  getParentRoute: () => rootRoute,
} as any);

const LayoutRoute = LayoutImport.update({
  id: '/_layout',
  getParentRoute: () => rootRoute,
} as any);

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any);

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/';
      path: '/';
      fullPath: '/';
      preLoaderRoute: typeof IndexImport;
      parentRoute: typeof rootRoute;
    };
    '/_layout': {
      id: '/_layout';
      path: '';
      fullPath: '';
      preLoaderRoute: typeof LayoutImport;
      parentRoute: typeof rootRoute;
    };
    '/detail': {
      id: '/detail';
      path: '/detail';
      fullPath: '/detail';
      preLoaderRoute: typeof DetailImport;
      parentRoute: typeof rootRoute;
    };
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({ IndexRoute, DetailRoute });

/* prettier-ignore-end */
