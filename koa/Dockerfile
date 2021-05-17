FROM node:14-alpine3.12
WORKDIR /node
COPY package*.json ./
RUN npm install --production

WORKDIR /node/koa
COPY . .
EXPOSE 3000

ENTRYPOINT ["./bin/entrypoint.sh" ]
