/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as AboutImport } from './routes/about'

// Create Virtual Routes

const OrderLazyImport = createFileRoute('/order')()
const IndexLazyImport = createFileRoute('/')()

// Create/Update Routes

const OrderLazyRoute = OrderLazyImport.update({
  id: '/order',
  path: '/order',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/order.lazy').then((d) => d.Route))

const AboutRoute = AboutImport.update({
  id: '/about',
  path: '/about',
  getParentRoute: () => rootRoute,
} as any)

const IndexLazyRoute = IndexLazyImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutImport
      parentRoute: typeof rootRoute
    }
    '/order': {
      id: '/order'
      path: '/order'
      fullPath: '/order'
      preLoaderRoute: typeof OrderLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexLazyRoute
  '/about': typeof AboutRoute
  '/order': typeof OrderLazyRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexLazyRoute
  '/about': typeof AboutRoute
  '/order': typeof OrderLazyRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexLazyRoute
  '/about': typeof AboutRoute
  '/order': typeof OrderLazyRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/about' | '/order'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/about' | '/order'
  id: '__root__' | '/' | '/about' | '/order'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexLazyRoute: typeof IndexLazyRoute
  AboutRoute: typeof AboutRoute
  OrderLazyRoute: typeof OrderLazyRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexLazyRoute: IndexLazyRoute,
  AboutRoute: AboutRoute,
  OrderLazyRoute: OrderLazyRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.jsx",
      "children": [
        "/",
        "/about",
        "/order"
      ]
    },
    "/": {
      "filePath": "index.lazy.jsx"
    },
    "/about": {
      "filePath": "about.jsx"
    },
    "/order": {
      "filePath": "order.lazy.jsx"
    }
  }
}
ROUTE_MANIFEST_END */
