# syntax=docker/dockerfile:1

ARG NODE_VERSION=22.12.0

# Stage 1: Build the application with an alias "builder"
FROM node:${NODE_VERSION}-alpine AS builder
WORKDIR /app

# Copy package files and install dependencies
COPY package.json yarn.lock* package-lock.json* ./
RUN npm install

# Copy all files and build the Next.js app
COPY . ./
RUN npm run build

# Stage 2: Run the production build
FROM node:${NODE_VERSION}-alpine
WORKDIR /app

# Set environment to production
ENV NODE_ENV production
ENV PORT 9000

# Copy only the necessary files to run the app
COPY package.json package-lock.json* ./
RUN npm install --production

# Copy the build output and public assets from the builder stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# Expose the configured port
EXPOSE 9000

# Start the application
CMD ["npm", "start"]
