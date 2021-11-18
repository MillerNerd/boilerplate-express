FROM node:17
ENV NODE_ENV production
WORKDIR /usr/src/app

COPY package-lock.json package-lock.json
RUN npm ci
COPY . .
ENTRYPOINT npm run start
EXPOSE 3000
