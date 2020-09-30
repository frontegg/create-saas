# Use the official image as a parent image.
FROM node:current-slim

# Set the working directory.
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY ./templates/airframe/package.json ./
COPY ./templates/airframe/package-lock.json ./

# Run the command inside your image filesystem.
RUN npm install

# add app
COPY ./templates/airframe/ ./

# build
CMD ["npm", "build:prod"]

# start app
CMD ["npm", "start:prod"]
