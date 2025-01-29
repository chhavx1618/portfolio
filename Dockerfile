# Step 1: Use official Node.js image as the base image
FROM node:16 AS builder

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of the project files
COPY . .

# Step 6: Build the Next.js project
RUN npm run build

# Step 7: Use the official Node.js image to run the app in production
FROM node:16

# Set the working directory in the container
WORKDIR /app

# Step 8: Copy the built files from the builder stage
COPY --from=builder /app ./

# Step 9: Install only production dependencies
RUN npm install --production

# Step 10: Expose the port the app will run on
EXPOSE 3000

# Step 11: Start the Next.js app in production
CMD ["npm", "start"]
