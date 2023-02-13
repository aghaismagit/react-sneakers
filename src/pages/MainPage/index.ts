import { lazy } from 'react'

export const MainPage = lazy(async () => await import('./ui/MainPage').then((module) => ({
  default: module.MainPage
})))
