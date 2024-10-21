# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application files
COPY . .

# Expose the port Vite will run on
EXPOSE 5173

# Command to start Vite's dev server
CMD ["npm", "run", "dev"]
