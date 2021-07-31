# pull the official base image
FROM node:10.4.3
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
CMD ["npm", "start"]