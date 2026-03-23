// modules/courses/courses.controller.ts
import { coursesService } from "./courses.service"

export const getCourses = async (req, res) => {
  const data = await coursesService.getAll()
  res.json(data)
}

export const createCourse = async (req, res) => {
  const course = await coursesService.create(req.body)
  res.json(course)
}