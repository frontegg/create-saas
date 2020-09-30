# Use the official image as a parent image.
FROM node:current-slim

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

# Set the working directory.
WORKDIR /usr/src/app

# Copy the file from your host to your current location.
COPY package.json .

# Run the command inside your image filesystem.
RUN npm install

# Copy all other source code to work directory
ADD . /usr/src/app

# TypeScript
RUN npm run build

# Start
CMD [ "node", "./dist/server.js" ]
EXPOSE 5002
