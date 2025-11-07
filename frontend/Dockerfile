FROM node:20-alpine

# Set a working directory
WORKDIR /app

# Install dependencies (use package-lock when present)
COPY package.json package-lock.json ./
RUN npm ci --silent

# Copy source
COPY . .

# Expose Vite default port
EXPOSE 5173

# Start the dev server, bind to all interfaces so host can access it
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "5173"]
