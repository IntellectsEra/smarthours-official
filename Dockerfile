# ---------- 1. Install dependencies ----------
FROM node:22-alpine AS deps
WORKDIR /app

# Install dependencies with caching
COPY package.json package-lock.json* ./
RUN npm i

# ---------- 2. Build the app ----------
FROM node:22-alpine AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# ---------- 3. Create a lightweight production image ----------
FROM node:22-alpine AS runner
WORKDIR /app


# Copy only necessary files
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules

# Expose Next.js port
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
