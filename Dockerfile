FROM node

EXPOSE 8080

WORKDIR /usr/src/app

ENTRYPOINT node server.js
