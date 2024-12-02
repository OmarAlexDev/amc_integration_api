# Use the official Node.js 16 image as the base image
FROM node:18-alpine

# Add environment variables
ARG PORT
ARG AWS_BUCKET_NAME
ARG AWS_BUCKET_REGION 
ARG AWS_ACCESS_KEY
ARG AWS_SECRET_KEY
ARG SECRET
ARG ADS_REFRESH_TOKEN
ARG ADS_CLIENT_ID
ARG ADS_CLIENT_SECRET
ARG ADS_AUTH_API
ARG ADS_AMC_API
ARG ADS_AMC_INSTANCE
ENV PORT=${PORT}
ENV AWS_BUCKET_NAME=${AWS_BUCKET_NAME}
ENV AWS_BUCKET_REGION=${AWS_BUCKET_REGION} 
ENV AWS_ACCESS_KEY=${AWS_ACCESS_KEY}
ENV AWS_SECRET_KEY=${AWS_SECRET_KEY}
ENV SECRET=${SECRET}
ENV ADS_REFRESH_TOKEN=${ADS_REFRESH_TOKEN}
ENV ADS_CLIENT_ID=${ADS_CLIENT_ID}
ENV ADS_CLIENT_SECRET=${ADS_CLIENT_SECRET}
ENV ADS_AUTH_API=${ADS_AUTH_API}
ENV ADS_AMC_API=${ADS_AMC_API}
ENV ADS_AMC_INSTANCE=${ADS_AMC_INSTANCE}

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Copy the rest of the application source code to the container
COPY . .

# Install project dependencies
RUN npm ci

## Run static analysis  
RUN npm run lint

# Create distribution folder
RUN npm run build

# Command to start your Nest.js application
CMD [ "npm", "run", "start:prod" ]

# Expose the port your Nest.js application is listening on
EXPOSE ${PORT}