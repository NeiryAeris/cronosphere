# Comments are provided throughout this file to help you get started.
# If you need more help, visit the Dockerfile reference guide at
# https://docs.docker.com/go/dockerfile-reference/

# Want to help us make this template better? Share your feedback here: https://forms.gle/ybq9Krt8jtBL3iCk7

ARG NODE_VERSION=22.12.0

FROM node:${NODE_VERSION}-alpine

# Stage 1: Build the application
WORKDIR /app

# Copy package files and install dependencies
COPY package.json yarn.lock* package-lock.json* ./
RUN npm install

# Copy all files and build the Next.js app
COPY . .
RUN npm run build

# Stage 2: Run the production build
FROM node:${NODE_VERSION}-alpine
WORKDIR /app

# Set environment to production
ENV NODE_ENV production

# Copy only the necessary files to run the app
COPY package.json package-lock.json* ./
RUN npm install --production

# Copy the build output and public assets from the builder stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# Expose the default Next.js port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
