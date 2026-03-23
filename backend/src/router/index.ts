// router/index.ts

import { coursesRoutes } from "../modules/courses/courses.routes"
import { usersRoutes } from "../modules/users/users.routes"
import { authMiddleware } from "../core/middlewares/auth.middleware"

const allRoutes = [
  ...coursesRoutes,
  ...usersRoutes
]

export const registerRoutes = (app) => {
  allRoutes.forEach(route => {
    const middlewares = []

    if (route.private) {
      middlewares.push(authMiddleware)
    }

    app[route.method](route.path, ...middlewares, route.handler)
  })
}