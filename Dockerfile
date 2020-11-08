FROM node:alpine
ENV NODE_ENV=production
ENV SIMPLE_ARRAY='["foo", "bar", "fon", "bar"]'

WORKDIR /usr/src/app
COPY . .
RUN npm ci --only=production
RUN npm run build

EXPOSE 8080
CMD ["node", "-r", "tsconfig-paths/register", "-r", "ts-node/register/transpile-only", "dist/index.js"]
