
import { type RouteProps } from "react-router-dom"
import { MainPage } from "@/pages/MainPage"
import { DetailPage } from "@/pages/DetailPage"
import { NotFoundPage } from "@/pages/NotFoundPage"

export enum AppRoutes {
  MAIN = "main",
  DETAIL_PRODUCT = "detail_product",
  NOT_FOUND = "not_found",
}
export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.DETAIL_PRODUCT]: "/detail_product/:id",
  [AppRoutes.NOT_FOUND]: "*"
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />
  },
  [AppRoutes.DETAIL_PRODUCT]: {
    path: RoutePath.detail_product,
    element: <DetailPage />
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />
  }
}
