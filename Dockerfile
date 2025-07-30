# Use official Node.js LTS image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your backend source code
COPY . .

# Set environment variable for the port (default fallback if not set)
ENV PORT=5000

# Expose the port the app runs on (insecure, as they requested)
EXPOSE $PORT

# Start the server
CMD ["npm", "start"]
