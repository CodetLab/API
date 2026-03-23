import express from "express"
import { registerRoutes } from "./router"

export const app = express()

app.use(express.json())

registerRoutes(app)