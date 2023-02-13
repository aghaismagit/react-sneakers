import { lazy } from 'react'

export const NotFoundPage = lazy(async () => await import('./ui/NotFoundPage').then((module) => ({
  default: module.NotFoundPage
})))
