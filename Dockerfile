# pull the official base image
FROM node:14.4.0-alpine
# set working direction
WORKDIR /app
# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH
# install application dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm i
# add app
COPY . ./
# Expose the port
EXPOSE 3000
# start app
CMD ["next", "start"]