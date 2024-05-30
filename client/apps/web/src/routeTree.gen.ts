/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as SetupImport } from './routes/setup'
import { Route as SearchImport } from './routes/search'
import { Route as QueueImport } from './routes/queue'
import { Route as AdminImport } from './routes/admin'
import { Route as AuthenticatedImport } from './routes/_authenticated'
import { Route as IndexImport } from './routes/index'
import { Route as PlaylistIdImport } from './routes/playlist/$id'
import { Route as ArtistIdImport } from './routes/artist/$id'
import { Route as AlbumIdImport } from './routes/album/$id'
import { Route as AuthenticatedFilesImport } from './routes/_authenticated/files'

// Create/Update Routes

const SetupRoute = SetupImport.update({
  path: '/setup',
  getParentRoute: () => rootRoute,
} as any)

const SearchRoute = SearchImport.update({
  path: '/search',
  getParentRoute: () => rootRoute,
} as any)

const QueueRoute = QueueImport.update({
  path: '/queue',
  getParentRoute: () => rootRoute,
} as any)

const AdminRoute = AdminImport.update({
  path: '/admin',
  getParentRoute: () => rootRoute,
} as any)

const AuthenticatedRoute = AuthenticatedImport.update({
  id: '/_authenticated',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const PlaylistIdRoute = PlaylistIdImport.update({
  path: '/playlist/$id',
  getParentRoute: () => rootRoute,
} as any)

const ArtistIdRoute = ArtistIdImport.update({
  path: '/artist/$id',
  getParentRoute: () => rootRoute,
} as any)

const AlbumIdRoute = AlbumIdImport.update({
  path: '/album/$id',
  getParentRoute: () => rootRoute,
} as any)

const AuthenticatedFilesRoute = AuthenticatedFilesImport.update({
  path: '/files',
  getParentRoute: () => AuthenticatedRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/_authenticated': {
      id: '/_authenticated'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof AuthenticatedImport
      parentRoute: typeof rootRoute
    }
    '/admin': {
      id: '/admin'
      path: '/admin'
      fullPath: '/admin'
      preLoaderRoute: typeof AdminImport
      parentRoute: typeof rootRoute
    }
    '/queue': {
      id: '/queue'
      path: '/queue'
      fullPath: '/queue'
      preLoaderRoute: typeof QueueImport
      parentRoute: typeof rootRoute
    }
    '/search': {
      id: '/search'
      path: '/search'
      fullPath: '/search'
      preLoaderRoute: typeof SearchImport
      parentRoute: typeof rootRoute
    }
    '/setup': {
      id: '/setup'
      path: '/setup'
      fullPath: '/setup'
      preLoaderRoute: typeof SetupImport
      parentRoute: typeof rootRoute
    }
    '/_authenticated/files': {
      id: '/_authenticated/files'
      path: '/files'
      fullPath: '/files'
      preLoaderRoute: typeof AuthenticatedFilesImport
      parentRoute: typeof AuthenticatedImport
    }
    '/album/$id': {
      id: '/album/$id'
      path: '/album/$id'
      fullPath: '/album/$id'
      preLoaderRoute: typeof AlbumIdImport
      parentRoute: typeof rootRoute
    }
    '/artist/$id': {
      id: '/artist/$id'
      path: '/artist/$id'
      fullPath: '/artist/$id'
      preLoaderRoute: typeof ArtistIdImport
      parentRoute: typeof rootRoute
    }
    '/playlist/$id': {
      id: '/playlist/$id'
      path: '/playlist/$id'
      fullPath: '/playlist/$id'
      preLoaderRoute: typeof PlaylistIdImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexRoute,
  AuthenticatedRoute: AuthenticatedRoute.addChildren({
    AuthenticatedFilesRoute,
  }),
  AdminRoute,
  QueueRoute,
  SearchRoute,
  SetupRoute,
  AlbumIdRoute,
  ArtistIdRoute,
  PlaylistIdRoute,
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/_authenticated",
        "/admin",
        "/queue",
        "/search",
        "/setup",
        "/album/$id",
        "/artist/$id",
        "/playlist/$id"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/_authenticated": {
      "filePath": "_authenticated.tsx",
      "children": [
        "/_authenticated/files"
      ]
    },
    "/admin": {
      "filePath": "admin.tsx"
    },
    "/queue": {
      "filePath": "queue.tsx"
    },
    "/search": {
      "filePath": "search.tsx"
    },
    "/setup": {
      "filePath": "setup.tsx"
    },
    "/_authenticated/files": {
      "filePath": "_authenticated/files.tsx",
      "parent": "/_authenticated"
    },
    "/album/$id": {
      "filePath": "album/$id.tsx"
    },
    "/artist/$id": {
      "filePath": "artist/$id.tsx"
    },
    "/playlist/$id": {
      "filePath": "playlist/$id.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
