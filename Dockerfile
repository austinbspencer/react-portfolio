FROM node:14.4.0-alpine as build-stage

RUN mkdir /app

WORKDIR /app

COPY client/. /app/.

RUN npm install

RUN npm run build

FROM nginx:alpine AS prod-state

COPY --from=build-stage /app/out /usr/share/nginx/html/

COPY default.conf /etc/nginx/conf.d/default.conf