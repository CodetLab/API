// modules/courses/courses.routes.ts
import { getCourses, createCourse } from "./courses.controller"

export const coursesRoutes = [
  {
    method: "get",
    path: "/courses",
    handler: getCourses,
    private: false
  },
  {
    method: "post",
    path: "/courses",
    handler: createCourse,
    private: true
  }
]