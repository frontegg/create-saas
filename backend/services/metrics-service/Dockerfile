# Use the official image as a parent image.
FROM node:12.19.0-alpine

# Set the working directory.
WORKDIR /usr/src/app

# Copy the file from your host to your current location.
COPY package.json .

# Run the command inside your image filesystem.
RUN npm install

# Copy all other source code to work directory
COPY . .

# TypeScript
RUN npm run build

RUN rm -rf /usr/src/app/ormconfig.ts

RUN cp /usr/src/app/dist/ormconfig.js /usr/src/app/ormconfig.js

# Start
CMD [ "node", "./dist/src/server.js" ]
EXPOSE 5001
