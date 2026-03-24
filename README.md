# API

Dependencias:
# Runtime
npm install express cors dotenv

# Base de datos
npm install drizzle-orm pg
npm install -D drizzle-kit

# TypeScript + desarrollo
npm install -D typescript ts-node-dev @types/node @types/express

# Seguridad / Auth (base)
npm install jsonwebtoken bcrypt
npm install -D @types/jsonwebtoken @types/bcrypt
npm install zod

# Crear base de datos + migración
npx drizzle-kit generate
npx drizzle-kit push