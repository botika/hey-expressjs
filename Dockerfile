FROM node:alpine
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY package*.json ./

COPY . .
RUN npm ci --only=production
RUN npm run build
EXPOSE 8080

CMD ["node", "dist/index.js"]
