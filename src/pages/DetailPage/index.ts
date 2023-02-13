import { lazy } from 'react'

export const DetailPage = lazy(async () => await import('./ui/DetailPage').then((module) => ({
  default: module.DetailPage
})))
