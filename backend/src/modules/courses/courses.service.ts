// modules/courses/courses.service.ts
import { prisma } from "../../core/db/prisma"

export const coursesService = {
  getAll: () => prisma.course.findMany(),

  create: (data) => prisma.course.create({ data })
}