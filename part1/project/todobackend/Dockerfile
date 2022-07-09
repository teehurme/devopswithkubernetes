FROM node:17-alpine 
WORKDIR /usr/src/app
COPY package.json .
COPY package-lock.json .
COPY todobackend.js .
RUN npm install
ENTRYPOINT [ "npm","start" ]