FROM node:17-alpine 
WORKDIR /usr/src/app
COPY . .
RUN npm install
RUN npm run build
ENTRYPOINT [ "npm","start" ]