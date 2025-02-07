# stage 1 : Build with Node.js
FROM node:20.9.0-alpine AS builder

WORKDIR /app

# Cache dependencies
COPY package.json package-lock.json ./
RUN npm ci --omit=dev

# Copy code and build
COPY . .
RUN npm run build -- --configuration=production

# Stage 2: Web Server with Nginx
FROM nginx:1.25.3-alpine

# Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built files
COPY --from=builder /app/dist/mi-app-angular /usr/share/nginx/html

# Container port and health
EXPOSE 80
HEALTHCHECK --interval=30s --timeout=3s CMD curl --fail http://localhost:80 || exit 1
