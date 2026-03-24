// modules/courses/courses.service.ts
import { prisma } from "../../core/db/schema"

export const coursesService = {
  getAll: () => prisma.course.findMany(),

  create: (data) => prisma.course.create({ data })
}