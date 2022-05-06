FROM node:16.14.2-alpine3.15
WORKDIR /app
RUN apk update

COPY ./ /app
RUN npm install -f
CMD npm run start