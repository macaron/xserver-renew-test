# Use the official Playwright image with Node.js
FROM mcr.microsoft.com/playwright:v1.54.0-noble

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy project files
COPY . .

# Create directories for test results and reports
RUN mkdir -p test-results playwright-report

# Set environment variables for headless execution
ENV PLAYWRIGHT_BROWSERS_PATH=/ms-playwright

# Default command to run tests
CMD ["npm", "test"]
