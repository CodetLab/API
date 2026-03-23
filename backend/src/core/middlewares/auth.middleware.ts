// core/middlewares/auth.middleware.ts

export const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization

  if (!token) {
    return res.status(401).json({ error: "Unauthorized" })
  }

  // lógica simple (después agregás JWT real)
  next()
}